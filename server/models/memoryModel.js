const mongoose = require("mongoose");
const slugify = require("slugify");

const memorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A tour must have a name"],
      trim: true,
      maxlength: [
        400,
        "A memory name must have less or equal then 400 characters"
      ],
      minlength: [3, "A tour name must have more or equal then 3 characters"]
    },
    slug: String,
    description: {
      maxlength: [
        4000,
        "A memory name must have less or equal then 4000 characters"
      ],
      type: String,
      trim: true
    },
    person: {
      type: String,
      trim: true
    },
    place: {
      type: String,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    },
    memoryDate: {
      type: Date,
      default: Date.now(),
      select: false
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

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

const Memory = mongoose.model("Memory", memorySchema);

module.exports = Memory;
