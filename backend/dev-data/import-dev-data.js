const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Community = require('../models/communityModel');

dotenv.config({ path: './.env' });
 

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Temporary DataBase connected successful!'));

// READ JSON FILE
const Communities = JSON.parse(
  fs.readFileSync(`${__dirname}/community-card-data.json`, 'utf-8')
);


// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Community.create(Communities);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Community.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
