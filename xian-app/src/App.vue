<template>
  <div id="app">
    <v-footer></v-footer>
    <router-view/>
  </div>
</template>

<script>
import vFooter from '@/components/common/Footer';

export default {
  name: 'App',
  components: {
    vFooter
  }
};
</script>
