<template>
  <card-frame>
    <div class="text-frame" v-if="win">
      <span class="title">恭喜！猜中了！</span>
      <p class="text">
        答案就是<b>{{ answer }}</b
        >！
      </p>
    </div>
    <div class="text-frame" v-else>
      <span class="title">没猜中欸...</span>
      <p class="text">
        我想的岛民是<b>{{ answer }}</b
        >，下次加油吧！
      </p>
    </div>
  </card-frame>
</template>
<script>
import cardFrame from "./cardFrame.vue";
export default {
  components: { cardFrame },
  props: ["answer", "win"],
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