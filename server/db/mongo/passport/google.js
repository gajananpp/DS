import User from '../models/user';

// DUMMY DATA
// const presentations = [
//   {
//     "presentationName": "Republic Day Greetings",
//     "modifiedOn": new Date,
//     "createdOn": new Date,
//     "isPublished": true
//   },
//    {
//     "presentationName": "College Re-Open Notice",
//     "modifiedOn": new Date,
//     "createdOn": new Date,
//     "isPublished": true
//   },
//    {
//     "presentationName": "Important Notice",
//     "modifiedOn": new Date,
//     "createdOn": new Date,
//     "isPublished": false
//   },
//    {
//     "presentationName": "Examination Time-Table",
//     "modifiedOn": new Date,
//     "createdOn": new Date,
//     "isPublished": true
//   },
//    {
//     "presentationName": "Diwali Greetings",
//     "modifiedOn": new Date,
//     "createdOn": new Date,
//     "isPublished": false
//   },
//    {
//     "presentationName": "Examination Notice",
//     "modifiedOn": new Date,
//     "createdOn": new Date,
//     "isPublished": false
//   },
//    {
//     "presentationName": "Republic Day Greetings",
//     "modifiedOn": new Date,
//     "createdOn": new Date,
//     "isPublished": true
//   },
//    {
//     "presentationName": "Guest Welcome Notice",
//     "modifiedOn": new Date,
//     "createdOn": new Date,
//     "isPublished": false
//   },
// ];


const displays = [
  {
    "displayName": "RAIT-FLOOR-1",
    "Resolution": "1280x720",
    "createdOn": new Date,
    "isOnline": true
  },
  {
    "displayName": "RAIT-FLOOR-2",
    "Resolution": "1920x1280",
    "createdOn": new Date,
    "isOnline": true
  },
  {
    "displayName": "Office",
    "Resolution": "1152x720",
    "createdOn": new Date,
    "isOnline": true
  },
  {
    "displayName": "RAIT-GROUND-FLOOR",
    "Resolution": "1280x720",
    "createdOn": new Date,
    "isOnline": true
  },
  {
    "displayName": "RAIT-FLOOR-3",
    "Resolution": "1280x720",
    "createdOn": new Date,
    "isOnline": true
  },
];
//

/* eslint-disable no-param-reassign */
export default (req, accessToken, refreshToken, profile, done) => {
  User.findOneAndUpdate({"profileId": profile.id}, {
  	"token": accessToken,
  	"displayName": profile.displayName,
  	"email": profile.emails[0].value,
  	"picture": profile.photos ? profile.photos[0].value : ""
  }, {"upsert": false}, (err, user) => {
    if (err) {
      return done(err);
    } else if (!err && !user) {
  		let newUser = new User();
  		newUser.profileId = profile.id;
  		newUser.token = accessToken;
  		newUser.displayName = profile.displayName;
  		newUser.email = profile.emails[0].value;
  		newUser.picture = profile.photos ? profile.photos[0].value : "";
  		newUser.createdAt = new Date;
  		// newUser.userData.presentations = presentations;
  		newUser.userData.displays = displays;
  		newUser.save((err) => {
  			if (err)
  				throw err;
  			return done(null, newUser);
  		});
  	} else {
  		return done(null, user);
  	}
  });
};
/* eslint-enable no-param-reassign */
