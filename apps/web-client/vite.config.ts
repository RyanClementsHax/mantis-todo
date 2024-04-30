/// <reference types="vitest" />

import analog from '@analogjs/platform';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: __dirname,
    publicDir: 'src/public',
    build: {
      outDir: '../../dist/apps/web-client/client',
      reportCompressedSize: true,
      commonjsOptions: { transformMixedEsModules: true },
      target: ['es2020'],
    },
    ssr: {
      external: ['mongodb-memory-server'],
    },
    server: {
      fs: {
        allow: ['.'],
      },
    },
    plugins: [analog(), nxViteTsPaths(), splitVendorChunkPlugin()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      reporters: ['default'],
      cache: {
        dir: `../../node_modules/.vitest`,
      },
    },
    define: {
      'import.meta.vitest': mode !== 'production',
      "import('mongodb-memory-server')":
        "Promise.resolve({ MongoMemoryServer: { create: () => { throw new Error('memory server does not work in prod')} } });",
    },
  };
});
