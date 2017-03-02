import mongoose from 'mongoose';


const PresentationSchema = new mongoose.Schema({
  "presentationName": String,
  "presentationResolution": Array,
  "domData": String,  
  "createdAt": Date
});


PresentationSchema.methods = {};
PresentationSchema.statics = {};


const Presentation = mongoose.model('Presentation', PresentationSchema);

export default Presentation;
