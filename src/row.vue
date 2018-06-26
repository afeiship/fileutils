<template>
<view :class="['row', {
  align: 'align' + align,
  justify: 'justify' + justify,
}]">
</view>
</template>

<script>
export default {
  props: {
    align: {
      type: String
    },
    justify: {
      type: String
    }
  }
};
</script>
