<template>
    <div class="mod-tab">
        <ul class="mod-tab-list">
            <li :class="['mod-tab-item', {'mod-tab-item-active': index === activeIndex} ]"
                v-for="(tab, index) in tabs" @click="switchPanel(index)" :key="index">{{ tab }}</li>
        </ul>
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'

    let component = {
      props: {
        tabs: {
          type: Array,
          default: []
        }
      },
      data: ()=>({
        activeIndex: 0
      }),
      methods: {
        switchPanel (index) {
          this.activeIndex = index;
          this.$emit('update', index);
        }
      }
    }

    Vue.component('tab', component)

    export default component

</script>

<style lang="scss" type="text/scss">
    $main-color: #3399ff;

    %activeStyle {
        border: {
            width: 1px;
            style: solid;
            color: #b8d6f4;
        }
        background-color: #f6fafe;
        color: $main-color;
    }

    .mod-tab-item {
        display: inline-block;
        padding: 8px 16px;
        margin-right: 6px;
        background-color: #FFF;
        border: 1px solid #eee;
        cursor: pointer;
        &:hover,
        &.mod-tab-item-active {
            @extend %activeStyle;
        }
    }
</style>