<template>
  <card-frame>
  <div class="text-frame">
    <span class="title"
      >你还有<b>{{ chances }}</b
      >次机会。</span
    >
    <p class="text">请利用下方的搜索选出你猜测的岛民。</p>
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