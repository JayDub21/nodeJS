// Get all the published fonted and backend courses
// Sort them by their price in a descending order
// Pick only thier name, author, and price. Then display in console

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err))

    const courseSchema = new mongoose.Schema({
        name: String,
        author: String,
        tags: [ String ],
        date: Date,
        isPublished: Boolean,
        price: Number
    });
    
    const Course = mongoose.model('Course', courseSchema);
    
    async function getCourses() {
        return await Course 
        // to find frontend or backend in tag:
        // mongo logical operator { $in: [] } or use below ↓
        // .or([ { tags: 'frontend' }, { tags: 'backend' } ])
        .find({ isPublished: true, tags: { $in: ['frontend', 'backend']} })
        .sort('-price')
        .select(' name author price'); 
        
    }
    async function run() {
        const courses = await getCourses();
        console.log(courses);
    }
    run();