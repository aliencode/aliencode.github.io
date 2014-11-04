@echo off
call asciidoctor -C -a linkcss -a stylesheet=main.css -a stylesdir=assets -T layout src/*.md -D ./
pause