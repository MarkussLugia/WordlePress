<template>
  <textarea ref="clip" id="clip-input"></textarea>
  <head-bar :title="title"></head-bar>
  <div class="game" v-if="!gameStart">
    <before-game :chances="chances"></before-game>
    <card-button event="toggle" v-on:toggle="toggleGameStart">
      <span class="big-button"><b>→ </b> 开始游戏吧！</span>
    </card-button>

    <about-buttons></about-buttons>
  </div>
  <div class="game" v-else>
    <game-started :remaining="remaining" v-if="!gameEnd"></game-started>
    <game-end
      :answer="metadata.list[target].name[0]"
      :win="win"
      v-else
    ></game-end>
    <game-search
      v-if="!gameEnd"
      :list="metadata.list"
      :guessed="guesses"
      :key-search="metadata.searchByKey"
      v-on:guess="addGuess($event)"
    ></game-search>
    <game-list
      :metadata="metadata"
      :guesses="guesses"
      :target="target"
    ></game-list>
    <div v-if="gameEnd">
      <card-button event="share" v-on:share="shareResult">
        <span class="big-button" v-if="copied"><b>✓ </b>已复制到剪贴板</span>
        <span class="big-button" v-else><b>⇱ </b>分享结果</span>
      </card-button>
      <card-button event="toggle" v-on:toggle="toggleGameStart">
        <span><b>↺ </b> 再猜一把！</span>
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
import gameEnd from "./components/gameEnd.vue";

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
    gameEnd,
  },
  data() {
    return {
      metadata: metadata,
      title: metadata.title,
      chances: metadata.chances,
      gameStart: false,
      gameEnd: false,
      win: false,
      target: "",
      guesses: [],
      copied: false,
    };
  },
  methods: {
    toggleGameStart() {
      if (!this.$data.gameStart) {
        this.$data.gameStart = true;
        window.addEventListener("beforeunload", function (e) {
          var confirmationMessage =
            "离开此页面后，你本次的游戏进度会丢失！真的要离开吗？";
          (e || window.event).returnValue = confirmationMessage;
          return confirmationMessage;
        });
      }
      this.startGame();
    },
    startGame() {
      this.$data.gameEnd = false;
      this.$data.win = false;
      this.$data.copied = false;
      let keys = [];
      for (const key in this.$data.metadata.list) {
        keys.push(key);
      }
      this.$data.target = keys[Math.floor(Math.random() * keys.length)];
      this.$data.guesses = [];
    },
    addGuess(key) {
      if (key == this.$data.target) {
        this.$data.gameEnd = true;
        this.$data.win = true;
        this.$data.guesses.push(key);
        return;
      } else {
        let checker = true;
        for (const property in metadata.properties) {
          if (
            this.$data.metadata.list[key][property] !=
            this.$data.metadata.list[this.$data.target][property]
          ) {
            checker = false;
          }
        }
        if (checker) {
          this.$data.target = key;
          this.$data.gameEnd = true;
          this.$data.win = true;
          this.$data.guesses.push(key);
          return;
        }
      }
      if (this.$data.guesses.length + 1 >= this.$data.metadata.chances) {
        this.$data.gameEnd = true;
        this.$data.guesses.push(key);
        return;
      }
      this.$data.guesses.push(key);
      return;
    },
    shareResult() {
      let shareText = "动森猜岛民";
      for (const item of this.$data.guesses) {
        shareText += "\n";
        for (const key in this.$data.metadata.properties) {
          let targetValue = this.$data.metadata.list[this.$data.target][key];
          let compareValue = this.$data.metadata.list[item][key];
          shareText += this.compare(targetValue, compareValue);
        }
      }
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText);
      }
      if (window.clipboardData) {
        window.clipboardData.setData(shareText);
      }
      this.$refs.clip.style.display = "block";
      this.$refs.clip.textContent = shareText;
      this.$refs.clip.select();
      document.execCommand("copy");
      this.$refs.clip.style.display = "none";
      this.$data.copied = true;
    },
    compare(targetValue, compareValue) {
      if (targetValue == compareValue) {
        return "✅";
      } else if (typeof targetValue == "number") {
        if (targetValue > compareValue) return "🔼";
        else return "🔽";
      } else return "❌";
    },
  },
  computed: {
    remaining() {
      return this.$data.metadata.chances - this.$data.guesses.length;
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
#clip-input {
  display: none;
  position: fixed;
  z-index: -1;
  box-sizing: border-box;
  width: 0px;
  height: 0px;
  opacity: 0;
  left: -256px;
}
#head {
  flex-grow: 0;
}
.game {
  flex-grow: 1;
  overflow-y: auto;
  padding: 6px 0.5vw 0;
}
.big-button {
  font-size: 24px;
  line-height: 42px;
}
</style>
