#!/usr/bin/env python3
"""
Split monolithic LSE MDX into docs/london-stock-exchange-integration/ (EN) and
docs-es/london-stock-exchange-integration/ (ES) grouped by v2 country code.
"""

from __future__ import annotations

import re
from collections import OrderedDict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

EN_MONO = ROOT / "docs" / "london-stock-exchange-integration.mdx"
ES_MONO = ROOT / "docs-es" / "london-stock-exchange-integration.mdx"

EN_DIR = ROOT / "docs" / "london-stock-exchange-integration"
ES_DIR = ROOT / "docs-es" / "london-stock-exchange-integration"

LOCATION_RE = re.compile(
    r"\*\*(?:Location in the collection|Location in collection|Ubicación en la colección):\*\*\s*v2 › ([a-z]{2}) ›",
    re.IGNORECASE,
)

# Allow missing space after the dot (e.g. "### 121.Company")
SECTION_START_RE = re.compile(r"^### (\d+)\.\s*(.+)$", re.MULTILINE)

# ISO-ish code -> URL slug (Spain uses spain, not es)
CODE_TO_SLUG: dict[str, str] = {
    "ar": "argentina",
    "bo": "bolivia",
    "br": "brazil",
    "ca": "canada",
    "cl": "chile",
    "co": "colombia",
    "cr": "costa-rica",
    "do": "dominican-republic",
    "ec": "ecuador",
    "es": "spain",
    "gt": "guatemala",
    "hn": "honduras",
    "in": "india",
    "mx": "mexico",
    "pa": "panama",
    "pe": "peru",
    "py": "paraguay",
    "sv": "el-salvador",
    "uy": "uruguay",
    "ve": "venezuela",
    "un": "un",
    "misc": "misc",
}

CODE_TITLE_EN: dict[str, str] = {
    "ar": "Argentina",
    "bo": "Bolivia",
    "br": "Brazil",
    "ca": "Canada",
    "cl": "Chile",
    "co": "Colombia",
    "cr": "Costa Rica",
    "do": "Dominican Republic",
    "ec": "Ecuador",
    "es": "Spain",
    "gt": "Guatemala",
    "hn": "Honduras",
    "in": "India",
    "mx": "Mexico",
    "pa": "Panama",
    "pe": "Peru",
    "py": "Paraguay",
    "sv": "El Salvador",
    "uy": "Uruguay",
    "ve": "Venezuela",
    "un": "UN / other",
    "misc": "Other",
}

CODE_TITLE_ES: dict[str, str] = {
    "ar": "Argentina",
    "bo": "Bolivia",
    "br": "Brasil",
    "ca": "Canadá",
    "cl": "Chile",
    "co": "Colombia",
    "cr": "Costa Rica",
    "do": "República Dominicana",
    "ec": "Ecuador",
    "es": "España",
    "gt": "Guatemala",
    "hn": "Honduras",
    "in": "India",
    "mx": "México",
    "pa": "Panamá",
    "pe": "Perú",
    "py": "Paraguay",
    "sv": "El Salvador",
    "uy": "Uruguay",
    "ve": "Venezuela",
    "un": "ONU / otros",
    "misc": "Otros",
}


def strip_front_matter(raw: str) -> tuple[str, str]:
    if not raw.startswith("---\n"):
        return "", raw
    end = raw.find("\n---\n", 4)
    if end == -1:
        return "", raw
    fm = raw[4:end]
    body = raw[end + 5 :]
    return fm, body


def extract_after_imports(body: str) -> str:
    """Drop leading import Head + <Head>...</Head> block."""
    m = re.search(r"</Head>\s*\n", body, re.DOTALL)
    if m:
        return body[m.end() :].lstrip("\n")
    return body


def split_intro_and_sections(markdown_body: str) -> tuple[str, list[tuple[int, str, str]]]:
    """Returns intro (before first ### N.) and list of (index, title_line, chunk)."""
    matches = list(SECTION_START_RE.finditer(markdown_body))
    if not matches:
        raise ValueError("No ### N. sections found")
    intro = markdown_body[: matches[0].start()].rstrip()
    sections: list[tuple[int, str, str]] = []
    for i, m in enumerate(matches):
        start = m.start()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(markdown_body)
        num = int(m.group(1))
        title_line = m.group(0)
        chunk = markdown_body[start:end].rstrip()
        sections.append((num, title_line, chunk))
    return intro, sections


