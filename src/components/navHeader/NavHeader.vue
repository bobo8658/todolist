<template>
  <div>
    <input
      placeholder="请输入任务名称"
      v-model="value"
      @keydown.enter="enter"
    />
    <button @click="enter">添加</button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "navHeader",
  setup(props, ctx) {
    let value = ref("");
    let enter = () => {
      if(value.value==''){}
      else{
        ctx.emit("add", value.value);
      value.value = "";
      }
    };
    return {
      value,
      enter,
    };
  },
});
</script>

<style lang="scss" scoped>
input {
  width: 500px;
  height: 40px;
  padding: 4px 10px;
  margin: 10px 0px;
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
  &:focus {
    border-color: #66afe9;
    outline: 0;
    box-shadow: 0 0 8px rgba(102, 175, 233, 0.2);
  }
}
button {
  margin: 0 10px;
  width: 100px;
  height: 38px;
  color: #fff;
  background-color: rgb(102, 175, 233);
  border: none;
  outline: 0;
  border-radius: 5px;
  box-shadow: 0 1px #2360a1;
}
@media screen and (max-width: 900px){
  input {
  width: 60vw;
}
}
@media screen and (max-width: 380px){
button {
  margin: 0 10px;
  width: 20vw;
}
}
</style>