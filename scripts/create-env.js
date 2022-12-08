const fs = require('fs');
fs.writeFileSync('./.env', `MONGODB_PASSWORD=${process.env.MONGODB_PASSWORD}\nMONGODB_USERNAME=${process.env.MONGODB_USERNAME}\n`);