<template>
    <div>
        <tab :tabs="tabs" @update="update">
            <div class="tab-content">
                <div class="panel" v-show="showPanel(0)">
                    panel1 content
                </div>
                <div class="panel" v-show="showPanel(1)">
                    panel2 content
                </div>
                <div class="panel" v-show="showPanel(2)">
                    panel3 content
                </div>
            </div>
        </tab>
    </div>
</template>

<script>
  import 'components/tab.vue';

  export default {
    data() {
      return {
        tabs: ['tab1','tab2','tab3'],
        activeIndex: 0
      }
    },
    methods: {
      showPanel (value) {
        return value === this.activeIndex;
      },
      update (index) {
        this.activeIndex = index;
      }
    }
  };

</script>

<style>
    .tab-content {
        padding: 10px 40px;
    }
</style>