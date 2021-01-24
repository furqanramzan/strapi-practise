module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('MYSQL_HOST', '127.0.0.1'),
        port: env.int('MYSQL_PORT', 3306),
        database: env('MYSQL_NAME', 'strapi'),
        username: env('MYSQL_USERNAME', 'root'),
        password: env('MYSQL_PASSWORD', ''),
        ssl: env.bool('MYSQL_SSL', false),
      },
      options: {}
    },
  },
});
