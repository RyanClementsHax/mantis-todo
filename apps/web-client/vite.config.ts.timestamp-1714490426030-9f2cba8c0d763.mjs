// vite.config.ts
import analog from "file:///home/ryanclementshax/dev/mantis-todo/node_modules/.pnpm/@analogjs+platform@1.2.2_@angular-devkit+build-angular@17.3.5_@nx+devkit@18.3.3_@nx+vite@18.3.3/node_modules/@analogjs/platform/src/index.js";
import { defineConfig, splitVendorChunkPlugin } from "file:///home/ryanclementshax/dev/mantis-todo/node_modules/.pnpm/vite@5.2.10_@types+node@20.12.7_less@4.1.3_stylus@0.59.0/node_modules/vite/dist/node/index.js";
import { nxViteTsPaths } from "file:///home/ryanclementshax/dev/mantis-todo/node_modules/.pnpm/@nx+vite@18.3.3_@types+node@20.12.7_nx@18.3.3_typescript@5.4.5_vite@5.2.10_vitest@1.5.0/node_modules/@nx/vite/plugins/nx-tsconfig-paths.plugin.js";
var __vite_injected_original_dirname = "/home/ryanclementshax/dev/mantis-todo/apps/web-client";
var vite_config_default = defineConfig(({ mode }) => {
  return {
    root: __vite_injected_original_dirname,
    publicDir: "src/public",
    build: {
      outDir: "../../dist/apps/web-client/client",
      reportCompressedSize: true,
      commonjsOptions: { transformMixedEsModules: true },
      target: ["es2020"]
    },
    ssr: {
      external: ["mongodb-memory-server"]
    },
    server: {
      fs: {
        allow: ["."]
      }
    },
    plugins: [analog(), nxViteTsPaths(), splitVendorChunkPlugin()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["src/test-setup.ts"],
      include: ["**/*.spec.ts"],
      reporters: ["default"],
      cache: {
        dir: `../../node_modules/.vitest`
      }
    },
    define: {
      "import.meta.vitest": mode !== "production",
      "import('mongodb-memory-server')": "Promise.resolve({ MongoMemoryServer: { create: () => { throw new Error('memory server does not work in prod')} } });"
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9yeWFuY2xlbWVudHNoYXgvZGV2L21hbnRpcy10b2RvL2FwcHMvd2ViLWNsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcnlhbmNsZW1lbnRzaGF4L2Rldi9tYW50aXMtdG9kby9hcHBzL3dlYi1jbGllbnQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnlhbmNsZW1lbnRzaGF4L2Rldi9tYW50aXMtdG9kby9hcHBzL3dlYi1jbGllbnQvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5cbmltcG9ydCBhbmFsb2cgZnJvbSAnQGFuYWxvZ2pzL3BsYXRmb3JtJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgc3BsaXRWZW5kb3JDaHVua1BsdWdpbiB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgbnhWaXRlVHNQYXRocyB9IGZyb20gJ0BueC92aXRlL3BsdWdpbnMvbngtdHNjb25maWctcGF0aHMucGx1Z2luJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICByb290OiBfX2Rpcm5hbWUsXG4gICAgcHVibGljRGlyOiAnc3JjL3B1YmxpYycsXG4gICAgYnVpbGQ6IHtcbiAgICAgIG91dERpcjogJy4uLy4uL2Rpc3QvYXBwcy93ZWItY2xpZW50L2NsaWVudCcsXG4gICAgICByZXBvcnRDb21wcmVzc2VkU2l6ZTogdHJ1ZSxcbiAgICAgIGNvbW1vbmpzT3B0aW9uczogeyB0cmFuc2Zvcm1NaXhlZEVzTW9kdWxlczogdHJ1ZSB9LFxuICAgICAgdGFyZ2V0OiBbJ2VzMjAyMCddLFxuICAgIH0sXG4gICAgc3NyOiB7XG4gICAgICBleHRlcm5hbDogWydtb25nb2RiLW1lbW9yeS1zZXJ2ZXInXSxcbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgZnM6IHtcbiAgICAgICAgYWxsb3c6IFsnLiddLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFthbmFsb2coKSwgbnhWaXRlVHNQYXRocygpLCBzcGxpdFZlbmRvckNodW5rUGx1Z2luKCldLFxuICAgIHRlc3Q6IHtcbiAgICAgIGdsb2JhbHM6IHRydWUsXG4gICAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgICAgIHNldHVwRmlsZXM6IFsnc3JjL3Rlc3Qtc2V0dXAudHMnXSxcbiAgICAgIGluY2x1ZGU6IFsnKiovKi5zcGVjLnRzJ10sXG4gICAgICByZXBvcnRlcnM6IFsnZGVmYXVsdCddLFxuICAgICAgY2FjaGU6IHtcbiAgICAgICAgZGlyOiBgLi4vLi4vbm9kZV9tb2R1bGVzLy52aXRlc3RgLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlZmluZToge1xuICAgICAgJ2ltcG9ydC5tZXRhLnZpdGVzdCc6IG1vZGUgIT09ICdwcm9kdWN0aW9uJyxcbiAgICAgIFwiaW1wb3J0KCdtb25nb2RiLW1lbW9yeS1zZXJ2ZXInKVwiOlxuICAgICAgICBcIlByb21pc2UucmVzb2x2ZSh7IE1vbmdvTWVtb3J5U2VydmVyOiB7IGNyZWF0ZTogKCkgPT4geyB0aHJvdyBuZXcgRXJyb3IoJ21lbW9yeSBzZXJ2ZXIgZG9lcyBub3Qgd29yayBpbiBwcm9kJyl9IH0gfSk7XCIsXG4gICAgfSxcbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLE9BQU8sWUFBWTtBQUNuQixTQUFTLGNBQWMsOEJBQThCO0FBQ3JELFNBQVMscUJBQXFCO0FBSjlCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFdBQVc7QUFBQSxJQUNYLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLHNCQUFzQjtBQUFBLE1BQ3RCLGlCQUFpQixFQUFFLHlCQUF5QixLQUFLO0FBQUEsTUFDakQsUUFBUSxDQUFDLFFBQVE7QUFBQSxJQUNuQjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsVUFBVSxDQUFDLHVCQUF1QjtBQUFBLElBQ3BDO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixJQUFJO0FBQUEsUUFDRixPQUFPLENBQUMsR0FBRztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTLENBQUMsT0FBTyxHQUFHLGNBQWMsR0FBRyx1QkFBdUIsQ0FBQztBQUFBLElBQzdELE1BQU07QUFBQSxNQUNKLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLFlBQVksQ0FBQyxtQkFBbUI7QUFBQSxNQUNoQyxTQUFTLENBQUMsY0FBYztBQUFBLE1BQ3hCLFdBQVcsQ0FBQyxTQUFTO0FBQUEsTUFDckIsT0FBTztBQUFBLFFBQ0wsS0FBSztBQUFBLE1BQ1A7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixzQkFBc0IsU0FBUztBQUFBLE1BQy9CLG1DQUNFO0FBQUEsSUFDSjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
