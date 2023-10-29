import { UserConfig, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
  }
/**
 * We have to parth user config because it doesn't contain a test section
 * which is needed for globals setting
 *  */ 
} as UserConfig & { test: Record<string, string | boolean> });
