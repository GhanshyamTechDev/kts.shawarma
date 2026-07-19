import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import babel from '@rolldown/plugin-babel'

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    command === 'serve' && babel({
      plugins: [['@locator/babel-jsx/dist', { dataAttribute: 'path' }]],
    }),
  ],
}));
