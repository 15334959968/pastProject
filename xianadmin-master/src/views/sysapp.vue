<template>
   <div class="sysapp-page">
       <iframe ref="iframe"  id="app-iframe" @load="loaded" class="iframe" frameborder="0">
       </iframe>
   </div>
</template>
<script>
let iframe=null;
export default {
  name: "sysapp",
  data() {
    return {
      apps: {
        w: "http://project.wisencn.com/control/login.html",
        y: "http://www.dlbdata.cn:8088/yunbuluo/index.html?zoom=11"
      }
    };
  },
  methods: {
      loaded(){
          
      }
  },
  mounted() {
          iframe = this.$refs.iframe;//.contentWindow.document.body;
          iframe.src=this.apps[this.$route.query.appid];
        
  },
  watch: {
            '$route' (to, from) {
              iframe.src=this.apps[this.$route.query.appid];
            },
           
        },
  components: {}
};
</script>

<style lang="scss" rel="stylesheet/scss">
.sysapp-page {
 
  width: 100%;
  .iframe {
     min-height: 1300px;
    border: none;
    margin: 0px;
    padding: 0px;
    width: 100%;
  
  }
}
</style>