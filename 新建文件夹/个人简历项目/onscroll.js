        //   上拉显示导航栏吸顶
        window.onscroll = function (xxxx) {
            // console.log(1)
            if (window.scrollY > 0) {
                document.getElementById("topNavBar").classList.add('sticky');
            } else {
                document.getElementById("topNavBar").classList.remove('sticky');
            }


            let specialTags = document.querySelectorAll('[data-x]')
            // minIndex 就是里窗口顶部最近的元素
            let minIndex = 0
            for (let i = 1; i < specialTags.length; i++) {
                if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop -
                        window.scrollY)) {
                    minIndex = i
                }
            }
                //  for (let i = 0; i < specialTags.length; i++) {
                     
                //     specialTags[i].classList.remove('offset')
                //     console.log(1)
                //  }
                specialTags[minIndex].classList.remove('offset')
            let id =specialTags[minIndex].id
            let a = document.querySelector('a[href="#'+ id + '"]')
            let li = a.parentNode
            let brothersAndMe = li.parentNode.children
            for(let i=0; i<brothersAndMe.length; i++){
                brothersAndMe[i].classList.remove('hight')
            }
            li.classList.add('hight')
        }