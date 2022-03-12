<template>
  <div class="todo">
    <header>TodoList</header>
    <nav-header @add="add"></nav-header>
    <nav-main :list="list" @del="del" @upd="upd"></nav-main>
    <nav-footer :list="list" @clear="clear"></nav-footer>
  </div>
</template>

<script>
import NavHeader from "@/components/navHeader/NavHeader";
import NavMain from "@/components/navMain/NavMain";
import NavFooter from "@/components/navFooter/NavFooter";
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "Home",
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },
  setup(props, ctx) {
    let store = useStore();
    let list = computed(() => {
      return store.state.list;
    });
    let value = ref("");
    let add = (val) => {
      value.value = val;
      let flag = true;
      list.value.map((item) => {
        if (item.title === value.value) {
          flag = false;
          alert("任务已存在");
        }
      });
      if (flag) {
        store.commit("addTodo", {
          title: value.value,
          complete: false,
        });
      }
    };
    let del = (val) => {
      store.commit("delTodo", val);
    };
    let upd = (val) => {
      store.commit("updTodo", val);
    };
    let clear = (val) => {
      store.commit("clear", val);
    };
    return {
      add,
      value,
      list,
      del,
      upd,
      clear,
    };
  },
});
</script>

<style lang="scss" scoped>
header {
  margin-top: 6vh;
  margin-bottom: 12px;
  font-size: 28px;
  font-weight: 700;
}

@media screen and (min-width: 900px){
.todo {
    margin-left: 24%;

}}
@media screen and (max-width: 900px){
.todo {
  width: 90%;
  margin: 0 auto;
}}
</style>