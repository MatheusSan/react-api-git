const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");

GITHUB_CLIENT_ID = "457acc2e48f95ba32b95";
GITHUB_CLIENT_SECRET = "7b761ea5aaee1c54dd7a6458bbac72ae18a2a9d5";

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
