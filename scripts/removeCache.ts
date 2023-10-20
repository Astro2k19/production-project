import * as fs from 'fs'
import path from 'path'

const cachePath = path.join(__dirname, '..', 'node_modules/.cache')
fs.rmSync(cachePath, { force: true, recursive: true })
