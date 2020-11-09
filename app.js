Vue.component('l-map', window.Vue2Leaflet.LMap);
Vue.component('l-tile-layer', window.Vue2Leaflet.LTileLayer);
Vue.component('l-marker', window.Vue2Leaflet.LMarker);
const app = new Vue({
    el:"#app",
    data:{
        info:[],
        ip:'',
        center: null,
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        marker: null
    },
    mounted(){
        axios.get("https://geo.ipify.org/api/v1?apiKey=at_LQR1ptv7Zr6wmhwE3Q22uB8d4Qzst")
        .then(res => this.info=res.data);   
    },
    methods:{
        newIp(){            
            axios.get("https://geo.ipify.org/api/v1?apiKey=at_LQR1ptv7Zr6wmhwE3Q22uB8d4Qzst&ipAddress="+this.ip)
            .then(res => this.info=res.data)
        }
    },
    beforeUpdate(){
        this.center = L.latLng(this.info.location.lat, this.info.location.lng);
        this.marker = L.latLng(this.info.location.lat, this.info.location.lng);
    }
})