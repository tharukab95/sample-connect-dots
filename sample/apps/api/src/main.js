const config = require('./app/config/config');
const app = require('./app/config/express');
require('./app/config/mongoose');


if (!module.parent) {
  app.listen(config.port, () => {
    console.info(`server started on port ${config.port} (${config.env})`);
  });
}

module.exports = app;

