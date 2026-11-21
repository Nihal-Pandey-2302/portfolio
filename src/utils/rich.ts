// Inline formatting for content strings in src/config:
//   `code`   **bold**   [text](https://url)   [text](#section)
// The text is our own, but it is escaped first so a stray "<" in copy can't become markup.
const ESCAPES: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };

export function rich(text: string): string {
  return text
    .replace(/[&<>"]/g, (c) => ESCAPES[c])
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="link">$1</a>',
    )
    // a link to a section of this page stays in the tab
    .replace(/\[([^\]]+)\]\((#[\w-]+)\)/g, '<a href="$2" class="link">$1</a>');
}
