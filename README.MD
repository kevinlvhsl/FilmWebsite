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
