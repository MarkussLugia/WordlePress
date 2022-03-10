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
    <game-started :remaining="remaining"></game-started>
    <game-search
      v-if="!gameOver"
      :list="metadata.list"
      :selected="[]"
      :key-search="metadata.searchByKey"
      v-on:guess="addGuess($event)"
    ></game-search>
    <game-list
      :metadata="metadata"
      :guesses="game.guesses"
      :target="game.target"
    ></game-list>
    <div v-if="gameOver">
      <card-button event="share" v-on:share="shareResult">
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
import beforeGame from "./components/gameIntro.vue";
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
      metadata: metadata,
      title: metadata.title,
      chances: metadata.chances,
      gameStart: false,
      gameOver: false,
      win: false,
      game: {
        target: "jay",
        guesses: ["quinn", "ione", "apollo"],
      },
    };
  },
  methods: {
    toggleGameStart() {
      if (!this.$data.gameStart) {
        this.$data.gameStart = true;
      }
    },
    addGuess(key) {
      if (key == this.$data.game.target) {
        this.$data.gameOver = true;
        this.$data.win = true;
      } else {
        let checker = true;
        for (const property in metadata.properties) {
          console.log(key);
          if (
            this.$data.metadata.list[key][property] !=
            this.$data.metadata.list[this.$data.game.target][property]
          ) {
            checker = false;
          }
        }
        if (checker) {
          this.$data.game.target = key;
          this.$data.gameOver = true;
          this.$data.win = true;
        }
      }
      if (this.$data.game.guesses +1 >= this.$data.metadata.chances) {
          this.$data.gameOver = true;
      }
      this.$data.game.guesses.push(key);
    },
  },
  computed: {
    remaining() {
      return this.$data.metadata.chances - this.$data.game.guesses.length;
    },
  },
  mounted() {
    for (const key in this.$data.metadata.list) {
      this.$data.metadata.list[key].key = key;
    }
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
