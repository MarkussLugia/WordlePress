<template>
  <card-frame>
  <div class="text-frame">
      <span class="title">我猜是...</span>
      <p class="text">下方列出了你已经猜过的岛民，以及我所给出的对应提示。</p>
      <p class="text">✅ 代表我所想的岛民与你猜的这位岛民的此特点相符。</p>
      <p class="text">❌ 则代表此特点并不相符。</p>
      <p class="text">🔼 与 🔽 代表我所想的岛民与你猜的这位岛民的此数据相比更高或更低。</p>
  </div>
  <div class="function-frame">
  </div>
  </card-frame>
</template>
<script>
import cardFrame from "./cardFrame.vue";
export default {
  components: { cardFrame },
  props: ["chances"],
};
</script>
<style>
.text-frame {
  width: 100%;
  box-sizing: border-box;
  padding: 20px 15px 5px;
}
.title {
  font-size: 30px;
  line-height: 36px;
}
.text {
  font-size: 16px;
}
</style>