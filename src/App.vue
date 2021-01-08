<template>
  <div id="app">
<!--    <menuRoot></menuRoot>-->
    <router-view/>
  </div>
</template>

<script>
 // import menuRoot from "./components/menuRoot.vue";
 // import { mapActions } from 'vuex'
 // import { mapGetters } from 'vuex'
  export default {
  name: 'App',
    data(){
      return{

        // layerList:[],
        // sonRefresh:true
      };
    },
    components:{
      // layer

    },
    computed: {
      // ...mapGetters({
      //   // getter_layerManagePosition:'getter_layerManagePosition',
      //
      // }),
    },
    methods:{


    },
    created(){


    },
    watch:{


    },
    mounted(){
    console.log("初始化显示map")
    console.log(map)
    },






}




</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  font-family: sans-serif;
  background-color:#ececec;
}
/*#app {*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  color: #2c3e50;*/
/*}*/
</style>
