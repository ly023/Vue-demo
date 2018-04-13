<template>
    <div>
        <router-link to="tab">tab组件</router-link>
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
    methods: {

    }
  };

  Vue.component('app', component)

  export default component
</script>

<style lang="scss" type="text/scss">

</style>