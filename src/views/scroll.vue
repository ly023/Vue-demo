<template>
    <div>
        <section v-scroll="onScroll">
            <ul class="list">
                <li class="item" v-for="(item,index) in list">
                    <a :href="item.message">{{ item.message }}{{ index }}</a>
                </li>
            </ul>
        </section>
        <div class="loading" v-show="loading">加载中，请稍候...</div>
    </div>
</template>

<script>
  import Vue from 'vue'

  import scrollDirective from 'directives/scroll'

  export default {
    data: () => ({
      loading: false,
      list: [
        {message: 'https://elegenthus.github.io/post/VueDirectivesTest/'},
        {message: 'https://elegenthus.github.io/post/VueDirectivesTest/'},
        {message: 'https://elegenthus.github.io/post/VueDirectivesTest/'},
        {message: 'https://elegenthus.github.io/post/VueDirectivesTest/'},
        {message: 'https://elegenthus.github.io/post/VueDirectivesTest/'},
        {message: 'https://elegenthus.github.io/post/VueDirectivesTest/'},
        {message: 'https://elegenthus.github.io/post/VueDirectivesTest/'},
        {message: 'https://elegenthus.github.io/post/VueDirectivesTest/'},
        {message: 'https://elegenthus.github.io/post/VueDirectivesTest/'},
        {message: 'https://elegenthus.github.io/post/VueDirectivesTest/'}
      ],
    }),
    directives: {
      scroll: scrollDirective
    },
    methods: {
      onScroll () {
        console.log('scroll');
        this.loading = true;
        setTimeout(()=>{
          this.list = this.list.concat([
            {message: 'https://elegenthus.github.io/post/VueDirectivesTest/'},
            {message: 'https://elegenthus.github.io/post/VueDirectivesTest/'},
            {message: 'https://elegenthus.github.io/post/VueDirectivesTest/'},
            {message: 'https://elegenthus.github.io/post/VueDirectivesTest/'},
            {message: 'https://elegenthus.github.io/post/VueDirectivesTest/'},
            {message: 'https://elegenthus.github.io/post/VueDirectivesTest/'},
            {message: 'https://elegenthus.github.io/post/VueDirectivesTest/'},
            {message: 'https://elegenthus.github.io/post/VueDirectivesTest/'},
            {message: 'https://elegenthus.github.io/post/VueDirectivesTest/'},
            {message: 'https://elegenthus.github.io/post/VueDirectivesTest/'}
          ]);
          this.loading = false;
        },500)
      }
    }
  }


</script>

<style lang="scss" type="text/scss">
    .list{
        padding: 0 20px;
        list-style: none;
    }

    .item {
        margin: 20px 0;
        padding: 16px;
        background-color: #fff;
        border: {
            color: #ddd;
            width: 1px;
            style: solid;
        }
        a {
            color: #444;
            font-size: 16px;
        }
    }

    .loading {
        padding: 20px;
        text-align: center;
        background-color: #42b983;
        color: #fff;
        font-size: 16px;
    }
</style>