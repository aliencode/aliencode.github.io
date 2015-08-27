---
layout: post
title: GO语言的安装和简单的使用体验
pid: 2014050301
comments: false
tags: [go-lang, martini]
categories: [笔记]
---

Go是google开发的一门比较新的语言。最近接触了docker后，发现很多周边项目都是用go来编写的，就找时间体验了一下，由于没有深入学习，还没有太多体会。
文本简单的使用go语言的web框架martini体验了一把用go开发web应用的方法，martini框架可以非常方便的实现目前比较流行了RESTFul协议的web服务。

官方下载主页： https://golang.org/dl/ ，包括所有版本的下载链接，我们通常会选择windows版本的下载。


关于windows版本的GO提供了安装包和zip两种方式。比较喜欢zip的方式，绿色环保，  
比如： `go1.3.3.windows-amd64.zip`  
然后就是下载解压到指定目录，下载过程由于伟大的墙的干扰存在，可能会很漫长或者根本打不开 :sweat_smile: ，就请到  http://golangtc.com/download  这个网站下载，是国内一个相当于代理吧。


### 配置环境变量
* 环境变量的配置跟JAVA类似，`GOROOT`  对应JAVA的就是 `JAVA_HOME`。 所以添加环境变量 `GOROOT`  值为你解压后的 GO 的根目录，注意不是bin目录。
* 设置PATH环境变量，让终端或CMD窗口可识别GO命令，把GO解压后的bin路径添加到path环境变量。
* `GOPATH` 这个环境变量可能理解为GO的工作空间，用来存放项目源文件，第三方依赖和编译后的 `.a`  文件。简单的说就是你以后开发项目存放的根目录，后面还会说明一下 `GOPATH`  这个东西怎么用比较好。目前就随便指定一个目录给 `GOPATH`  环境变量，或者不指定也可以，就直接跟随每个项目走，放在项目的目录里。

## 建项目
需要一个特定的编辑器liteide，经过实践也最好用这个编辑器，支持中文，虽然还不好用但已经没有更好的了，不知道IDEA什么时候会支持GO，只有等等看了。  
下载liteide， http://sourceforge.net/projects/liteide/files/  
github地址： https://github.com/visualfc/liteide  
下载就一个zip包，解压后运行那个exe就启动了liteide编辑器，真心喜欢这种zip的提供方式啊 :smile: ！

新建一个项目的根目录，如： `D:\DEV\test\gotest\` ，gotest就是项目的根目录，用liteide打开这个目录，然后按下面步骤进行：

### 第一步，设置项目环境变量
为了不把所有的项目放在一起，所以为每个项目设定一下环境变量，主要是 `GOPATH`.。  
<kbd>[查看]</kbd> -> <kbd>[编辑环境变量]</kbd> ，打开一个窗口，在这里可以设置一下你项目的环境变量，大致内容如下：

{% highlight text linenos %}
# native compiler windows amd64
GOROOT=D:\SOFT\go1.3.windows-amd64\go
GOPATH=D:\DEV\test\gotest\
#GOBIN=
GOARCH=amd64
GOOS=windows
CGO_ENABLED=1
#
PATH=c:\mingw64\bin;%GOROOT%\bin;%PATH%
#
LITEIDE_GDB=gdb64
LITEIDE_MAKE=mingw32-make
LITEIDE_TERM=%COMSPEC%
LITEIDE_TERMARGS=
LITEIDE_EXEC=%COMSPEC%
LITEIDE_EXECOPT=/C
{% endhighlight %}

**以上代码第2行：**  GOROOT指定到你GO安装目录  
**以上代码第3行：**  GOPATH指定到你项目的根目录，本例是 `D:\DEV\test\gotest\` ，在这里指定是为了把项目所有依赖的第三方包让go放在我们的项目目录里。

GOPATH 可以简单的理解为项目的根目录，下面有  `src`  、 `pkg` 、 `bin`  三个目录，src需要自己创建，pkg和bin会在编译时创建，pkg存放编译后的文件，bin存放可执行文件。这个GOPATH感觉设计的很傻很多余，其实GO可以参考NODE的NPM实现方式，只是取消那个配置文件，固定目录结构就是最好的方式。

### 第二步，项目目录构建
创建项目源码结构，思路跟java差不多，你在项目根目录也就是gotest目录下建一个 `src`  名字的目录，这是固定的名字，go认为这里你代码的根目录，src下面就是你的go源码和第三方类库的源码，go的类库通常以源码的方式提供，再也不用找不到源码而去反编译class文件了 :):，在项目编译运行时统一编译到pkg下。src目录下可以是包或者直接就是go文件，如 `src/config/config.go`  或者 `src/gotest/main.go` ， config 和 gotest 在这里就是你的包名。

最终目录如图：

![go项目目录结构](/images/2015/go.png)

其中 `src/gotest/public`  相当是 java里的webapp目录，存放静态文件根目录。通过 `m.Use(martini.Static("assets")) ` 添加其它静态目录。

### 第二步，示例代码

#### config.go

```go
package config

