// path: ./config/env/production/server.js

module.exports = ({ env }) => ({
  proxy: true,
  url: env("BASE_URL"), // replaces `host` and `port` properties in the development environment
  app: {
    keys: env.array("APP_KEYS"),
  },
});
