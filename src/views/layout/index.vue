/**
* @file:  src/views/layout/index
* @description:布局
* @date: 2024-06-12
* @author: wanggaoxian
*/

<script setup lang="ts">
import AsideMenu from './menu/index.vue';

const font = reactive({
  color: 'rgba(0, 0, 0, .15)',
});

</script>

<template>
  <div>
    <el-container class="layout">
      <!--      v-if="!isMinScreen" :width="asideCollapse ? '64px' : '250px'"-->
      <el-aside >
        <AsideMenu/>
      </el-aside>
      <el-container>
        <el-header>
          <!--          <HeaderBar/>-->
        </el-header>
        <!--        <TabsChrome/>-->
        <el-main>
          <el-watermark :font="font" content="王高贤">
            <router-view></router-view>
          </el-watermark>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.layout {
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .el-aside {
    width: 150px;
    transition: 0.3s;
  }

  .aside-drawer {
    :deep(.el-drawer__body) {
      padding: 0 !important;
    }
  }

  .el-main {
    padding: 0;
  }
}
</style>