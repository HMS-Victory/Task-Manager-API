const mongoose = require('mongoose')
let port = 3000;

mongoose.connect(`mongodb://127.0.0.1:${port}`, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false
})