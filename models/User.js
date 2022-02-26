const { Schema, model } = require("mongoose");
const thought = require('./Thought');

// Schema to create user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],

    friends: [{ type: Schema.Types.ObjectId, ref: "user" }],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
   id: false,
  }
);

userSchema
  .virtual('friend')
  // Getter
  .get(function () {
    return this.friends.length;
  });


const User = model("user", userSchema);

module.exports = User;
