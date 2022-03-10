<template>
  <div id="head">{{ title }}</div>
</template>
<script>
export default {
  name: "headBar",
  props: {
    title: String,
  },
};
</script>
<style>
#head {
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  text-align: center;
  line-height: 60px;
  font-size: 30px;
  font-weight: bold;
  user-select: none;
}
</style>