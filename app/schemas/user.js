var mongoose = require('mongoose');
var md5  = require('md5')
//new sechema object 
var UserSchema = new mongoose.Schema({
    name : {
        unipue: true,
        type: String
    },
    password : String,
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
});
UserSchema.pre('save', function(){
    if (this.isNew) {
        this.meta.createAt = Date.now()
        this.meta.updateAt = Date.now()
    }else{
        this.meta.updateAt = Date.now()
    }
})
UserSchema.methods = {

}
module.exports = UserSchema
