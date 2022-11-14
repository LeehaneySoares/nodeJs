const fs = require('fs').promises
const path = require('path')

let files: Array<string>
let fileFullPath: String
let stats

const readdir = async (rootDir: String) => (
  rootDir = rootDir || path.resolve(__dirname),
  files = await fs.readdir(rootDir),
  walk(files, rootDir)
)

const walk = (files: Array<string>, rootDir: String) =>
  files.forEach(async file => (
    fileFullPath = path.resolve(rootDir, file),
    stats = await fs.stat(fileFullPath),
    stats.isDirectory() && readdir(fileFullPath),
    console.log(file, stats.isDirectory())
  )
)

readdir('./')