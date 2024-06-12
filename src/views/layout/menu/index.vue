/**
* @file:  src/views/layout/menu/index
* @description: 菜单
* @date: 2024-06-12
* @author: wanggaoxian
*/

<script setup lang="ts">
import {onMounted} from 'vue';
// import {storeToRefs} from 'pinia';
import {useRoute} from 'vue-router';
// import {appName} from '@/config/app';
// import {useAppStore} from '@/stores/app';
import {menus} from '@/router/menu';
// import RouteMenu from './components/RouteMenu.vue';

const route = useRoute();
// const appStore = useAppStore();
// const {asideCollapse} = storeToRefs(appStore);

onMounted(() => {
  console.log(menus, '=====menus');
});
</script>

<template>
  <div class="aside">
    <div class="logo">
      <img src="@/assets/logo.svg" alt=""/>
    </div>
    <el-menu class="menu">
      <el-menu-item v-for="(item, index) in menus " :key="index" :index="index">
        <template #title>
          <el-icon>
            <component :is="item.meta?.icon"/>
          </el-icon>
          <span>{{ item.meta?.title }}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
.aside {
  border-right: 1px solid #dcdfe6;
  height: 100vh;
  overflow: hidden;

  .logo {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 40px;
    }
  }

  .menu {
    height: calc(100vh - 40px);
    overflow-y: auto;
    border-right: none;
  }
}

</style>
