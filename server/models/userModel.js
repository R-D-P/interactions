const mongoose = require("mongoose");
const slugify = require("slugify");
const validator = require("validator");

const userModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
    maxlength: [100, "A name must have less or equal then 400 characters"],
    minlength: [3, "A name must have more or equal then 3 characters"]
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique:true,
    lowercase:true,
    validate:[validator.isEmail, 'please provide a valid email']
  },
  photo:{
    type: String
  },
  password:{
    type:String,
    required:[true, 'Please provide a password'],
    minlength:8
  },
  confirmPassword:{
    type:String,
    required:[true, 'Please confirm your password'],
    validate: {
      // this will only work on save, it would not work on find one and update
      validator: function(el){
        return el === this.password
      }, message:'Passwords are not the same'
    }
  }
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  }
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
// memorySchema.pre("save", function(next) {
//   this.slug = slugify(this.name, { lower: true });
//   next();
// });

// memorySchema.post(/^find/, function(docs, next) {
//   console.log(`Query took ${Date.now() - this.start} milliseconds!`);
//   next();
// });

// // AGGREGATION MIDDLEWARE
// memorySchema.pre("aggregate", function(next) {
//   this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });

//   console.log(this.pipeline());
//   next();
// });

const User = mongoose.model("User", userModel);

module.exports = User;
