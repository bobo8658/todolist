<template>
  <div v-if="list.length > 0">
    <div v-for="(item, index) in list" :key="index">
      <div class="item">
        <input type="checkbox" v-model="item.complete" @click="upd(index)" />
        {{ item.title }}
        <button class="del" @click="del(index)">删除</button>
      </div>
    </div>
  </div>
  <div v-else class="item">暂无任务</div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "navMain",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  emits: ["del", "upd"],
  setup(props, ctx) {
    let del = (index) => {
      ctx.emit("del", index);
    };
    let upd = (index) => {
      ctx.emit("upd", index);
    };
    return {
      del,
      upd,
    };
  },
});
</script>

<style lang="scss" scoped>
.item {
  line-height: 40px;
  position: relative;
  width: 640px;
  font-size: 16px;
  button {
    position: absolute;
    right: 20px;
    bottom: 6px;
    display: none;
    z-index: 99;
    background-color: #b6b6b6;
    border: none;
    color: black;
    padding: 4px 12px;
    text-decoration: none;
    border-radius: 2px;
  }
  &:hover {
    background: rgb(247, 247, 247);
    button {
      display: block;
    }
  }
}
@media screen and (max-width: 900px) {
  .item {
    width: 90vw;
  }
}
</style>