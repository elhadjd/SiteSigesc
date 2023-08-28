import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import dns from 'dns'
// // https://vitejs.dev/config/
// dns.setDefaultResultOrder('verbatim')
export default defineConfig({
  plugins: [react()],
  server:{
    host: true,
  },
  css: {
    preprocessorOptions: {
        scss: {
          additionalData: '@import "src/assets/scss/mixins";',
        },
    },
  },
})
