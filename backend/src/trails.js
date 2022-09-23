'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const Trail = require('./models/trailSchema');

const seed = async () => {
  await Trail.create({
    trailName: 'Rattle Snake Ridge',
    location: 'Tacoma, WA',
    type: 'hike',
    class: '4',
    length: '5.3 Miles',
    elevationGain: '2,000ft'
  });
  await Trail.create({
    trailName: 'MailBox Peak',
    location: 'North Bend, WA',
    type: 'hike',
    class: '4',
    length: '9.4 Miles',
    elevationGain: '4822ft'
  });
  console.log('a must trail!');
  await Trail.create({
    trailName: 'Twin Falls',
    location: '47600 SE 159th StNorth Bend, WA 98045',
    type: 'hike',
    class: '3',
    length: '2.5 Miles',
    elevationGain: '636ft'
  });
  console.log('This trail is not to difficult!');
  await Trail.create({
    trailName: 'Cape Final',
    location: 'Marble Canyon, AZ 86022',
    type: 'hike',
    class: '3',
    length: '4.0 Miles',
    elevationGain: '495ft'
  });
  console.log('Beautiful trail!');
  await Trail.create({
    trailName: 'Alum Cave Trail to Mount LeConte',
    location: 'Gatlinburg, TN 37738',
    type: 'backpacking',
    class: 'Hard',
    length: '11.0 Miles',
    elevationGain: '3,061ft'
  });
  console.log('Great place to get away!');
  // #6 - Lost Lake via Hessie Trail
  await Trail.create({
    trailName: 'Lost Lake via Hessie Trail',
    location: 'Hassie Rd Nederland, CO 80466',
    type: 'backpacking',
    class: 'Medium',
    length: '4.0 Miles',
    elevationGain: '830ft'
  });
  console.log('Nice trek!');



  mongoose.disconnect();
};

seed();
