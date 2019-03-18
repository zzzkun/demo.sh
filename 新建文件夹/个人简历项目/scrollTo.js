        //  获取到每个a标签
        let atages = document.querySelectorAll('nav.menu > ul > li > a')
        for (let index = 0; index < atages.length; index++) {
            atages[index].onclick = function (x) {
                // 阻止默认的点击事件
                x.preventDefault()
                let a = x.currentTarget
                //  getAttribute() 方法通过名称获取属性的值。
                let href = a.getAttribute('href') //#a 
                //  console.log(a.getAttribute('href'))
                //   querySelector() 方法仅仅返回匹配指定选择器的第一个元素。如果你需要返回所有的元素，请使用 querySelectorAll() 方法替代。
                let element = document.querySelector(href)
                //   获取对象相对于由offsetParent属性指定的父坐标(css定位的元素或body元素)距离顶端的高度
                let top = element.offsetTop;
                //  window.scrollTo(0,top-80)
                // 滚动的次数
                let n = 25;
                let duration = 500 / n;
                // scrollY 是文档从顶部开始滚动过的像素值  当前的高度
                let currentTop = window.scrollY

                let targetTop = top - 80
                // 要滚动的距离 路程 
                let distance = (targetTop - currentTop) / n
                let i = 0;
                let id = setInterval(() => {
                    if (i === n) {
                        window.clearInterval(id)
                        return
                    }
                    i = i + 1;

                    window.scrollTo(0, currentTop + distance * i)
                }, duration);
            }

        }