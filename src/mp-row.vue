<template>
  <view :class="['row', alignClass, directionClass, alignClass, justifyClass, wrapClass, className]">
    <slot></slot>
  </view>
</template>

<script>
export default {
  props: {
    wrap:{
      type: Boolean
    },
    direction:{
      type: Boolean
    },
    align: {
      type: String
    },
    justify: {
      type: String
    },
    className: {
      type: String
    }
  },
  computed: {
    wrapClass() {
      return this.wrap ? "row-wrap" : "row-nowrap";
    },
    directionClass(){
      return this.direction ? 'box-vertical': 'box-horizontal';
    },
    alignClass() {
      return this.align ? `row-${this.align}` : null;
    },
    justifyClass() {
      return this.align ? `row-justify-${this.align}` : null;
    }
  }
};
</script>
