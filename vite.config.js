import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue(), svgLoader()],
};
