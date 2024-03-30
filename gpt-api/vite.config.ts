import solid from "solid-start/vite";
import { defineConfig } from "vite";
import solidStyled from "vite-plugin-solid-styled";
import vercel from "solid-start-vercel"
import cloudflare from "solid-start-cloudflare-workers"
import node from "solid-start-node"

const adapter = () => {
  if (process.env.VERCEL) {
    return vercel({ edge: true })
  } else if (process.env.CF_WORKER) {
    return cloudflare({})
  } else {
    return node()
  }
}


export default defineConfig({
  envPrefix: "CLIENT_",
  plugins: [
    solid({ ssr: false, adapter: adapter() }),
    solidStyled({
      filter: {
        include: "src/**/*.tsx",
        exclude: "node_modules/**/*.{ts,js}",
      },
    }),
  ],
  build: {
    outDir: 'dist',  // 这里指定了输出目录为 'output'
  },
});
