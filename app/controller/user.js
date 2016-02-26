var User = require("../models/user")

exports.save = funciton(req, res){
    var _user = req.body.user
    var name = _user.name
    var password = _user.password
    User.findOne({name: name}, function(err, user){
        // if (err) next(err)
        if (user) {
            res.redirect('/')
        }else{
            user = new User(_user)
            user.save(function(err, user){
                if (err) console.error(err)

                res.redirect('/')
            })
        }
        
    })
}

