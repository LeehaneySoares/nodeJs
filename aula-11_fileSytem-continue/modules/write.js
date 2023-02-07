const fs = require('fs').promises

module.exports = (path, target) => (
	fs.writeFile(path, target, { flag: 'w' })
)
