var mongoose = require('mongoose')
var MovieSchema = require('../schemas/movie')
//将模式编译成 movie模型 model
var Movie = mongoose.model('Movie', MovieSchema)

Movie.methods = {
    
}

module.exports = Movie