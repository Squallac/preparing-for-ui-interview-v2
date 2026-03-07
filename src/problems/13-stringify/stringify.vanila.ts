// bun test src/problems/13-stringify/test/stringify.test.ts

import { detectType } from '@course/utils'

/**
 * Converts a value to its string representation.
 *
 * Expected output by type:
 * - null:      null             → "null"
 * - number:    42               → "42"
 * - bigint:    42n              → "42"
 * - boolean:   true             → "true"
 * - symbol:    Symbol('x')      → '"Symbol(x)"'
 * - undefined: undefined        → '"undefined"'
 * - string:    "hello"          → '"hello"'
 * - object:    {a: 1, b: "x"}  → '{ a: 1, b: "x" }'
 * - map:       Map{a => 1}     → '{ a: 1 }'
 * - array:     [1, "a", true]   → '[1,"a",true]'
 * - set:       Set{1, 2}       → '[1,2]'
 * - date:      new Date()       → '3/7/2026, 5:47:00 PM'  (toLocaleString)
 * - regexp:    /abc/gi          → '/abc/gi'
 * - circular:  (ref to self)    → '[Circular]'
 * - other:     unknown type     → '"Unsupported Type"'
 */
export const stringify = () => {
  throw new Error('Not implemented')
}
