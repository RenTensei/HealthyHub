/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const basename = command === 'build' ? '/HealthyHub/' : '/';

  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [react()],
    base: basename,
    define: {
      'process.env.BASENAME': JSON.stringify(basename),
    },
  };
});
