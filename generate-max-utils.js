const fs = require('fs')
let css = '\n/* Max Dimension Utilities */\n'
let dts = ''
let dtsInterface = ''

for (let i = 100; i <= 1000; i += 100) {
  css += `.maxW${i}px { max-width: ${i}px !important; }\n`
  css += `.maxH${i}px { max-height: ${i}px !important; }\n`
  css += `.maxWh${i}px { max-width: ${i}px !important; max-height: ${i}px !important; }\n`

  dts += `export const maxW${i}px: string\n`
  dts += `export const maxH${i}px: string\n`
  dts += `export const maxWh${i}px: string\n`

  dtsInterface += `  readonly maxW${i}px: string\n`
  dtsInterface += `  readonly maxH${i}px: string\n`
  dtsInterface += `  readonly maxWh${i}px: string\n`
}

fs.writeFileSync('generated-max-utils.css', css)
fs.writeFileSync('generated-max-utils.d.ts', dts + '\n\n' + dtsInterface)
console.log('Successfully generated the strings.')
