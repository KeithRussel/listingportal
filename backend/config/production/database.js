// path: ./config/database.js

module.exports = ({ env }) => ({
  connection: {
    client: "sqlite",
    connection: {
      filename: env("DATABASE_FILENAME", ".tmp/data.db"),
      ssl: {
        ca: env("DATABASE_CA"),
      },
    },
    useNullAsDefault: true,
    debug: false,
  },
});
