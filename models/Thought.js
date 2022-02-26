const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 0,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      timestamp: { type: Date, default: Date.now },
    },
    username: {
      type: String,
      required: true,
    },

    reactions: [reactionSchema],
  },
  {
    toJSON: {
       getters:true,
      virtuals: true,
    },
    
  }
);

// thoughtSchema
//   .virtual('getResponses')
//   // Getter
//   .get(function () {
//     return this.reactions.length;
//   });

// Initialize our Thoughts model
const Thoughts = model("thought", thoughtSchema);

module.exports = Thoughts;
