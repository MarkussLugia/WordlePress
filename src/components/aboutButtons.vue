<template>
  <div class="about">
    <cardButton
      onclick="window.open('https://github.com/MarkussLugia/WordlePress')"
      ><div id="github-logo"></div>
      GitHub</cardButton
    >
    <cardButton onclick="window.open('https://weibo.com/u/6697782674')"
      >@MarkussLugia</cardButton
    >
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
#github-logo {
  display: inline-block;
  transform: translateY(1px);
  width: 16px;
  height: 16px;
  background-image: url(../../public/GitHub-Mark.svg);
}
.about {
  font-size: 16px;
  line-height: 16px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
}
</style>