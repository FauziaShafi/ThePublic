const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const appThought = [
  'Happiness is when what you think, what you say, and what you do are in harmony',
  'People who are crazy enough to think they can change the world, are the ones who do',
  'Optimism is the one quality more associated with success and happiness than any other',
  'Happiness is not something readymade. It comes from your own actions',
  'Success is not final, failure is not fatal: it is the courage to continue that counts.” Winston Churchill',
  'Believe you can and you are halfway there.',
  'I can not change the direction of the wind, but I can adjust my sails to always reach my destination.',
  'Hello world',
  'It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome',
  'We must be willing to let go of the life we planned so as to have the life that is waiting for us.',
  'Everything you have ever wanted is on the other side of fear.',
  'If I cannot do great things, I can do small things in a great way',
  'We generate fears while we sit. We overcome them by action.',
  'Keep your face always toward the sunshine, and shadows will fall behind you.',
  'Never limit yourself because of others limited imagination; never limit others because of your own limited imagination.',
  'Let us make our future now, and let us make our dreams tomorrow is reality.',
  'For every reason it is not possible, there are hundreds of people who have faced the same circumstances and succeeded.',
  'Life is what happens to us while we are making other plans',
];

const possibleReaction = [
  'Great!!',
  'HAHA',
  'wow',
  'angry',
  'sad',
  
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
// Get a random item given an array
const getRandomArrReaction = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random thoughts 
const getRandomThought = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      useThought: getRandomArrItem(appThought),
      
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThought,getRandomArrReaction };
