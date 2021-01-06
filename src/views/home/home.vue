<template>
    <div id='home' class="map">
    </div>
</template>

<script>
import 'ol/ol.css'
import olMap from 'ol/Map'
import olView from 'ol/View'
import ollayerTile from 'ol/layer/Tile'
import { transform, get } from "ol/proj";
import TileArcgisRest from 'ol/source/TileArcGISRest'
import OSM from "ol/source/OSM"
import XYZ from "ol/source/XYZ"
//Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MzAyNzUyYi0zY2QxLTQxZDItODRkOS1hNTA3MDU3ZTBiMDUiLCJpZCI6MjU0MSwiaWF0IjoxNTMzNjI1MTYwfQ.oHn1SUWJa12esu7XUUtEoc1BbEbuZpRocLetw6M6_AA';
export default {
    name: 'Map',
    data () {      
        return {
            map:null,
            view:null
        }
    },
    methods:{
             
    },
    mounted(){
        // 初始化定位
        let pos = [parseFloat(107.8), parseFloat(23.729)];
        pos= transform(pos, 'EPSG:4326', 'EPSG:3857')   
        var ol2d = new olMap({
            target:'home',
            layers: [
					 new ollayerTile({
                         source: new OSM()
                     }),
                    //  new ollayerTile({
                    //     source: new XYZ({
                    //         url:tdtURL + '/DataServer?T=img_w' + '&x={x}&y={y}&l={z}' + '&tk=b72e0a86555fa046d016a2c2612c0e44',
                    //     })
                    //  }), // 加载天地图
                     new ollayerTile({
                         source:new TileArcgisRest({
                             url:baseMap
                         })
                     })

            ],
            view:new olView({
               center: pos,
					zoom: 7.6,
					minZoom:5,
					maxZoom: 20,
                    projection: 'EPSG:3857'
            })
        });  
    }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#home{height:800px;}
/*隐藏ol的一些自带元素*/
.ol-attribution,.ol-zoom { display: none;}

</style>