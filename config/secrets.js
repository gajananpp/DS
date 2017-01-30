/** Important **/
/** You should not be committing this file to GitHub **/
/** Repeat: DO! NOT! COMMIT! THIS! FILE! TO! YOUR! REPO! **/
export const sessionSecret = process.env.SESSION_SECRET || 'raitadmin';
export const google = {
  clientID: process.env.GOOGLE_CLIENTID || '391220746078-cfl1qmu5ehquc2jpkk3b6q501ng1apn8.apps.googleusercontent.com',
  clientSecret: process.env.GOOGLE_SECRET || 'HH9U8fSOo_aQZrGJEvxWczAE',
  callbackURL: process.env.GOOGLE_CALLBACK || '/auth/google/callback'
};

