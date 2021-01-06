<template>
	<div class='toolbar' v-if="!phone">
		<div v-show="isShow">
		<full-screen v-if='toolCreateObj.fullScreen'></full-screen>
		<vectorlayerControl v-if="toolCreateObj.vectorlayerControl"></vectorlayerControl>
		<!-- <refresh v-if="toolCreateObj.refresh"></refresh> -->
		<baseLayer v-if='toolCreateObj.baseLayer'></baseLayer>
		<commonData v-if='toolCreateObj.commonData'></commonData>
		<base-img v-if='toolCreateObj.baseImg'></base-img>
		</div>
		<Motion :value="GetHomeMenuPosition" tag="ul" class="motion" >
				<ul slot-scope="props" :style="{ transform: `translateX(${props.value}px)` }">
					<homeMenu v-if='!isRu && toolCreateObj.product'></homeMenu>
				</ul>
		</Motion>
		<Motion :value="getTelescopicPosition" tag="ul" class="PCMotionMenu" >
		</Motion>
	   <el-button v-show="display" id="houtui" type="dark" icon="icon-houtui iconfont" size="mini-1" @click="displayModule"></el-button>
	   <el-button v-show="conceal" id="qianjing" type="dark" icon="icon-qianjin iconfont" size="mini-1" @click="concealModule"></el-button>
	</div>

    <Motion :value="GetHomeMenuPosition" tag="ul"  v-else  >
      <ul  class='motion toolbar' slot-scope="props" :style="{ transform: `translateX(${props.value}px)` }">
        <li v-if="!isRu && toolCreateObj.telescopic"><telescopic></telescopic></li>
        <!-- <li  v-if='toolCreateObj.refresh'><refresh></refresh>  </li> -->
       
      </ul>
    </Motion>


</template>
<script>
	import { mapActions } from 'vuex'
	import { mapGetters } from 'vuex'
    import exportBtn from './button/export'
    import fullScreen from './button/fullScreen.vue';

	export default {
		components:{
            fullScreen,
            exportBtn,
		
		},
		data() {
			return {
				toolCreateObj:{
                    fullScreen : false,
                    export:false,
				
				},
			
			};
		},

		computed:{
			...mapGetters({
					
			}),
			
		},
		methods: {
			 ...mapActions({
				
			}),
		
		},
    	watch: {
			
			},
		
	};

	if("ontouchstart" in window){

    document.body.style.position='fixed';
    document.body.style.width='100%';
    document.ontouchmove  = function(e){
      e.preventDefault() ;
    }

  }

</script>

<style scoped="scoped">
	.toolbar{
		box-sizing: border-box;
		position: absolute;
		top: 0px;
		right: 0px;
		z-index: 15;
		background-color: #06101e;
		height: 40px;
		padding-top: 3px;
		padding-left: 8px;
		padding-right: 8px;
		border-radius: 30px;
		z-index: 12;
		border: 1px solid #0e2139;
		-webkit-box-shadow: 0 0 2px rgba(0,127,226,0.37), 0 0 12px rgba(0,127,226,0.37);
    	box-shadow: 0 0 2px rgba(0,127,226,0.37), 0 0 12px rgba(0,127,226,0.37);
	}
	.el-input--suffix .el-input__inner {
			padding-right: 0px;
	}
	.iconfont{
		font-size: 12px !important;
	}

	.telescopicType-enter-active, .telescopicType-leave-active {
        transition: right .1s;
	}
	.telescopicType-enter, .telescopicType-leave-to {
		left:300px;
	}
	.telescopicType-enter-to, .telescopicType-leave {
		left:2px;
	}

	li{
		min-height: 40px;
		padding: 0px;
		margin: 0px;
		list-style: none;
	}

</style>
<style>
	.el-dropdown-menu{
		overflow-x:visible;
		overflow-y:visible;
	}
	.el-dropdown-menu__item{
		overflow-x:visible;
		overflow-y:visible;
	}
	.el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
	    background-color: rgba( 198, 129, 30 ,0.6);
	    color: #000000;
	}
	.tootBar_btn{
		background-color: #3d4054 !important;
		border-color: #3d4054 !important;
		color:#87fff5 !important;
		width:44px !important;
		margin-right:-5px !important;
		margin-left:-0px !important;
		border-radius: 0px !important;
	}
	.tooltip {
		position: relative;
		background: rgba(0, 0, 0, 0.5);
		border-radius: 4px;
		color: white;
		padding: 4px 8px;
		opacity: 0.7;
		white-space: nowrap;
	}
	.tooltip-measure {
		opacity: 1;
		font-weight: bold;
	}
	.tooltip-static {
		background-color: rgba(70, 70, 70, 0.84);
		color: #00c8fe;
		font-weight:bold;
		vertical-align: inherit;
		border: 2px solid white;
	}
	.tooltip-measure:before,
	.tooltip-static:before {
		border-top: 6px solid rgba(0, 0, 0, 0.5);
		border-right: 6px solid transparent;
		border-left: 6px solid transparent;
		content: "";
		position: absolute;
		bottom: -6px;
		margin-left: -7px;
		left: 50%;
	}
	.tooltip-static:before {
		border-top-color: rgba(70, 70, 70, 0.84);
	}
	#tool .el-button--mini {
		font-size: 12px;
		border-radius: 0px;
	}
    .toolBar_btn{
		width:30px !important;
		padding: 0!important;
		height: 30px!important;
		border-radius: 0px !important;
		color: #66c5fe!important;
		background-color: #042c64!important;
		border-color: #018fce!important;
		border-radius: 50%!important;
		text-align: center;
		line-height: 30px;
		margin-left: 4px!important;
	}

	.motion{
		position:fixed;
		top: 50px !important;
		right: 315px !important;
	}
    .PCMotionMenu{
    	position:fixed;
		top: 90px !important;
		left: 290px !important;
    }
	#qianjing{
	   position: absolute;
       right: 208px;
       top: 8px;
	}
	#houtui{
		position: absolute;
        right: 10px;
        top: 8px;
	}
</style>
