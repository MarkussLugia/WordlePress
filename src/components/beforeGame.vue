<template>
  <card-frame>
    <div class="text-frame">
      <span class="title">动森猜岛民小游戏</span>
      <p class="text">欢迎来到Nookie猜岛民小游戏！</p>
      <p class="text">
        游戏规则十分简单，我会想一个在《集合啦！动物森友会》中出场的岛民小动物，而你要猜出我想的是谁。
      </p>
      <p class="text">
        你每次猜测之后，我都会给出提示。我会告诉你我所想的岛民和你猜的村民在<b>性格、种族、生日的月份和日期</b>这四个特征上是否一致。
      </p>
      <p class="text">
        你一共可以猜<b>{{ chances }}</b
        >次。加油吧！
      </p>
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