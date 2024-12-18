import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  plugins: [react(), tsconfigPaths(), svgr()],
})
