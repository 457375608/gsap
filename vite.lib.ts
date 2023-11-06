import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path, { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    //路径别名
    alias: {
      '~': path.resolve(__dirname, './'), // 根路径
      '@': path.resolve(__dirname, 'src'), // src 路径
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/lib-entry.tsx'),
      // the proper extensions will be added
      fileName: '[name]',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom', 'clipboard'],
      output: [
        // ES Module 模块格式的编译
        {
          name: 'MyLib',
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          exports: undefined,
          dir: resolve(__dirname, 'build'),
          preserveModulesRoot: 'src',
        },
        {
          name: 'MyLib',
          format: 'umd',
          entryFileNames: '[name].js',
          preserveModules: false,
          exports: undefined,
          dir: resolve(__dirname, 'build'),
          preserveModulesRoot: 'src',
          globals: {
            react: 'React',
            clipboard: 'Clipboard',
          },
        },
      ],
    },
  },
})
