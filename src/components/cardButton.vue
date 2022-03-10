<template>
  <div class="button" v-on:click="clicked">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props:["event"],
  methods:{
    clicked(){
      console.log(this.event)
      this.$emit(this.event)
    }
  }
}
</script>
<style>
.button {
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1.5px solid #707070;
  box-sizing: border-box;
  text-align: center;
  padding: 8px 15px;
  margin: 0 9px 18px;
  flex-grow: 1;
  flex-basis: 0;
  transition: 400ms;
}
.button:hover{
  background-color: #2060ff;
  border: 1.5px solid #5080ff;
}
</style>