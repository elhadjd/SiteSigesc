// vite.config.js
import { defineConfig } from "file:///C:/Users/INFORJAY/Desktop/Site%20do%20sistema/fontend/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/INFORJAY/Desktop/Site%20do%20sistema/fontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/assets/scss/mixins";'
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxJTkZPUkpBWVxcXFxEZXNrdG9wXFxcXFNpdGUgZG8gc2lzdGVtYVxcXFxmb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxJTkZPUkpBWVxcXFxEZXNrdG9wXFxcXFNpdGUgZG8gc2lzdGVtYVxcXFxmb250ZW5kXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9JTkZPUkpBWS9EZXNrdG9wL1NpdGUlMjBkbyUyMHNpc3RlbWEvZm9udGVuZC92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG4vLyBpbXBvcnQgZG5zIGZyb20gJ2Rucydcbi8vIC8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG4vLyBkbnMuc2V0RGVmYXVsdFJlc3VsdE9yZGVyKCd2ZXJiYXRpbScpXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHNlcnZlcjp7XG4gICAgaG9zdDogdHJ1ZVxuICB9LFxuICBjc3M6IHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgIHNjc3M6IHtcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogJ0BpbXBvcnQgXCJzcmMvYXNzZXRzL3Njc3MvbWl4aW5zXCI7JyxcbiAgICAgICAgfSxcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVYsU0FBUyxvQkFBb0I7QUFDbFgsT0FBTyxXQUFXO0FBSWxCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixRQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDakIsTUFBTTtBQUFBLFFBQ0osZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==