/**
 * Routes for express app
 */
import passport from 'passport';
import unsupportedMessage from '../db/unsupportedMessage';
import { passport as passportConfig } from '../db';

export default (app) => {
  // user routes

  if (passportConfig && passportConfig.google) {
    // google auth
    // Redirect the user to Google for authentication. When complete, Google
    // will redirect the user back to the application at
    // /auth/google/return
    // Authentication with google requires an additional scope param, for more info go
    // here https://developers.google.com/identity/protocols/OpenIDConnect#scope-param
    app.get('/auth/google', passport.authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ]
    }));

    // Google will redirect the user to this URL after authentication. Finish the
    // process by verifying the assertion. If valid, the user will be logged in.
    // Otherwise, the authentication has failed.
    app.get('/auth/google/callback',
      passport.authenticate('google', {
        successRedirect: '/user',
        failureRedirect: '/'
      })
    );


    app.get('/user/userInfo', checkAuthentication, (req, res) => {
      res.json(req.user);
    });

    app.get('/logout', (req, res) => {
      req.session.destroy();
      req.logout();
      res.redirect("/");
    });

    function checkAuthentication(req, res, next) {
      if (req.isAuthenticated()) {
        next();
      } else {
        res.json({error: 'Not Logged In'});
      }
    }

  }

};
