#!/usr/bin/env python3
"""Regression eval: run mock analyzer on 20 fixtures and check score bands.

Usage (from backend/):
  .venv/bin/python -m evals.run_eval
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from app.schemas.analysis import AnalysisFormData  # noqa: E402
from app.services.mock_analyzer import generate_mock_analysis  # noqa: E402


def main() -> int:
    fixtures_path = Path(__file__).with_name("fixtures.json")
    fixtures = json.loads(fixtures_path.read_text(encoding="utf-8"))
    failed = 0
    print(f"Running {len(fixtures)} eval fixtures (mock analyzer)…\n")
    for fx in fixtures:
        form = AnalysisFormData(
            productName=fx["productName"],
            productDescription=fx["productDescription"],
            targetAudience=fx.get("targetAudience", ""),
            coreFeatures=fx.get("coreFeatures", ""),
            differentiator=fx.get("differentiator", ""),
            selectedPersonas=fx["selectedPersonas"],
        )
        result = generate_mock_analysis(form)
        lo, hi = fx["expectedOverall"]
        ok = lo <= result.overall_score <= hi
        status = "PASS" if ok else "FAIL"
        if not ok:
            failed += 1
        print(
            f"[{status}] {fx['id']} {fx['productName']}: "
            f"score={result.overall_score} expected=[{lo},{hi}]"
        )
    print(f"\n{len(fixtures) - failed}/{len(fixtures)} passed")
    return 1 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
