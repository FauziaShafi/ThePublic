const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThought, getRandomArrReaction } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing user
  await User.deleteMany({});

  // Drop existing thought
  await Thought.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  const thoughts = getRandomThought(20);


  for (let i = 0; i < 20; i++) {
    const user = getRandomName();
    const email = `${user}@gmail.com`;
    

    users.push({
      user,
      email,
      thoughts,
    });
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Add thought to the collection and await the results
  await Thought.collection.insertOne({
    thoughtText: 'I may not have gone where I intended to go, but I think I have ended up where I needed to be.',
    username: getRandomName(),
    reactions: getRandomArrReaction(),
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
