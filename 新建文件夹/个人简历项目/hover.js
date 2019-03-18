    // 鼠标移动显示hover
    
    // querySelectorAll返回与指定的选择器组匹配的文档中的元素列表 (使用深度优先的先序遍历文档的节点)。返回的对象是 NodeList 。
        let menus = document.querySelectorAll('nav.menu > ul > li')
        //   console.log(menus)
        for (let index = 0; index < menus.length; index++) {
            menus[index].onmouseenter = function (x) {
                // currentTarget 事件属性
                // currentTarget 事件属性返回其监听器触发事件的节点，即当前处理该事件的元素、文档或窗口。
                x.currentTarget.classList.add('actrive');
            }
            menus[index].onmouseleave = function (x) {
                x.currentTarget.classList.remove('actrive');
            }

        }