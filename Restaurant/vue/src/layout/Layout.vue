<template>
  <div>
    <Header/>
    <div style="display: flex">
      <Aside/>
      <router-view style="flex: 1"/>
    </div>
  </div>
  <!--      表单区域-->
</template>

<script>
import Header from "../components/Header";
import Aside from "../components/Aside";
import request from "../utils/request";

export default {
  name: "Layout",
  components: {Aside, Header},
}
</script>

<style scoped>

</style>