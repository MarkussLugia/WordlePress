<template>
  <head-bar :title="title"></head-bar>
  <div class="game" v-if="!gameStart">
    <before-game :chances="chances"></before-game>
    <card-button event="toggle" v-on:toggle="toggleGameStart">
      <span class="big-button">⮞ 开始游戏吧！</span>
    </card-button>

    <about-buttons></about-buttons>
  </div>
  <div class="game" v-else>
    <game-started :chances="chances"></game-started>
    <game-search></game-search>
    <game-list></game-list>
    <div v-if="gameOver">
      <card-button event="toggle" v-on:toggle="toggleGameStart">
        <span class="big-button">⇱ 分享结果</span>
      </card-button>
      <card-button event="toggle" v-on:toggle="toggleGameStart">
        <span>⭮ 再猜一把！</span>
      </card-button>

      <about-buttons></about-buttons>
    </div>
  </div>
</template>

<script>
import metadata from "../data/metadata";
import headBar from "./components/headBar.vue";
import beforeGame from "./components/beforeGame.vue";
import cardButton from "./components/cardButton.vue";
import aboutButtons from "./components/aboutButtons.vue";
import gameStarted from "./components/gameStarted.vue";
import gameSearch from "./components/gameSearch.vue";
import gameList from "./components/gameList.vue";

export default {
  name: "App",
  components: {
    headBar,
    beforeGame,
    cardButton,
    aboutButtons,
    gameStarted,
    gameSearch,
    gameList,
  },
  data() {
    return {
      title: metadata.title,
      chances: metadata.chances,
      gameStart: false,
      gameOver: false,
      game: {
        keys: [],
        target: {},
        guesses: [],
        remaining: 8,
      },
    };
  },
  methods: {
    toggleGameStart() {
      if (!this.$data.gameStart) {
        this.$data.gameStart = true;
      }
    },
  },
};
</script>

<style>
#app {
  background-color: #303030;
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
#head {
  flex-grow: 0;
}
.game {
  flex-grow: 1;
  overflow-y: auto;
  padding: 6px 12px 0;
}
.big-button {
  font-size: 24px;
  line-height: 42px;
}
</style>
