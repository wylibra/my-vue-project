
## package.json
  1、name & version
    项目名称和项目版本，他们都是必须的，如果没有就无法install
  2、private
    是否私人项目
  3、scripts
    运行脚本命令的npm命令行缩写
  4、dependencies & devDependencies
    分别指定了项目运行所依赖的模块、项目开发所需要的模块。写入参数分别是：--save & --save-dev 
  5、engines
    对node版本的以及npm版本的要求
  6、browserslist
    浏览器要求，vue项目不支持ie8，因为ie8是es3，尚没有Object.defineProperty属性

    
## 启动

```shell
npm run serve
```