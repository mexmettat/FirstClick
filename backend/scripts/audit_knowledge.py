"""Audit the global FirstClick knowledge corpus before embedding.

Usage:
  .venv/bin/python -m scripts.audit_knowledge
"""

from __future__ import annotations

import re
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
KNOWLEDGE_DIR = ROOT / "knowledge"


def words(text: str) -> list[str]:
    return re.findall(r"[0-9A-Za-zÇĞİÖŞÜçğıöşü'-]+", text)


def category_for(number: int) -> str:
    if number <= 50:
        return "foundation"
    if number <= 65:
        return "ux-product"
    if number <= 80:
        return "sector"
    if number <= 95:
        return "persona-research"
    return "growth-trust"


def main() -> int:
    files = sorted(KNOWLEDGE_DIR.glob("*.md"))
    if not files:
        print("FAIL: knowledge dosyası bulunamadı.")
        return 1

    failures: list[str] = []
    warnings: list[str] = []
    categories: Counter[str] = Counter()
    document_numbers: list[int] = []
    total_words = 0
    total_bytes = 0

    for path in files:
        text = path.read_text(encoding="utf-8")
        number_match = re.match(r"(\d+)-", path.name)
        number = int(number_match.group(1)) if number_match else 0
        if number:
            document_numbers.append(number)
        else:
            failures.append(f"{path.name}: sayısal doküman kimliği yok")
        category = category_for(number)
        categories[category] += 1

        word_count = len(words(text))
        total_words += word_count
        total_bytes += len(text.encode("utf-8"))

        if not text.lstrip().startswith("# "):
            failures.append(f"{path.name}: H1 başlık yok")
        if word_count < 350:
            warnings.append(f"{path.name}: kısa ({word_count} kelime)")
        if number >= 51 and word_count < 900:
            failures.append(f"{path.name}: yeni uzmanlık dosyası yetersiz ({word_count} kelime)")
        if "FirstClick" not in text:
            warnings.append(f"{path.name}: FirstClick bağlamı yok")

    duplicate_names = [name for name, count in Counter(p.name for p in files).items() if count > 1]
    if duplicate_names:
        failures.append(f"Tekrarlı dosya adları: {', '.join(duplicate_names)}")

    duplicate_numbers = [
        str(number)
        for number, count in sorted(Counter(document_numbers).items())
        if count > 1
    ]
    if duplicate_numbers:
        failures.append(f"Tekrarlı doküman numaraları: {', '.join(duplicate_numbers)}")

    if document_numbers:
        expected_numbers = set(range(1, max(document_numbers) + 1))
        missing_numbers = sorted(expected_numbers.difference(document_numbers))
        if missing_numbers:
            failures.append(
                "Eksik doküman numaraları: "
                + ", ".join(str(number) for number in missing_numbers)
            )

    print(f"Knowledge files : {len(files)}")
    print(f"Total words     : {total_words:,}")
    print(f"Total size      : {total_bytes / 1024:.1f} KiB")
    print("Categories      :")
    for category, count in sorted(categories.items()):
        print(f"  {category:18} {count}")

    if warnings:
        print(f"\nWarnings ({len(warnings)}):")
        for warning in warnings[:20]:
            print(f"  - {warning}")
        if len(warnings) > 20:
            print(f"  ... {len(warnings) - 20} more")

    if failures:
        print(f"\nFAIL ({len(failures)}):")
        for failure in failures:
            print(f"  - {failure}")
        return 1

    print("\nPASS: corpus embedding için hazır.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
