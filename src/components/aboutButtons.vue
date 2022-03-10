<template>
  <div class="about">
    <cardButton event="github">GitHub</cardButton>
    <cardButton event="weibo">@MarkussLugia</cardButton>
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