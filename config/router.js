var Movie = require('../app/models/movie')
var User = require('../app/models/user')
module.exports = function(app){

    app.use(function(req, res, next){
        console.log("111 in ------------")
        next()
    })
    //express route
    app.get('/',function(req, res){
        Movie.fetch(function(err, movies){
            if (err) {
                console.log(err)
            }
            //渲染到页面
            res.render('index' ,{title: 'kevin 首页',
                movies: movies
            })
        })
    })

    // movie detail
    // app.get('/movie/:id',Movie.detail)


    // movie new 
    app.get('/admin/movie',function(req, res){
        res.render('admin' ,{title: 'kevin 管理页',
            movie: {
                title: '',
                doctor: '',
                country: '',
                year: '',
                poster: '',
                flash: '',
                summary: '',
                language: ''
            }
        })
    })

    //管理页更新数据
    app.get('/admin/update/:id', function(req, res){
        var id = req.params.id
        if (id) {
            Movie.findById(id, function(err, movie){
                if (err) {
                    console.log(err)
                }
                res.render('admin', 
                    {
                        title: '后台更新 movie',
                        movie: movie
                    }
                )
            })
        }
    })

    // //admin post movie 提交请求处理
    // app.post('/admin/movie/new', Movie.new)
     
    // //express route
    // app.get('/admin/list',Movie.list)


    // //list delete movie
    // app.delete('/admin/:id', Movie.del)


    // // user
    // app.get("/user/list", User.list)

}
