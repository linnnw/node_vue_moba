module.exports = app => {
    const mongoose = require('mongoose');
    //mongodb://127.0.0.1:27017/
    mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba', {
        useNewUrlParser: true
    })
}
