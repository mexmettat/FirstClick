"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type UsePresenceWebcamOptions = {
  enabled: boolean;
};

export function usePresenceWebcam({ enabled }: UsePresenceWebcamOptions) {
  const streamRef = useRef<MediaStream | null>(null);
  const videoElementRef = useRef<HTMLVideoElement | null>(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const tryAttach = useCallback(async () => {
    const video = videoElementRef.current;
    const stream = streamRef.current;
    if (!video || !stream) return;

    try {
      video.srcObject = stream;
      video.muted = true;
      await video.play();
      setReady(true);
      setError(null);
    } catch {
      setReady(false);
      setError("Kamera önizlemesi başlatılamadı.");
    }
  }, []);

  const videoRef = useCallback(
    (node: HTMLVideoElement | null) => {
      videoElementRef.current = node;
      if (node) {
        void tryAttach();
      }
    },
    [tryAttach]
  );

  useEffect(() => {
    if (!enabled) {
      setReady(false);
      setError(null);
      return;
    }

    let cancelled = false;

    const start = async () => {
      if (!navigator.mediaDevices?.getUserMedia) {
        setError("Bu tarayıcıda kamera desteklenmiyor.");
        setReady(false);
        return;
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "user",
            width: { ideal: 640 },
            height: { ideal: 360 },
          },
          audio: false,
        });

        if (cancelled) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }

        streamRef.current = stream;
        await tryAttach();
      } catch {
        streamRef.current = null;
        setReady(false);
        setError("Kamera kullanılamıyor — mikrofon ile devam edebilirsiniz.");
      }
    };

    void start();

    return () => {
      cancelled = true;
      streamRef.current?.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
      if (videoElementRef.current) {
        videoElementRef.current.srcObject = null;
      }
      setReady(false);
    };
  }, [enabled, tryAttach]);

  return { videoRef, ready, error };
}
