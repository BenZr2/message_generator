/* 
This is going to be a programm which 
generates random fitness exercises
*/




const repExercises = ['Push Ups', 'Pull Ups', 'Sit Ups', 'Russian Twists', 'Squats', 'Mountain Climbers', 'Lunges'];

const holdExercises = ['Plank', 'Side Plank', 'Deep Squat', 'Superman', 'Handstand',];

const seconds = [15, 30, 45, 60];

const exercise = repExercises[Math.floor(Math.random() * repExercises.length)];
const repitions = Math.floor(Math.random() * 20);

console.log(`You have to do ${repitions} ${exercise}! Now!!`);

