import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { UserConfigExport } from 'vite';

type TUserConfig = UserConfigExport & {
  clearCache: boolean;
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  clearCache: true, //ref ChatGPT
} as TUserConfig);
