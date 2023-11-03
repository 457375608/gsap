import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import svgLoader from 'vite-svg-loader'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    svgLoader({
      defaultImport: 'url',
    }),
  ],
  resolve: {
    //路径别名
    alias: {
      '~': path.resolve(__dirname, './'), // 根路径
      '@': path.resolve(__dirname, 'src'), // src 路径
    },
  },
})
