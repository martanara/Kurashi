const fs = require('fs');
fs.writeFileSync('./.env', `REACT_APP_MONGODB_PASSWORD=${process.env.REACT_APP_MONGODB_PASSWORD}\nREACT_APP_MONGODB_USERNAME=${process.env.REACT_APP_MONGODB_USERNAME}\n`);