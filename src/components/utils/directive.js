import Vue from 'vue';

Vue.directive('dragRight', {				
        bind: function (el) {
            let odiv = el;   //获取当前元素
            var width = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
            window.onresize = function () {
                width =window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
            }
            odiv.onmousedown = (e) => {
                let target=e.target;
                if(target.nodeName=='DIV'&&target.className.indexOf('title')>-1){
                    
                    //算出鼠标相对元素的位置
                    // let width = window.screen.availWidth
                    // let disRigthX = width - (e.clientX - odiv.offsetLeft);
                    let disX = e.clientX - odiv.offsetLeft;
                    let disY = e.clientY - odiv.offsetTop;
                    let divWidth = odiv.offsetWidth
        
                    document.onmousemove = (e)=>{
                        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                        let left = e.clientX - disX;    
                        let top = e.clientY - disY;
                    
                        //绑定元素位置到positionX和positionY上面
                
                        //移动当前元素
                        let right = width - (left + divWidth)
                        odiv.style.right = right + 'px';
                        odiv.style.top = top + 'px';
                    };
                    document.onmouseup = (e) => {
                        document.onmousemove = null;
                        document.onmouseup = null;
                    };
                }else {
                    return
                }   
        };
    }
})

Vue.directive('drag', {				
    bind: function (el) {
    let odiv = el;   //获取当前元素
    odiv.onmousedown = (e) => {
        //算出鼠标相对元素的位置
        let disX = e.clientX - odiv.offsetLeft;
        let disY = e.clientY - odiv.offsetTop;
        document.onmousemove = (e)=>{
            //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
            let left = e.clientX - disX;    
            let top = e.clientY - disY;
        
            //绑定元素位置到positionX和positionY上面
    
            //移动当前元素
            odiv.style.left = left + 'px';
            odiv.style.top = top + 'px';
        };
        document.onmouseup = (e) => {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
}
})