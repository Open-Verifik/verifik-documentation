#!/usr/bin/env python3
"""Repair LSE integration MDX: glued fences (EN) and blank lines inside pipe tables (EN+ES)."""

from __future__ import annotations

from pathlib import Path


def fix_english_glued_fences(text: str) -> str:
    """Split code fences that were pasted on the same line as prose (EN export only)."""
    text = text.replace(
        "(with example values):```",
        "(with example values):\n\n```",
    )
    text = text.replace("```- **HTTP", "```\n\n- **HTTP")
    text = text.replace("```**", "```\n\n**")
    text = text.replace("```---", "```\n\n---")
    text = text.replace(":**```bash", ":**\n\n```bash")
    text = text.replace("**```bash", "**\n\n```bash")
    text = text.replace("**```json", "**\n\n```json")
    return text


def collapse_blank_lines_in_pipe_tables_outside_fences(text: str) -> str:
    """GFM tables break if there are blank lines between rows; skip fenced code blocks."""
    lines = text.split("\n")
    out: list[str] = []
    in_fence = False
    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        if stripped.startswith("```"):
            in_fence = not in_fence
            out.append(line)
            i += 1
            continue
        if not in_fence and stripped.startswith("|"):
            out.append(line)
            i += 1
            while i < len(lines):
                if lines[i].strip() == "":
                    j = i + 1
                    while j < len(lines) and lines[j].strip() == "":
                        j += 1
                    if j < len(lines) and lines[j].strip().startswith("|"):
                        i = j
                        out.append(lines[i])
                        i += 1
                        continue
                    break
                if lines[i].strip().startswith("|"):
                    out.append(lines[i])
                    i += 1
                    continue
                break
            continue
        out.append(line)
        i += 1
    return "\n".join(out)


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    dirs = [
        root / "docs" / "london-stock-exchange-integration",
        root / "docs-es" / "london-stock-exchange-integration",
    ]
    paths: list[Path] = []
    for d in dirs:
        if d.is_dir():
            paths.extend(sorted(d.glob("*.mdx")))
    if not paths:
        print("no LSE mdx files found")
        return
    for path in paths:
        raw = path.read_text(encoding="utf-8")
        text = raw
        if "docs-es" not in str(path):
            text = fix_english_glued_fences(text)
        text = collapse_blank_lines_in_pipe_tables_outside_fences(text)
        if text != raw:
            path.write_text(text, encoding="utf-8")
            print(f"updated {path.relative_to(root)}")
        else:
            print(f"unchanged {path.relative_to(root)}")


if __name__ == "__main__":
    main()
