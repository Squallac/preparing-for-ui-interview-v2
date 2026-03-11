// bun test src/problems/55-markdown/markdown-parser.test.ts

/**
 * Expected input/output:
 * parseRichText('**bold** and *italic*', RICH_TEXT_RULES)
 * → '<p><strong>bold</strong> and <em>italic</em></p>'
 *
 * parseRichText('# Heading\n\nParagraph', RICH_TEXT_RULES)
 * → '<h1>Heading</h1>\n<p>Paragraph</p>'
 */

// Step 1: parseRichText(text, rules) — pipe text through each rule sequentially:
//   function parseRichText(text: string, rules: TRichTextRule[]) { return rules.reduce((acc, rule) => rule.apply(acc), text) }

// Step 2: TRichTextPattern class — wraps a RegExp + replacer function:
//   - constructor(regexp, replacer) — store pattern and replacer
//   - apply(text) — use text.replace(regexp, replacer) or manual matchAll loop for global patterns

// Step 3: TRichTextRule class — groups multiple patterns under a name:
//   - constructor(name, patterns: TRichTextPattern[])
//   - apply(text) — pipe text through each pattern sequentially

// Step 4: Define individual rules (each is a TRichTextRule with patterns):
//   - HEADING_RULE: /^(#{1,6})\s+(.+)$/gm → <h1>-<h6>
//   - HORIZONTAL_RULE: /^---$/gm → <hr>
//   - BLOCKQUOTE_RULE: /^>\s+(.+)$/gm → <blockquote>
//   - UNORDERED_LIST_RULE: /^(?:[-*]\s+.+\n?)+/gm → <ul><li>...</li></ul>
//   - ORDERED_LIST_RULE: /^(?:\d+\.\s+.+\n?)+/gm → <ol><li>...</li></ol>
//   - TABLE_RULE: header|separator|rows → <table>
//   - CODE_BLOCK_RULE: /```(\w*)\n([\s\S]*?)```/g → <pre><code>
//   - PARAGRAPH_RULE: wrap remaining text blocks in <p>
//   - Inline rules: CODE_RULE (`), BOLD_RULE (**), ITALIC_RULE (*), STRIKETHROUGH_RULE (~~)
//   - MIXED_TEXT_RULE: handle links [text](url) and images ![alt](url)

// Step 5: Export RICH_TEXT_RULES array — ordered list of all rules (order matters!):
//   [HEADING, HORIZONTAL, BLOCKQUOTE, LIST, CODE_BLOCK, MIXED_TEXT, PARAGRAPH, MIXED_TEXT, CODE, BOLD, ITALIC, STRIKETHROUGH]
