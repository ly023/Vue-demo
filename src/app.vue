<template>
    <div class="links">
        <router-link to="tab">tab组件</router-link>
        <router-link to="scroll">自定义scroll指令（局部注册）</router-link>
    </div>
</template>


<script>
  import Vue from 'vue'

  import 'normalize.css'

  let component = {
    data() {
      return {};
    },
    mounted() {
    },
    methods: {}
  };

  Vue.component('app', component)

  export default component
</script>

<style lang="scss">
    .links {
        a {
            display: inline-block;
            margin: 10px 20px;
            color: #42b983;
        }
    }
</style>