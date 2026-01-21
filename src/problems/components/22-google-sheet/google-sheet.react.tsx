import cx from '@course/cx'
import css from './google-sheet.module.css'

const EMPTY = Symbol(' ')
const [START_CODE, END_CODE] = ['A', 'Z'].map((ch) => ch.charCodeAt(0))
const MAX_ROWS = 500
const COLUMNS = [
  EMPTY,
  ...Array.from({
    length: END_CODE - START_CODE + 1,
  }).map((_, idx) => String.fromCharCode(START_CODE + idx)),
]

export type TGoogleSheetProps = {
  // TODO: Define props
}

type TCellProps = {
  column: string | symbol
  row: number
  value: React.ReactNode
}

const resizeClass = {
  'columnheader': css['resize-horizontal'],
  'rowheader': css['resize-vertical'],
  'gridcell': '',
} as const;


function Cell({ column, row, value }: TCellProps) {
  const isHeader = column === EMPTY
  const isColHeader = row === 0
  const role = isColHeader ? 'columnheader' : isHeader ? 'rowheader' : 'gridcell'

  const className = cx(css.cell, isColHeader || isHeader ? css.header : '', resizeClass[role])
  return (
    <div role={role} contentEditable={role === 'gridcell'} data-column={String(column)} data-row={row} className={className}>
      {value}
    </div>
  )
}

const HEADER_ROWS = (
  <div role="row" style={{ display: 'contents' }}>
    {COLUMNS.map((column) => (
      <Cell
        key={String(column)}
        column={column}
        row={0}
        value={column === EMPTY ? '' : String(column)}
      />
    ))}
  </div>
)

const BODY_ROWS = Array.from({ length: MAX_ROWS }).map((_, idx) => {
  const rowId = idx + 1
  return (
    <div role="row" key={idx} style={{ display: 'contents' }}>
      {COLUMNS.map((column) => (
        <Cell
          key={String(column) + idx}
          column={column}
          row={rowId}
          value={column === EMPTY ? rowId : null}
        />
      ))}
    </div>
  )
})

export function GoogleSheet(_props: TGoogleSheetProps) {
  return (
    <div className={css.container} role="grid" aria-label="Spreadsheet">
      {HEADER_ROWS}
      {BODY_ROWS}
    </div>
  )
}
