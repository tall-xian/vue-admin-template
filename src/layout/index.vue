/**
* @file:  src/layout/index
* @description:
* @date: 2024-06-11
* @author: wanggaoxian
*/

<script setup lang="ts">

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside" width="200px">Aside</el-aside>
      <el-container>
        <el-header height="4rem" class="head">

        </el-header>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.common-layout {
  height: 100vh;
}

.aside {
  background-color: aqua;
  height: 100vh;
}

.head {
  background-color: aquamarine;
}

.main {
  background-color: cyan;
}

</style>