import { defineConfig, loadEnv } from 'vite'
import dotenv from 'dotenv'
import react from '@vitejs/plugin-react-swc'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // 'process.env' : process.env
    __ENV_SECRET__ : JSON.stringify(process.env.TEXT_NO_EXPOSE)
  }
})