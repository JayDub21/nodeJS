const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/demo')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Angular Course',
        author: 'Mosh', 
        tags: ['angular', 'frontend'],
        isPublished: true
    });
    
    const result = await course.save();
    console.log(result);
}

async function getCourses() {


    const courses = await Course
    //Put find() before .or([]) & .and([])
    // .find()
    // .or([ {author: 'Mosh'}, { isPublished: true }])
    
    // Starts with Mosh
    .find({ author: /^Mosh/ })

    // End with Hamedani (The i ending removes case sensitivity)
    .find({ author: /Hamedani$/i})

    // Contains Mosh
    .find({ author: /.*Mosh.*/})

    // .find({author: 'Mosth', isPublished: true})
    .limit(10)
    .sort({name: 1 })
    .select({ name: 1, tags: 1});
    console.log(courses);
}

// createCourse();
getCourses();