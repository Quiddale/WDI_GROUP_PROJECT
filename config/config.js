module.exports = {
  port: process.env.PORT || 4000,
  db: {
    test: 'mongodb://localhost/group-project-test',
    development: 'mongodb://localhost/group-project-dev',
    production: process.env.MONGODB_URI || 'mongodb://localhost/group-project-production'
  },
  secret: process.env.SECRET || 'gosh this is so secret... shhh...'
};
