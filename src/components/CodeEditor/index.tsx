import { useEffect } from 'react'

export type Token = { t: 'keyword' | 'var' | 'fn' | 'string' | 'number' | 'plain'; v: string }
export type Line  = { ln: number; tokens: Token[] }

/** Helper — build a Line array from a plain string array */
export function codeLines(lines: string[]): Line[] {
  return lines.map((v, i) => ({ ln: i + 1, tokens: v === '' ? [] : tokenize(v) }))
}

const RULES: [Token['t'], RegExp][] = [
  ['string',  /^(['"`])(?:\\.|(?!\1)[^\\])*\1/],
  ['number',  /^\b\d+(\.\d+)?\b/],
  ['keyword', /^\b(import|export|default|from|const|let|var|function|return|for|if|else|new|of|in)\b/],
  ['fn',      /^\b([A-Z][a-zA-Z0-9]*|[a-z][a-zA-Z0-9]*)(?=\s*\()/],
  ['var',     /^\b[a-zA-Z_$][a-zA-Z0-9_$]*\b/],
  ['plain',   /^[^a-zA-Z0-9_$'"` \t]+|^ +/],
]

function tokenize(line: string): Token[] {
  const tokens: Token[] = []
  let rest = line
  while (rest.length) {
    let matched = false
    for (const [type, re] of RULES) {
      const m = rest.match(re)
      if (m) {
        tokens.push({ t: type, v: m[0] })
        rest = rest.slice(m[0].length)
        matched = true
        break
      }
    }
    if (!matched) { tokens.push({ t: 'plain', v: rest[0] }); rest = rest.slice(1) }
  }
  return tokens
}

const tokenColor: Record<string, string> = {
  keyword: '#569cd6',
  var:     '#9cdcfe',
  fn:      '#dcdcaa',
  string:  '#ce9178',
  number:  '#b5cea8',
  plain:   '#d4d4d4',
}

interface CodeEditorProps {
  lines:     Line[]
  filename?: string
  onClose?:  () => void
}

function CodeEditor({ lines, filename = 'index.ts', onClose }: CodeEditorProps) {
  return (
    <div className="code-editor">
      <div className="code-editor_titlebar">
        <span className="code-editor_titlebar-dot code-editor_titlebar-dot--red" onClick={onClose} />
        <span className="code-editor_titlebar-dot code-editor_titlebar-dot--yellow" />
        <span className="code-editor_titlebar-dot code-editor_titlebar-dot--green" />
        <span className="code-editor_titlebar-filename">{filename}</span>
      </div>
      <div className="code-editor_body">
        <div className="code-editor_gutter">
          {lines.map(l => <div key={l.ln}>{l.ln}</div>)}
        </div>
        <div className="code-editor_lines">
          {lines.map(l => (
            <div key={l.ln} className="code-editor_lines-row">
              {l.tokens.length === 0
                ? '\u00A0'
                : l.tokens.map((tok, i) => (
                    <span key={i} style={{ color: tokenColor[tok.t] }}>{tok.v}</span>
                  ))}
            </div>
          ))}
        </div>
      </div>
      <div className="code-editor_statusbar">
        <span>TypeScript</span>
        <span>UTF-8</span>
      </div>
    </div>
  )
}

interface CodeEditorModalProps extends CodeEditorProps {
  open:    boolean
  onClose: () => void
}

export function CodeEditorModal({ open, onClose, lines, filename }: CodeEditorModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  if (!open) return null
  return (
    <div className="code-editor-modal" onClick={onClose}>
      <div className="code-editor-modal_inner" onClick={e => e.stopPropagation()}>
        <CodeEditor lines={lines} filename={filename} onClose={onClose} />
      </div>
    </div>
  )
}
