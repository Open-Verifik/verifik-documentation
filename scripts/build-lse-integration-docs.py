#!/usr/bin/env python3
"""Build LSE docs: ES from source markdown, EN via translation, then split into country pages."""

import re
import subprocess
import sys
import time
from pathlib import Path

from deep_translator import GoogleTranslator

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path("/Users/miguel/Downloads/DOCUMENTACION-API-Verifik.md")
ES_OUT = ROOT / "docs-es" / "london-stock-exchange-integration.mdx"
EN_OUT = ROOT / "docs" / "london-stock-exchange-integration.mdx"

ES_HEADER = """---
title: Guía de consultas API (referencia)
description: Referencia no indexada de endpoints públicos Verifik. Solo acceso por URL directa.
slug: /london-stock-exchange-integration
unlisted: true
---

import Head from '@docusaurus/Head';

<Head>
  <meta name="robots" content="noindex, nofollow" />
</Head>

[English version](/london-stock-exchange-integration/) · **Español** (esta página)

"""

EN_HEADER = """---
title: API queries guide (reference)
description: Non-indexed reference of Verifik public endpoints. Direct URL access only.
slug: /london-stock-exchange-integration
unlisted: true
---

import Head from '@docusaurus/Head';

<Head>
  <meta name="robots" content="noindex, nofollow" />
</Head>

**English** (this page) · [Versión en español](/verifik-es/london-stock-exchange-integration/)

"""


def split_code_fences(text: str) -> list[str]:
    pattern = r"(```[\s\S]*?```)"
    return re.split(pattern, text)


def translate_batches(text: str, translator: GoogleTranslator, max_chars: int = 4500) -> str:
    if not text.strip():
        return text
    paras = text.split("\n\n")
    batches: list[str] = []
    buf: list[str] = []
    size = 0
    for p in paras:
        plen = len(p) + (2 if buf else 0)
        if buf and size + plen > max_chars:
            batches.append("\n\n".join(buf))
            buf = [p]
            size = len(p)
        else:
            buf.append(p)
            size += plen
    if buf:
        batches.append("\n\n".join(buf))
    out: list[str] = []
    for i, batch in enumerate(batches):
        if not batch.strip():
            out.append(batch)
            continue
        try:
            translated = translator.translate(batch)
            out.append(translated if translated is not None else batch)
        except Exception as e:
            print(f"Translate error batch {i}: {e}", file=sys.stderr)
            out.append(batch)
        time.sleep(0.12)
        if (i + 1) % 10 == 0:
            print(f"  translated {i + 1}/{len(batches)} batches", flush=True)
    return "\n\n".join(out)


def main() -> None:
    if not SOURCE.is_file():
        print(f"Missing source: {SOURCE}", file=sys.stderr)
        sys.exit(1)
    raw = SOURCE.read_text(encoding="utf-8")
    raw = raw.replace("\r\n", "\n")
    # Collapse 3+ newlines to 2
    raw = re.sub(r"\n{3,}", "\n\n", raw)

    en_only = "--en-only" in sys.argv
    if not en_only:
        ES_OUT.write_text(ES_HEADER + raw.lstrip(), encoding="utf-8")
        print(f"Wrote {ES_OUT}")

    print("Translating to English (may take several minutes)..." + (" [en-only]" if en_only else ""))
    translator = GoogleTranslator(source="es", target="en")
    parts = split_code_fences(raw)
    en_parts: list[str] = []
    for idx, part in enumerate(parts):
        if part.startswith("```"):
            en_parts.append(part)
        else:
            try:
                en_parts.append(translate_batches(part, translator))
            except Exception as e:
                print(f"Segment {idx} failed, keeping Spanish: {e}", file=sys.stderr)
                en_parts.append(part)
        if (idx + 1) % 20 == 0:
            print(f"  processed {idx + 1}/{len(parts)} segments", flush=True)

    en_body = "".join(en_parts)
    EN_OUT.write_text(EN_HEADER + en_body.lstrip(), encoding="utf-8")
    print(f"Wrote {EN_OUT}")

    if not en_only:
        split_script = ROOT / "scripts" / "split-lse-by-country.py"
        proc = subprocess.run([sys.executable, str(split_script)], cwd=str(ROOT))
        if proc.returncode != 0:
            sys.exit(proc.returncode)
        EN_OUT.unlink(missing_ok=True)
        ES_OUT.unlink(missing_ok=True)
        print("Split into country pages; removed monolith MDX.")
    else:
        print(
            "en-only: monolith left on disk. Run `python3 scripts/split-lse-by-country.py` "
            "after both EN and ES monoliths exist.",
            file=sys.stderr,
        )


if __name__ == "__main__":
    main()
