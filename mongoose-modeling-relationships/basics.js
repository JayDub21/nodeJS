// Using References (Normalization) → CONSISTENCY
let author = {
    name: 'JayDub21'
}

let course = {
    author: 'id'
}

// Using Embedded Documents (Denormalization) → PERFORMANCE
let course ={
    author: {
        name: 'JayDub'
    }
}

// Hybrid
let author = {
    name: 'JayDub'
    // 50 other properties
}

let course = {
    aurthor: {
        id: 'ref',
        name: 'JayDub'
    }
}