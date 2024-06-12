/**
* @file:  src/views/layout/head/index
* @description: 导航栏
* @date: 2024-06-12
* @author: wanggaoxian
*/

<script setup lang="ts">
import {storeToRefs} from 'pinia';
import {Expand} from '@element-plus/icons-vue';
import {commonStore} from '@/stores/common.ts';

const common = commonStore();
const {isCollapse} = storeToRefs(common);


const loginOut = () => {

};
</script>

<template>
  <div class="header">
    <div class="header-left">
      <el-button link @click="common.toggleCollapse()">
        <el-icon :size="36" :class="isCollapse ? '' : 'aside-collapse'">
          <expand/>
        </el-icon>
      </el-button>
      <!--      <Breadcrumb v-if="!isMobile"/>-->
    </div>
    <div class="header-right">
      <!--      <Fullscreen/>-->
      <!--      <ThemeSwitch @toggleDarkMode="appStore.toggleDarkMode()"/>-->
      <el-dropdown>
          <span class="el-dropdown-link">
            {{ 'admin' }}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>

</template>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .aside-collapse {
    transform: rotate(180deg);
  }

  .header-left {
    display: flex;

    .breadcrumb {
      line-height: 2;
      margin-left: 20px;
    }
  }

  .header-right {
    display: flex;
    align-items: center;

    .user {
      cursor: pointer;
    }
  }
}

</style>