def country_code_from_chunk(chunk: str) -> str:
    loc = LOCATION_RE.search(chunk)
    if loc:
        return loc.group(1).lower()
    return "misc"


def slug_for_code(code: str) -> str:
    if code in CODE_TO_SLUG:
        return CODE_TO_SLUG[code]
    return re.sub(r"[^a-z0-9]+", "-", code.strip().lower()) or "misc"


def promote_headings(chunk: str) -> str:
    """### N. Title -> ## N. Title for country pages (flatter TOC)."""
    return re.sub(r"^### (\d+\.\s*)", r"## \1", chunk, flags=re.MULTILINE)


def build_buckets_paired(
    en_sections: list[tuple[int, str, str]],
    es_sections: list[tuple[int, str, str]],
) -> tuple[OrderedDict[str, list[str]], OrderedDict[str, list[str]]]:
    """Country code comes from the EN chunk so EN/ES stay aligned if Location differs."""
    buckets_en: OrderedDict[str, list[str]] = OrderedDict()
    buckets_es: OrderedDict[str, list[str]] = OrderedDict()
    for (_n1, _t1, en_chunk), (_n2, _t2, es_chunk) in zip(en_sections, es_sections):
        code = country_code_from_chunk(en_chunk)
        if code not in buckets_en:
            buckets_en[code] = []
            buckets_es[code] = []
        buckets_en[code].append(promote_headings(en_chunk))
        buckets_es[code].append(promote_headings(es_chunk))
    return buckets_en, buckets_es


def write_country_page(
    out_dir: Path,
    code: str,
    bodies: list[str],
    *,
    lang: str,
    other_hub: str,
) -> tuple[str, str, int]:
    slug = slug_for_code(code)
    path = out_dir / f"{slug}.mdx"
    if lang == "en":
        title_country = CODE_TITLE_EN.get(code, code.upper())
        doc_title = f"{title_country} — Verifik public API"
        desc = f"Non-indexed {title_country} endpoints. Direct URL only."
        lang_line = f"**English** (this page) · [Versión en español]({other_hub}/{slug}/)"
        h1 = f"# {title_country}"
    else:
        title_country = CODE_TITLE_ES.get(code, CODE_TITLE_EN.get(code, code.upper()))
        doc_title = f"{title_country} — API pública Verifik"
        desc = f"Endpoints de {title_country}, sin indexar. Solo URL directa."
        lang_line = f"[English version]({other_hub}/{slug}/) · **Español** (esta página)"
        h1 = f"# {title_country}"

    # Slug is relative to each docs plugin routeBasePath (no /verifik-es on docs-es).
    base = "/london-stock-exchange-integration"

    content = "\n\n".join(bodies)
    text = f"""---
title: {doc_title}
description: {desc}
slug: {base}/{slug}
unlisted: true
---

import Head from '@docusaurus/Head';

<Head>
  <meta name="robots" content="noindex, nofollow" />
</Head>

{lang_line}

{h1}

{content}
"""
    path.write_text(text, encoding="utf-8")
    return slug, code, len(bodies)


