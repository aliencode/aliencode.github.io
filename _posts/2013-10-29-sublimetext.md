---
layout: post
title: 可以考虑使用SublimeText编辑器替代notepad++了
pid: 2013102901
comments: false
tags: [SublimeText, notepad++, 软件使用]
categories: [无类别]
more: true
---

大概是去年吧，这款编辑器神一般的出现在我面前，经过我小心翼翼的试用后发现并不是那么太顺手，插件配置都不太成熟，如Package Control。
最喜欢用它的zencoding还得专门开个小窗 :sweat:，随后放弃。

<!-- more -->

![可以考虑使用SublimeText编辑器替代notepad++了](/images/2015/soda-2-light-theme.png)

今年升级过MAC系统后始终找不到一款合适的家常编辑器，MAC上好用的多数又收费，
而且不想在MAC上和WIN上用两款不同的编辑器，之前用的notepad++在MAC上又没有，后来想起了它，SublimeText，传送门：<http://www.sublimetext.com/3> ！

SublimeText发布了3.0公测版本，SublimeText本身没有什么问题，关键在于能不能配置出适合自己的风格和使用习惯还有功能，
而且这些都不要太麻烦，否则我就要选择放弃了~！

## 插件安装配置
经过一翻配置基本达到理想状态也符合我使用习惯和必备功能，安装的插件有：

1. Package Control ： 这个不用说，用SublimeText的必装插件；
1. Theme Soda ： 不喜欢自带的样式？，那就用Soda吧，在社区里人气很旺，我很喜欢，感觉这个很美；
1. Emmet ： 这个用说吗，原名zen coding，可以理解为html、css等关键字或代码块的快捷键；
1. HTML-CSS-JS Prettify ： 这是代码格式化插件，基于nodejs。

这些功能基本够我用了，再安装多担心兼容性和稳定性还有启动速度，所以其它的还是让其它软件去做吧，因为它们更专业，比如ftp，svn，markdown预览功能等。

### 插件HTML-CSS-JS Prettify配置
HTML-CSS-JS Prettify基于nodejs，传送门：<http://nodejs.org/download/>，最好下载zip或tar.gz包，直接解压就能用了。

配置方法, 下载nodejs解压后，
在HTML-CSS-JS Prettify的配置文件（在SublimeText任意位置右键HTML-CSS-JS Prettify->Set node path）中设置如：`"node_path": "/Download/node-v0.10.21-darwin-x64/bin/node"`

### 更多插件

Package Control： <https://sublime.wbond.net/>，现在成熟很多了，很有官方风格。
