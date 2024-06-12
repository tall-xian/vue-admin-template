<script setup lang="ts">
import {storeToRefs} from 'pinia';
import {useAppStore} from '@/store/app';
import {useMediaQuery} from '@vueuse/core';
import {minScreenMaxWidth} from '@/config/app';
import AsideMenu from './AsideMenu.vue';
import HeaderBar from './HeaderBar.vue';
import TabsChrome from './TabsChrome.vue';

const isMinScreen = useMediaQuery(`(max-width: ${minScreenMaxWidth}px)`);
const appStore = useAppStore();
const {asideCollapse} = storeToRefs(appStore);
</script>

<template>
  <el-container class="main">
    <el-aside v-if="!isMinScreen" :width="asideCollapse ? '64px' : '250px'">
      <AsideMenu/>
    </el-aside>
    <div v-else class="aside-drawer">
      <el-drawer
          :size="250"
          :with-header="false"
          :show-close="false"
          @close="appStore.toggleAside()"
          :modelValue="!asideCollapse"
          direction="ltr"
      >
        <AsideMenu/>
      </el-drawer>
    </div>
    <el-container>
      <el-header height="4rem">
        <HeaderBar/>
      </el-header>
      <TabsChrome/>
      <el-main>
        <router-view></router-view>
      </el-main>
      <!--      <el-footer>Footer</el-footer>-->
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .el-aside {
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
