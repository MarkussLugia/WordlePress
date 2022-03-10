<template>
  <div class="about">
    <cardButton onclick="window.open('https://github.com/MarkussLugia/WordiePress')">GitHub</cardButton>
    <cardButton onclick="window.open('https://weibo.com/u/6697782674')">@MarkussLugia</cardButton>
  </div>
</template>
<script>
import cardButton from "./cardButton.vue";
export default {
  inheritAttrs: true,
  components: {
    cardButton,
  },
};
</script>
<style>
.about {
  font-size: 16px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
}
</style>