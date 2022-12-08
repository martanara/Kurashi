const fs = require('fs')
fs.writeFileSync('./.env', `MONGODB_USERNAME=${process.env.MONGODB_USERNAME}\n``MONGODB_PASSWORD=${process.env.MONGODB_PASSWORD}\n`)