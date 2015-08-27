---
layout: post
title: 再次用Github-Pages建立自己的独立博客
pid: 2015082101
comments: true
tags: [github-pages,jekyll, Markdown]
categories: [笔记]
more: true
---

作为一个老程序猿随着年龄的增长这些年对技术的嗅觉越发敏感了，看见个陌生的东西就想研究一下 :-1: 。
早在几年前折腾过Jekyll，当时的Jekyll还不成熟，用中文写的东西会出现乱码、分页困难、文章摘要获取等问题，记得当时鼓捣了半天还是不太好用后就放弃了。

<!-- more -->

后来经常会在Github中开源项目上的pages看到它做项目介绍，也看到有越来越多的人们用它做自己的个人博客或者产品主页，大多数的人是些技术Geek。
加上这两年Markdown的流行对类似的工具更是起到强大的推动作用，诞生了各种类似的产品，如 [FarBox.com](http://FarBox.com), [Ghost](https://ghost.org/) ，[Hexo](https://hexo.io/zh-cn/) 等。

一时间各大博客网站开始支持Markdown的写作格式，很多开源的博客系统和一些技术类的开源软件也都支持Markdown格式的编辑器，尤其在Github上被广泛使用！

心里的草又长出来了，决定找机会去看看，加上自己平时也都是用Markdown写东西，正好可以利用上，以后写的东西就可以直接用它发布了，一举两得，真是个好东西 :smile: 。

## Github-Pages

每个账号可以在github上创建一个自己的pages主站而且只能有一个，地址是 *username.github.io*，如 *aliencode.github.io*，
步骤是点击 <kbd>New repository</kbd> Repository name 填写 *username.github.io* 注意 **username** 是你的用户名。

## 关于Jekyll
这里来简单的说明几个问题，jekyll可以是一个静态网站生成工具，就是说它可以把你写的纯文本文档套上你的模板生成一个具体的网站，然后把生成的静态文件部署到任何服务器（注意不是github）上而不需要数据库和其它运行环境
即可跑的很欢快。

然而github-pages本身就是一个jekyll的解析器，你只要把`jekyll new myblog`命令生成的`myblog`博客目录完整的上传到github-pages上就完成了所有的工作，
之后在`_posts`目录里写你的博文就可以了。

你甚至不需要安装jekyll，你直接下载[jekyll-now](https://github.com/barryclark/jekyll-now)这个项目，然后做一些个性化的修改提交到你的github-pages，
之后就是往`_posts`目录里添加博文就会自动发布了。

## 安装Jekyll
如果你需要在本地调试，否则你不需要安装。

我是在MAC上安装的，操作系统是OS X 10.10，由于本身是gem的方式安装，所以安装过程非常简单，直接执行命令：

```
sudo gem install github-pages
```

来安装，
为什么不是`jekyll`而是`github-pages`呢，简单的说`github-pages`是`jekyll`的一个封装，带了很多插件，可以通过命令`github-pages versions`来查看有哪些插件和具体版本号。

如果是windows的话本身是没有ruby的环境，所以需要自行安装，这里提供一个快速安装Ruby的工具，[rubyinstaller](http://rubyinstaller.org/downloads/)，安装完之后就可以运行上面的命令了。

## Jekyll模板

Jekyll的模板有很多，如： [jekyllthemes](http://jekyllthemes.org/)，如果你不想和其它人的看起来很像就自己动手做一个，或者修改也可以。  
`_layouts` 是模板目录，模板也可以包含其它文件 {%raw%} `{% include meta.html %}` {%endraw%} ，被包含的文件放在 `_includes` 目录下。  
 `_sass` 样式文件目录，根目录里 `style.scss` 用 `@import "highlights";` 引用的文件放在这个目录里，这是 [Sass](http://sass-lang.com/) 语法。

## 绑定域名
第一步，注册一个域名，如aliencode.me，然后解析到你的github-pages如图：

![域名绑定](/images/2015/domain.png)

第二步，在博客根目录添加一个名为 `CNAME` 的文件，内容是你的域名，如aliencode.me



## 资料

* [pages.github.com，github-pages官方说明](https://pages.github.com/)
* [Jekyll 官方相关说明文档](http://jekyllrb.com/docs/home/)
* [Liquid Jekyll 使用的模板语言](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)
* [Github Markdown 语法参考](https://help.github.com/articles/markdown-basics/)
* [Kramdown Markdown增加型语法参考](http://kramdown.gettalong.org/syntax.html)
* [Emoji 表情速查](http://www.emoji-cheat-sheet.com/), 需要开启 [jemoji](https://github.com/jekyll/jemoji) 表情插件
* [jekyll-now 快速建站基础项目](https://github.com/barryclark/jekyll-now)
* [Github-Pages的Jekyll本地开发环境](https://github.com/github/pages-gem)
* [Ruby Windows下安装包](http://rubyinstaller.org/downloads/)
