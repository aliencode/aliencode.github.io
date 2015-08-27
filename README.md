# aliencode

## theme

Jekyll-Strip

## emoji

http://www.emoji-cheat-sheet.com/

## 描述

1， more: true

使用 <!-- more --> 做为分界符

1， more: false

取第一段文本做为描述，这种方式不识别 emoji。

## 语法高亮

显示行号
{% highlight ruby linenos %}
def show
...
end
{% endhighlight %}


## 输出模板代码
由于jekll会识别文章中 {% %} 这样的标记，所以用以下方法输出这样的原文
{%raw%} `{% include meta.html %}` {%endraw%}