func LoadConfig() {

}
```

GO的包路径，跟java类似，只是它用 `/` 代替 `.` ，在java里的包路径  `com.xxx.config`，go是 `com/xxx/config`


#### main.go

```go
package main //入口包名，固定的，就是说你的项目必须有一个main包

import (  // 引入其它包，可以下拉网络项目，这个很厉害
	"config"
	"github.com/go-martini/martini"
	"github.com/martini-contrib/render"
)

func main() {  // main函数，跟java类似，必须的

	config.LoadConfig()  // 其它函数的调用方法

	m := martini.Classic()  // 初始化martini框架，注意它变量的赋值方式， `:=`
	m.Use(render.Renderer())  // martini框架插件启用方式

	m.Get("/", func() string {  // martini框架绑定请求的方式
		return "Hello world!"
	})

	// 数组赋值方式，`[...]` 表示不定长度，`string` 表示数据类型，貌似没办法存储多种类型的数据，`{"aa", "bbb"}`  数组值。
  data := [...]string{"aa", "bbb"}  

  // 使用插件 `martini-contrib/render` 输出json数据，更多用法： https://github.com/martini-contrib/render
	m.Get("/json", func(r render.Render) {  
		r.JSON(200, data)
	})

	m.Run()  // 启动martini框架

}
```


### 编译运行项目

首先要把第三方依赖给下载回来，这点GO做的非常好，它是通过分析你源码来得到你要用到哪些依赖库，它会从github等开源网站上下载。不需要像NPM或者MAVEN一样需要一个配置文件来指定依赖，不过问题来了，如何指定不同版本的引用呢？全是最新？  

**下载依赖** ，打开一个GO文件，如 `main.go` ，在工具栏会出行一行命令按钮，常用之一就是 `go get` 命令，对应的工具栏按钮就是 <kbd>[GET]</kbd> 图标，点击一直就会通过 `go get` 命令下载你当前文件所依赖的第三方类库，呵呵 ，是不是比java方便啊！

**运行项目** ， 下载完依赖就可以运行项目了，呵呵，就等这一刻。打开main.go，点击最常用的图标 <kbd>[BR]</kbd> 如同 `go run` 命令，然后不出意外的话就启动运行了。说真的启动一个web应用这速度是非常之快呀，比起tomcat等这个简直就是秒启，真正节约了我们开发时间 :+1:

## GO不一样的地方
与java相比的几个最明显的不同之处：

* 不能有多余的变量，如果申明的变量没有被使用直接异常
* 不能有多余的引用，引入了没有乃至的类库也会异常
* 变量的申明是，名字在前，类型在后，如： `var str string`，当然可以简单写成 `str := "a"`，但有些时候是无法避免的如： `json := [...]string{"aa", "bbb"} `
* 结尾没有分号， `;`
* 多个变量一起申明： `a,b := 100,101`

其它的就暂时没有深入研究了。

GO加上martini可以通过几行代码就能实现一个web应用，然后有一个json接口输出json数据，当然输出xml也非常简单，
如 `r.XML(200, data)` ，又或者渲染一个HTML模板 `r.HTML(200, "mytemplate", data)` 。
真的是非常方便简单，给你的感觉就是这东西天生就是为web开发而生，一切都是那么的自然和美妙！
当然这只是简单的使用，不知道业务变是非常复杂以后go还能不能如此简单的应对呢，期待大家的共同检验也期待go语言尽快成熟和热闹起来！


## 参考
* GO语言入门： https://github.com/astaxie/build-web-application-with-golang/blob/master/ebook/preface.md
* GO WEB开发框架martini的中文入门： https://github.com/go-martini/martini/blob/master/translations/README_zh_cn.md
* 在线体验： http://tour.golangtc.com/welcome/1
