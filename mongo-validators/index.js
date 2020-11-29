const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/demo')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err))

const courseSchema = new mongoose.Schema({
    // Require name
    name: {
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 255
    },
    category: {
        type: String,
        requred: true,
        enum: ['web', 'mobile', 'network'],
        },
    author: String,
    tags: { 
        type: Array,
        validate: {
            validator: function (v) {
                return v && v.length > 0;
            },
            message: 'A course should have at lease one tag.'
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type: Number,
        // Cannot use arrow funtion
        required: function () { return this.isPublished; }
    }
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Angular Course',
        category: 'web',
        author: 'Mosh', 
        tags: null,
        isPublished: true,
        price: 15
    });
    // Try / Catch to validate if name exists
    try{

        const result = await course.save();
        console.log(result);
    }
    catch (ex) {
        console.log(ex.message);
    }
    
}

async function getCourses() {


    const courses = await Course
    .find({author: 'Mosth', isPublished: true})
    .limit(10)
    .sort({name: 1 })
    .select({ name: 1, tags: 1});
    console.log(courses);
}

async function updateCourse(id) {

    // Updating a Document - Query first
    const course = await Course.findById(id);
    if(!course) return;

    course.isPublished = true;
    course.author - 'Another Author';

    const result = await course.save();
    console.log(result);
}

// updateCourse('5fbd4f2965caad1196996e40');
createCourse();
// getCourses();