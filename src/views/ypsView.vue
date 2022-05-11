<template>
    <nav-yps/>
    <!-- Hero Section -->
    <div class="heros">
        <div class="hero"></div>
        <div class="container contents">
            <h1>Wedding Organizer</h1>
        </div>
    </div>

    <!-- About Section -->
        <div class="tentangs">
            <div class="tentang"></div>
            <div class="container">
                <div class="row flex-row-reverse tntgs">
                     <div class="col-12 col-md-6 tntg">
                        <img :src="section1.img2"> 
                         <img :src="section1.img1">
                    </div>
                    <div class="col-12 col-md-6 tntg1">
                        <h2>{{section1.judul}}</h2>
                        <p v-for="desk in section1.desc" :key="desk">{{desk}}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Links Section -->
        <div class="links">
            <div class="container">
                <div class="row flex-row-cols link">
                    <div class="col-6 col-md-4 link1">
                        <router-link to="/peo">
                        <img :src="link.icon">
                        <p>{{link.title}}</p>
                        </router-link>
                    </div>
                    <div class="col-6 col-md-4 link1">
                        <router-link to="/wedding">
                        <img :src="link1.icon">
                        <p>{{link1.title}}</p>
                        </router-link>
                    </div>
                    <div class="col-6 col-md-4 link1">
                        <router-link to="/maestro">
                        <img :src="link2.icon">
                        <p>{{link2.title}}</p>
                        </router-link>
                    </div>
                    <div class="col-6 col-md-4 link1">
                        <router-link to="/peo">
                        <img :src="link3.icon">
                        <p>{{link3.title}}</p>
                        </router-link>
                    </div>
                    <div class="col-6 col-md-4 link1">
                        <router-link to="/peo">
                        <img :src="link4.icon">
                        <p>{{link4.title}}</p>
                        </router-link>
                    </div>
                    <div class="col-6 col-md-4 link1">
                        <router-link to="/peo">
                        <img :src="link5.icon">
                        <p>{{link5.title}}</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import navYps from '../headfoot/navYps.vue'
export default {
    components :{
        navYps
    },
    data : function(){
        return  {
            section1 : {
                judul : 'About Us',
                desc :  ['YPS Group merupakan group usaha yang bergerak dibidang penyedia kebutuhan/ keperluan pesta Pernikahan khususnya pernikahan Adat Batak.',
                'Seiring berjalan waktu, YPS Group mengalami pertumbuhan bisnis yang cukup signifikan, saat ini YPS Group menaungi beberapa unit Usaha, diantaranya PEO, Maestro Photo, Deandra Dekorasi, Ondo-Entertaiment, Sewa Kostum Adat batak.',
                 'YPS Group didirikan dengan tujuan, membangun management yang profesional, yang memiliki standarisasi pelayanan terbaik, sehingga dengan demikian pasti akan menghasilkan produk-produk terbaik.'],
                img1 : require('../assets/image/img-yps/foto1.jpg'),
                img2 : require('../assets/image/img-yps/foto.jpg')
            },
            link : 
                {
                    title : 'PEO WO Batak',
                    icon : 'https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/000000/external-ring-wedding-xnimrodx-lineal-xnimrodx-2.png' 
                },
            link1 :  
                {
                    title : 'PEO Wedding Package',
                    icon : 'https://img.icons8.com/ios/64/000000/gift--v1.png' 
                },
            link2 :
                {
                    title : 'Maestro Photo',
                    icon : 'https://img.icons8.com/ios/64/000000/camera--v3.png' 
                },
            link3 :
                {
                    title : 'Deandra Dekorasi',
                    icon : 'https://img.icons8.com/external-outline-02-chattapat-/64/000000/external-wedding-wedding-outline-02-chattapat--10.png' 
                },
            link4 :
                {
                    title : 'Sewa Costum Adat Batak',
                    icon : 'https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/000000/external-couple-wedding-kmg-design-detailed-outline-kmg-design.png' 
                },
            link5 :
                {
                    title : 'Comming Soon',
                    icon : 'https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/000000/external-Coming-Soon-miscellany-texts-and-badges-bearicons-detailed-outline-bearicons.png' 
                },
                
            

        }
    }

}
</script>
<style scoped>
    @import '../css/yps.css';
</style>