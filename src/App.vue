<template>

  <router-view/>
  <app-fot></app-fot>

</template>
<script>
import appFot from '../src/headfoot/appFot.vue'
export default {
  components: {
    appFot
  }
}
</script>