def write_hub(
    out_dir: Path,
    *,
    lang: str,
    intro: str,
    country_rows: list[tuple[str, str, int]],
    other_base: str,
) -> None:
    if lang == "en":
        list_heading = "## Browse by country"
        desc = "Non-indexed reference of Verifik public endpoints. Direct URL access only."
        doc_title = "Verifik public API — endpoint reference"
        lang_line = f"**English** (this page) · [Versión en español]({other_base}/)"
        browse_note = (
            "Endpoints are grouped by country (API path prefix). "
            "Pick a country below."
        )
        link_prefix = "/london-stock-exchange-integration"
    else:
        list_heading = "## Explorar por país"
        desc = "Referencia no indexada de endpoints públicos Verifik. Solo acceso por URL directa."
        doc_title = "API pública de Verifik — referencia de endpoints"
        lang_line = f"[English version]({other_base}/) · **Español** (esta página)"
        browse_note = (
            "Los endpoints están agrupados por país (prefijo de ruta de la API). "
            "Elige un país abajo."
        )
        link_prefix = "/verifik-es/london-stock-exchange-integration"

    slug_base = "/london-stock-exchange-integration"

    # Drop list heading; strip top language switcher (re-added below after Head)
    intro_clean = re.sub(
        r"^## (List of queries|Listado de consultas).*$",
        "",
        intro,
        flags=re.MULTILINE,
    )
    intro_clean = re.sub(
        r"^\*\*English\*\* \(this page\).*\n+",
        "",
        intro_clean,
        flags=re.MULTILINE,
    )
    intro_clean = re.sub(
        r"^\[English version\]\([^)]+\) · \*\*Español\*\*.*\n+",
        "",
        intro_clean,
        flags=re.MULTILINE,
    ).rstrip()

    lines = [
        f"---\ntitle: {doc_title}\ndescription: {desc}\nslug: {slug_base}\nunlisted: true\n---",
        "",
        "import Head from '@docusaurus/Head';",
        "",
        "<Head>",
        '  <meta name="robots" content="noindex, nofollow" />',
        "</Head>",
        "",
        lang_line,
        "",
        intro_clean.strip(),
        "",
        list_heading,
        "",
        browse_note,
        "",
    ]
    for slug, label, count in country_rows:
        lines.append(f"- [{label} ({count} endpoints)]({link_prefix}/{slug}/)")

    text = "\n".join(lines) + "\n"
    (out_dir / "index.mdx").write_text(text, encoding="utf-8")


def parse_mono(path: Path) -> tuple[str, list[tuple[int, str, str]]]:
    raw = path.read_text(encoding="utf-8")
    _fm, body = strip_front_matter(raw)
    md = extract_after_imports(body)
    return split_intro_and_sections(md)


def main() -> None:
    if not EN_MONO.is_file() or not ES_MONO.is_file():
        raise SystemExit(
            f"Missing monolith MDX. Expected:\n  {EN_MONO}\n  {ES_MONO}\n"
            "Run scripts/build-lse-integration-docs.py (writes monoliths, then splits), "
            "or restore both files before running this script alone."
        )
    en_intro, en_sections = parse_mono(EN_MONO)
    es_intro, es_sections = parse_mono(ES_MONO)
    if len(en_sections) != len(es_sections):
        raise SystemExit(
            f"EN/ES section count mismatch: {len(en_sections)} vs {len(es_sections)}"
        )
    for i, ((n1, _, _), (n2, _, _)) in enumerate(zip(en_sections, es_sections)):
        if n1 != n2:
            raise SystemExit(f"Section index mismatch at {i}: {n1} vs {n2}")

    en_buckets, es_buckets = build_buckets_paired(en_sections, es_sections)

    EN_DIR.mkdir(parents=True, exist_ok=True)
    ES_DIR.mkdir(parents=True, exist_ok=True)

    country_order: list[tuple[str, str, int]] = []
    for code in en_buckets.keys():
        slug, title_en, count = write_country_page(
            EN_DIR,
            code,
            en_buckets[code],
            lang="en",
            other_hub="/verifik-es/london-stock-exchange-integration",
        )
        write_country_page(
            ES_DIR,
            code,
            es_buckets[code],
            lang="es",
            other_hub="/london-stock-exchange-integration",
        )
        country_order.append((slug, code, count))

    rows_en = [
        (slug, CODE_TITLE_EN.get(code, code.upper()), count)
        for slug, code, count in country_order
    ]
    rows_en.sort(key=lambda x: x[1].lower())
    rows_es = [
        (slug, CODE_TITLE_ES.get(code, CODE_TITLE_EN.get(code, code)), count)
        for slug, code, count in country_order
    ]
    rows_es.sort(key=lambda x: x[1].lower())

    write_hub(
        EN_DIR,
        lang="en",
        intro=en_intro,
        country_rows=rows_en,
        other_base="/verifik-es/london-stock-exchange-integration",
    )
    write_hub(
        ES_DIR,
        lang="es",
        intro=es_intro,
        country_rows=rows_es,
        other_base="/london-stock-exchange-integration",
    )

    print(f"Wrote {len(country_order)} countries + hub EN under {EN_DIR}")
    print(f"Wrote {len(country_order)} countries + hub ES under {ES_DIR}")


if __name__ == "__main__":
    main()
