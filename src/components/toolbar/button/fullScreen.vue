<template>
    <el-button class="toolBar_btn" type="primary" size="mini"   :title="$t('toolbar.fullscreen.title')" @click="fullScreen" >
        <i class="iconfont icon-quanping"></i>
    </el-button>	
</template>
<script>
export default{
    data(){
        return{
            isFullScreen:false,
        }
    },
    methods:{
        fullScreen(){
        		console.log(this.isFullScreen);
				this.isFullScreen ?  this.exitFullscreen() : this.launchFullscreen(document.documentElement)
				this.isFullScreen = !this.isFullScreen
				map.updateSize();
										
    		},
		launchFullscreen(element) {
		  if(element.requestFullscreen) {
			element.requestFullscreen();
		  } else if(element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		  } else if(element.webkitRequestFullscreen) {
			element.webkitRequestFullscreen();
		  } else if(element.msRequestFullscreen) {
			element.msRequestFullscreen();
		  }
	},
		exitFullscreen() {
		  if(document.exitFullscreen) {
			document.exitFullscreen();
		  } else if(document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		  } else if(document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		  }
		}
    }
}
</script>