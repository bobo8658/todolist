<template>
  <div class="container">
    <div>已完成 {{ isComplete }} / 全部 {{ list.length }}</div>
    <div v-if="isComplete > 0">
      <button class="btn" @click="clear">清除已完成</button>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "navFooter",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  setup(props, ctx) {
    let isComplete = computed(() => {
      let arr = props.list.filter((item) => {
        return item.complete;
      });
      return arr.length;
    });
    let clear = () => {
      let arr = props.list.filter((item) => {
        return item.complete === false;
      });
      ctx.emit("clear", arr);
    };
    return {
      isComplete,
      clear,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  line-height: 50px;
  .btn {
    margin-left: 40px;
    background-color: #9b9b9b; /* 绿色 */
    border: none;
    color: white;
    padding: 4px 12px;
    text-decoration: none;
    border-radius: 4px;
  }
}
</style>