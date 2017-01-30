import User from '../models/user';

/* eslint-disable no-param-reassign */
export default (req, accessToken, refreshToken, profile, done) => {
  User.findOne({"profileId": profile.id}, (err, user) => {
    if (err)
      return done(err);
    if (user) {
      // let imageUrl = "";
      // if (profile.photos && profile.photos.length) {
      //  imageUrl = profile.photos[0].value;
      // }
       User.findOneAndUpdate({"profileId": profile.id}, {
         "token": accessToken,
         "displayName": profile.displayName,
         "email": profile.emails[0].value,
         "picture": profile.photos ? profile.photos[0].value : ""
       }, {"upsert": false}, (err, user) => {
         if (err) {
           return done(err);
         } else {
           return done(null, user);
         }
       }); 
    } else {
       let newUser = new User();
       newUser.profileId = profile.id;
       newUser.token = accessToken;
       newUser.displayName = profile.displayName;
       newUser.email = profile.emails[0].value;
       newUser.picture = profile.photos ? profile.photos[0].value : "";
       newUser.createdAt = Date();
       newUser.save((err) => {
         if (err)
           throw err;
          return done(null, newUser);
       });
      }
   });
};
/* eslint-enable no-param-reassign */
