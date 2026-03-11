// bun test src/problems/55-markdown/markdown-parser.test.ts
import React, { useMemo } from 'react'
import css from './markdown.module.css'
import flex from '@course/styles'
import cx from '@course/cx'

interface MarkdownProps {
  text: string
}

/**
 * Expected usage:
 * <Markdown text="# Hello\n\nThis is **bold** and *italic*" />
 * Renders parsed markdown as React elements (not dangerouslySetInnerHTML)
 */

export const Markdown = ({ text }: MarkdownProps) => {
  // Step 1: Parse markdown to HTML string — useMemo(() => parseRichText(text, RICH_TEXT_RULES), [text])
  // Step 2: Convert HTML string to DOM — new DOMParser().parseFromString(html, 'text/html')
  // Step 3: Recursive htmlToReact(node) function — converts DOM nodes to React elements:
  //   - Text nodes → return textContent
  //   - Element nodes → map tagName to React element, process attributes (class→className, etc.)
  //   - Recursively process childNodes
  //   - Handle: div, p, h1-h6, ul, ol, li, strong, em, del, a, img, blockquote, hr, pre, code, table elements, details, summary
  // Step 4: Render — wrap result in <div className={css.markdown}>
  return <div>TODO: Implement</div>
}
