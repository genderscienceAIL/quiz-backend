const config = {
  secrets: {
    jwt: 'development',
    jwtExp: { expiresIn: 500 },
  },
  dbUrl: 'mongodb://localhost:27017/quiz-api-development',
}

module.exports = config
