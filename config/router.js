var Movie = require('./app/models/movie')

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
app.get('/movie/:id',Movie.detail)


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

//admin post movie 提交请求处理
app.post('/admin/movie/new', function(req, res){
	console.log(req.body)
	var id = req.body.movie._id, 
		movieObj = req.body.movie, 
		_movie = null
	if (id !== 'undefined') {
		Movie.findById(id, function(err, movie){
			if (err) {
				console.log(err)
			}
			//underscore 将提交来的对象覆盖数据库中查询到的数据
			_movie = _.extend(movie, movieObj)
			_movie.save(function(err, movie){
			if (err) {
					console.log(err)
				}
				res.redirect('/movie'+ movie._id)
			})
		})
	}else{
		console.log('meiyou id'+ movieObj)
		_movie = new Movie({
			doctor : movieObj.doctor,
			title : movieObj.title,
			language : movieObj.language,
			country : movieObj.country,
			summary : movieObj.summary,
			poster : movieObj.poster,
			flash : movieObj.flash,
			year : movieObj.year,
			createAt: Date.now()
		})
		//将表单数据重新保存到数据库，并且页面重定向到详情页
		_movie.save(function(err, movie){
			if (err) {
				console.log(err)
			}
			res.redirect('/movie/'+ movie._id)
		})
	}
})
 
//express route
app.get('/admin/list',function(req, res){
	Movie.fetch(function(err, movies){
		if (err) {
			console.log(err)
		}
		//渲染到页面
		res.render('list' ,{title: 'kevin 列表页',
			movies: movies
		})
	})
	
})


//list delete movie
app.delete('/admin/list', function(req, res){
	var id= req.query.id
	if (id) {
		Movie.remove({_id: id}, function(err, movie){
			if (err) {
				console.log(err)
			}
			else{
				res.json({success: 1})
			}

		})
	}
})