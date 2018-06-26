<template>
  <view :class="['col', alignClass, spanClass, offsetClass, className]">
    <slot></slot>
  </view>
</template>

<script>
export default {
  props: {
    align: {
      type: String
    },
    span: {
      type: String
    },
    offset: {
      type: String
    },
    className: {
      type: String
    }
  },
  computed: {
    alignClass() {
      return this.align ? `col-${this.align}` : null;
    },
    spanClass() {
      return this.span ? `col-${this.span}` : null;
    },
    offsetClass() {
      return this.offset ? `col-${this.offset}` : null;
    }
  }
};
</script>
