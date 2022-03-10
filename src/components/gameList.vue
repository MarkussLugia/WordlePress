<template>
  <card-frame>
    <div class="text-frame">
      <span class="title">我猜是...</span>
      <p class="text">下方列出了你已经猜过的岛民，以及我所给出的对应提示。</p>
      <p class="text">✅ 代表我所想的岛民与你猜的这位岛民的此特点相符。</p>
      <p class="text">❌ 则代表此特点并不相符。</p>
      <p class="text">
        🔼 与 🔽 代表我所想的岛民与你猜的这位岛民的此数据相比更高或更低。
      </p>
    </div>
    <div class="function-frame">
      <div id="table-head">
        <div class="table-head-name">名字</div>
        <div
          v-for="property in metadata.properties"
          :key="property.text"
          class="table-head-item"
        >
          {{ property.text }}
        </div>
      </div>
      <div id="table-holder" v-if="!guesses.length">你暂时还没有选择岛民哦</div>
      <div class="table-row" v-for="guess in guesses" :key="guess">
        <div class="table-row-name">{{ metadata.list[guess].name[0] }}</div>
        <div
          v-for="(propertyData, property) in metadata.properties"
          :key="propertyData.text"
          class="table-row-item"
        >
          <div class="table-row-item-text">
            {{ propertyData.parseText(metadata.list[guess][property]) }}
          </div>
          <div class="table-row-item-mark">
            {{
              compare(
                metadata.list[target][property],
                metadata.list[guess][property]
              )
            }}
          </div>
        </div>
      </div>
    </div>
  </card-frame>
</template>
<script>
import cardFrame from "./cardFrame.vue";
export default {
  components: { cardFrame },
  props: ["metadata", "guesses", "target"],
  methods: {
    compare(targetValue, compareValue) {
      if (targetValue == compareValue) {
        return "✅";
      } else if (typeof targetValue == "number") {
        if (targetValue > compareValue) return "🔼";
        else return "🔽";
      } else return "❌";
    },
  },
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
#table-head {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  text-align: center;
  width: 100%;
  height: 36px;
  line-height: 32px;
  white-space: nowrap;
}
.table-row {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  text-align: center;
  width: 100%;
  height: 72px;
  line-height: 64px;
}
.table-head-name,
.table-row-name {
  flex-grow: 0.8;
  min-width: 80px;
  flex-basis: 0;
  overflow: hidden;
}
.table-head-item,
.table-row-item {
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  flex-grow: 1;
  flex-basis: 0;
  overflow: hidden;
}
.table-row-item {
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
  align-items: stretch;
}
.table-row-item-text {
  line-height: 24px;
}
.table-row-item-mark {
  line-height: 44px;
  font-size: 36px;
  user-select: none;
}
#table-holder {
  height: 60px;
  box-sizing: border-box;
  text-align: center;
  line-height: 56px;
  color: #f0f0f0;
  font-size: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}
</style>