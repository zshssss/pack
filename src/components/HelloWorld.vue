<template>
  <div class="hello">
      helo
  </div>
</template>

<script>

export default {
  name: "HelloWorld",
  
  data() {
    return {

      // BASE路径
      IMGURL:this.$store.state.imgUrl,
      SERVERURL:this.$store.state.serverUrl,


    };
  },
  created:function(){
    // 获取token
    
    var token = this.$store.token;

  },
  computed: {
    
  },
  methods: {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import 'index.css';
</style>
