---
layout: post
title: Maven安装jar包到本地仓库
pid: 2013061001
comments: false
tags: [maven]
categories: [笔记]
---

在项目开发期间难免遇遭使用的jar包在Maven的中央仓库里没有，比如那个固执的Oracle，这家伙始终不愿意把ojdbc驱动提交到Maven仓库，这件事很郁闷，Maven又不支持引入本地jar文件如果用IDE强行引入在Maven编译的时候又无法通过。

Maven官方提供导入本地jar文件到本地仓库的[maven-install-plugin](http://maven.apache.org/plugins/maven-install-plugin/)，可是要用的时候又得苦逼的去找命令，用起来也比较麻烦，因此，本文详细介绍一下maven-install-plugin插件的使用，可以导入任意数量的jar文件到本地仓库，是不是很开心那！

## 配置POM

Maven插件[maven-install-plugin](http://maven.apache.org/plugins/maven-install-plugin/)

~~~xml
<plugin>
    <artifactId>maven-install-plugin</artifactId>
    <version>2.4</version>
    <inherited>false</inherited>
    <executions>
        <execution>
            <id>install-artifacts.1</id>
            <goals>
                <goal>install-file</goal>
            </goals>
            <phase>validate</phase>
            <configuration>
                <file>${basedir}/libs/ojdbc14.jar</file>
                <groupId>org.oracle</groupId>
                <artifactId>oraclejdbc</artifactId>
                <packaging>jar</packaging>
                <version>14</version>
            </configuration>
        </execution>
        <execution>
            <id>install-artifacts.2</id>
            <goals>
                <goal>install-file</goal>
            </goals>
            <phase>validate</phase>
            <configuration>
                <file>${basedir}/libs/foundation-1.0.jar</file>
                <groupId>org.bg</groupId>
                <packaging>jar</packaging>
                <artifactId>foundation</artifactId>
                <version>1.0</version>
            </configuration>
        </execution>
    </executions>
</plugin>
~~~~

单个也可以配置成：

~~~xml
<plugin>
   <groupId>org.apache.maven.plugins</groupId>
   <artifactId>maven-install-plugin</artifactId>
   <version>2.4</version>
   <configuration>
      <groupId>org.oracle</groupId>
      <artifactId>oraclejdbc</artifactId>
      <version>14</version>
      <packaging>jar</packaging>
      <file>${basedir}/libs/ojdbc14.jar</file>
   </configuration>
   <executions>
      <execution>
         <id>install-jar-lib</id>
         <goals>
            <goal>install-file</goal>
         </goals>
         <phase>validate</phase>
      </execution>
   </executions>
</plugin>
~~~

## 执行导入

1. 在经过Maven的validate阶段时自动导入安装，在executions里指定插件的goals和maven的phase。
2. 直接执行命令 `mvn install:install-file`

## 插件属性

如果要在导入时生成pom文件，增加配置属性：

    <generatePom>true</generatePom>

指定自己的POM文件：

    <generatePom>false</generatePom>
    <pomFile>${basedir}/dependencies/someartifact-1.0.pom</pomFile>

如果JAR自带POM文件无需指定此属性，会自动安装。


更多详细配置：<http://maven.apache.org/plugins/maven-install-plugin/install-file-mojo.html>

最后提示一句，其实Maven生命周期中的每一个阶段都是一个插件来实现的，而且都可以单独拿出来根据你的使用需要来配置。  
详细请查看<http://maven.apache.org/plugins/>  
或者  
另一篇Maven相关文章<http://www.cnblogs.com/xguo/archive/2013/06/01/3113146.html>。
