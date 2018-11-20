if [ -d $1 ]; then
   echo "您已经有一个叫【$1】的文件了，请重新命名"
   exit 1
else
   mkdir $1
   cd $1
   mkdir css js
   touch index.html css/style.css js/main.js
   echo "
 <!DOCTYPE>
 <title>Hello</title>
 <h1>Hi</h1>" > index.html
   echo "h1{color: red;}" > css/style.css
   echo "var string = "Hello World"
   alert(string)" > js/main.js

   echo "文件【$1】创建成功~"
   exit 0
fi 
