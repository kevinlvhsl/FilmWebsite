KEVIN'S FILM SITE

grunt + node + bower




### mongodb 启动方式
```
C:\Users\dell>d:
D:\>cd mongodb\bin
D:\mongodb\bin>mongod --dbpath ../data  
```
> 到mongodb目录下 指定db的path 
node app.js

## 项目启动方式
+ 在mongodb启动的情况下
+ 根目录下运行grunt
+ 在浏览其中打开localhost:8000   //端口号在app.js中指定可以更改


### mongodb的一些简单操作

```
mongodb
use imooc //切换到数据库
    db.movie.find(...).count()  //查找并获取条数
    db.movie.find(...).limit(n)
    db.movie.find(...).skip(n)
    db.movie.find(...).sort(...)
    db.movie.findOne([query])

```


### 初始化本地git仓库：
+ 首先在本地 git init
+ 然后写你需要的代码，add 并 commit
+ 然后 在github上新建一个仓库，将仓库地址拷贝下来如：`https://github.com/kevinlvhsl/FilmWebsite.git`
+ 最后，在本地项目目录下 执行 `git remote add origin -m master https://github.com/kevinlvhsl/FilmWebsite.git`

> 这是给本地项目添加远程地址的命令 git remote add    -m 表示指定分支
> 如果是修改地址 git remote set-url origin https://github.com/kevinlvhsl/xx.git