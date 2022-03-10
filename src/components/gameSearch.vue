<template>
  <card-frame>
    <div class="function-frame">
      <div id="search-box-frame">
        <input
          type="text"
          id="search-box"
          placeholder="搜索小动物的名字吧！支持中文、英文和日文哦"
          v-model="input"
        />
        <div id="search-icon"></div>
      </div>
      <div id="search-items-frame">
        <div class="search-item" v-for="item in query" :key="item.name[2]">
          <div class="search-item-name">
            {{ item.name[0] }}
          </div>
          <div class="search-item-select" v-on:click="addGuess(item.key)">
            选择
          </div>
        </div>
        <div id="search-holder" v-if="!query.length">没有找到</div>
      </div>
    </div>
  </card-frame>
</template>
<script>
import cardFrame from "./cardFrame.vue";
export default {
  components: { cardFrame },
  props: ["selected", "list", "keySearch"],
  data() {
    return {
      input: "",
    };
  },
  methods: {
    addGuess(key) {
      console.log(1);
      this.$emit("guess", key);
    },
  },
  computed: {
    query() {
      if (this.$data.input) {
        let searchList = [];
        for (const key in this.list) {
          let match = false;
          this.list[key].name.forEach((name) => {
            if (name.toLowerCase().indexOf(this.$data.input.toLowerCase()) == 0)
              match = true;
          });
          if (this.keySearch) {
            if (
              this.list[key].key
                .toLowerCase()
                .indexOf(this.$data.input.toLowerCase()) == 0
            )
              match = true;
          }
          if (match) searchList.push(this.list[key]);
        }
        return searchList;
      } else return [];
    },
  },
};
</script>
<style>
#search-box-frame {
  display: flex;
  flex-flow: row nowrap;
  background-color: rgba(255, 255, 255, 0.1);
  height: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
#search-box {
  background: transparent;
  border: none;
  box-sizing: border-box;
  flex-grow: 1;
  height: 100%;
  color: #f0f0f0;
  font-size: 16px;
  line-height: 20px;
  padding: 0 16px;
}
#search-box::placeholder {
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  line-height: 20px;
  font-style: italic;
}
#search-icon {
  height: 100%;
  width: 48px;
  background-image: url(../../public/search.svg);
  background-repeat: no-repeat;
  background-size: 75%;
  background-position: center;
  opacity: 0.9;
}
#search-items-frame {
  width: 100%;
  max-height: 270px;
  overflow-y: auto;
}
.search-item {
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  align-items: center;
  height: 60px;
  box-sizing: border-box;
  line-height: 56px;
  color: #f0f0f0;
  font-size: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.search-item:last-child {
  border-bottom: 0px solid rgba(255, 255, 255, 0.3);
}
.search-item-name {
  width: 60px;
  text-align: left;
  padding-left: 16px;
  flex-grow: 1;
}
.search-item-select {
  width: 60px;
  height: 36px;
  line-height: 33px;
  border-radius: 8px;
  margin-right: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  flex-grow: 0;
  user-select: none;
}
#search-holder {
  height: 60px;
  box-sizing: border-box;
  text-align: center;
  line-height: 56px;
  color: #f0f0f0;
  font-size: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}
</style>