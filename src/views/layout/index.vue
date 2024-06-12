/**
* @file:  src/views/layout/index
* @description:布局
* @date: 2024-06-12
* @author: wanggaoxian
*/

<script setup lang="ts">
import AsideMenu from './menu/index.vue';
import HeaderBar from './head/index.vue';
import {storeToRefs} from 'pinia';
import {commonStore} from '@/stores/common.ts';

const appStore = commonStore();
const {isCollapse} = storeToRefs(appStore);

const font = reactive({
  color: 'rgba(0, 0, 0, .15)',
});

</script>

<template>
  <div>
    <el-container class="layout">
      <!--      v-if="!isMinScreen" :width="asideCollapse ? '64px' : '250px'"-->
      <el-aside :class="isCollapse?'aside65px':'aside120px'">
        <AsideMenu/>
      </el-aside>
      <el-container>

        <!--          <el-header>-->
        <!--          <HeaderBar/>-->
        <!--          </el-header>-->
        <!--        <TabsChrome/>-->
        <el-watermark :font="font" content="王高贤">
          <el-header>
            <HeaderBar/>
          </el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-watermark>
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

  .aside65px {
    width: 65px;
  }

  .aside120px {
    width: 120px;
  }

  .aside-drawer {
    :deep(.el-drawer__body) {
      padding: 0 !important;
    }
  }

  .el-header {
    padding: 0 10px;
  }

  .el-main {
    padding: 10px;
    height: 100vh;
    width: 100vw;
  }
}
</style>