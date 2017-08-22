module.exports = {
  // This secret should be in an environment variable instead
  jwtSecret: process.env.JWT_SECRET || "Brigandal",
  jwtSession: {
    session: false
  }
};
