<template>
    <nav-peo/>
       <!-- Hero Style -->
       <div class="heros">
           <div class="hero"></div>
           <div class="container hero1">
               <h3>{{welcome}}</h3>
               <h1>{{peo}}</h1>
           </div>
       </div>

       <!-- About Section -->
       <div class="abots">
           <div class="abot"></div>
           <div class="container">
               <div class="row abot1">
                   <div class="col-12 col-md-6 abot2">
                       <img :src="about.img" alt="">
                   </div>
                   <div class="col-12 col-md-6 abot2">
                       <h2>{{about.title}}</h2>
                       <p v-for="abot in about.content" :key="abot">{{abot}}</p>
                   </div>
               </div>
           </div>
       </div>

       <!-- Quotes Section -->
       <div class="quotes">
           <div class="quot"></div>
           <div class="container text-center">
               <p>{{quotes}}</p>
           </div>
       </div>

       <!-- Project Section -->
           <div class="container">
               <div class="row projeks">
                   <div v-for="item in projek" :key="item" class="col-12 col-md-4 projek">
                       <img :src="item.img">
                       <div class="desc">
                           <h4>{{item.title}}</h4>
                       </div>
                   </div>
                </div>
            </div>

</template>
<script>
import navPeo from '../headfoot/navPeo.vue'
export default {
    components : {
        navPeo
    },
    data(){
        return{
            welcome : 'Welcome to',
            peo : 'PEO WO Batak',
            about :{
                title : 'About Us',
                content : ['YPS Group merupakan group usaha yang bergerak dibidang penyedia kebutuhan/ keperluan pesta Pernikahan khususnya pernikahan Adat Batak.','Seiring berjalan waktu, YPS Group mengalami pertumbuhan bisnis yang cukup signifikan, saat ini YPS Group menaungi beberapa unit Usaha, diantaranya PEO, Maestro Photo, Deandra Dekorasi, Ondo-Entertaiment, Sewa Kostum Adat batak.'],
                img : require('../assets/image/img-peo/bg-about.png')
            },
            quotes : 'Pernikahan bagaikan rantai dari cincin emas, diawali dengan secercah sinar terang dan diakhiri oleh keabadian',
            projek :[
                {
                    title : "Martupol Philip & Yessy Wedding's",
                    img : require('../assets/image/img-peo/foto.jpg')
                },
                {
                    title : "David & Vemmy Wedding's.",
                    img : require('../assets/image/img-peo/foto1.jpg')
                },
                {
                    title : "Anderson & Laora Wedding's.",
                    img : require('../assets/image/img-peo/foto2.jpg')
                },
            ]
        }
    }
}
</script>
<style scoped>
    @import '../css/peo.css';
</style>