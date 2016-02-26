var mongoose = require("mongoose")
var UserSchema = require("../schemas/user")
//将UserSchema模式编译成 user模型 model
var User = mongoose.model('User', UserSchema)

module.exports = User
