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
  	"presentations": [],
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


const PresentationSchema = new mongoose.Schema({
  "presentationName": String,
  "presentationResolution": Array,
  "widgetsUsed": Array,
  "createdAt": Date,
  "domData": String  
});


PresentationSchema.methods = {};
PresentationSchema.statics = {};


const User = mongoose.model('User', UserSchema);
const Presentation = mongoose.model('Presentation', PresentationSchema);

export default User;

// export default mongoose.model('User', UserSchema);
