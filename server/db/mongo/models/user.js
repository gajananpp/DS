/**
 * Defining a User Model in mongoose
 * Code modified from https://github.com/sahat/hackathon-starter
 */

import mongoose from 'mongoose';

// Other oauthtypes to be added

/*
 User Schema
 */

const UserSchema = new mongoose.Schema({
  "profileId": String,
  "token": String,
  "displayName": String,
  "email": String,
  "picture": String,
  "createdAt": Date,
  "userData": {
  	"presentations": [{type: mongoose.Schema.Types.ObjectId, ref: 'Presentation'}],
  	"displays": []
  }
});


/*
 Defining our own custom document instance method
 */
UserSchema.methods = {};

/**
 * Statics
 */

UserSchema.statics = {};





const User = mongoose.model('User', UserSchema);

export default User;

// export default mongoose.model('User', UserSchema);
