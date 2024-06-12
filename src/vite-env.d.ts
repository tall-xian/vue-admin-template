/// <reference types="vite/client" />

declare module 'postcss-px-to-viewport' {
  export default function (options?: any): any;
}

declare module '*.vue' {
  import {DefineComponent} from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}