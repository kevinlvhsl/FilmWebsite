module.exports = function(grunt){
	
	//初始化设置
	grunt.initConfig({
		//监控文件
		watch:{
			jade:{
				files:['views/**'],
				options:{
					livereload: true   //files中文件改动是是否重新启动服务
				}
			},
			js:{
				files: ['public/js/**', 'app/models/**/*.js', 'app/schemas/**/*.js'],
				// tasks: ['jshint'], //
				options: {
					livereload: true
				}
			},
			uglify: {
				files: ['public/**/*.js'],
				tasks: ['jshint'],
				options: {
					livereload: true
				}
			},
			styles: {
				files: ['public/**/*.less'],
				tasks: ['less'],
				options: {
					livereload: true
				}
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				ignores: ['public/libs/**/*.js']
			},
			all: ['public/js/*.js', 'test/**/*.js']
		},
		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: { //这里的路径配置有待改进
					'public/build/index.css': 'public/less/index.css'
				}
			}
		},
		uglify:{
			development: {
				options: {
					files: {
						'public/build/admin.min.js': 'public/js/admin.js',
						'public/build/detail.min.js': [
							'public/js/detail.js'
						]
					}
				}
			}
		},
		nodemon: {
			dev: {
				options: {
					file: 'app.js',
					args: [],
					ignoredFiles: ['README.MD', 'node_modules/**', '.DS_Sjtore'],
					watchedExtensions: ['js'], //
					watchedFolders: ['app', 'config'],
					debug: true,
					delayTime: 1, //等待多少秒之后启动
					env: {
						PORT: 8000
					},
					cwd: __dirname //监控目录 为当前gruntfile所在目录
				}
			}
		},
		concurrent:{
			tasks: ['nodemon', 'watch'],
			options: {
				logConcurrentOutput: true 
			}
		},
		mochaTest: {
            options: {
                reporter: 'spec'
            },
            src: ['test/**/*.js']
        },
	})

	//建立任务监听
	grunt.loadNpmTasks('grunt-contrib-watch') // 监视注册进来的文件，修改后会实时刷新重启
	grunt.loadNpmTasks('grunt-concurrent') // 针对慢任务：sass less 等优化构建时间
	grunt.loadNpmTasks('grunt-nodemon') // 实时监听 入口文件，修改时会自动重启 app.js 相当于一个包装
	grunt.loadNpmTasks('grunt-mocha-test') // test框架
	grunt.loadNpmTasks('grunt-contrib-less')
	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.loadNpmTasks('grunt-contrib-jshint')

	/*设置参数*/
	grunt.option('force', true)//避免一些错误中断任务
	/*注册默认的任务*/
	grunt.registerTask('default', ['concurrent'])
	grunt.registerTask('test', ['mochaTest'])
}