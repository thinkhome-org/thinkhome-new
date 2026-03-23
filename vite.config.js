import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [tailwindcss(), react()],
    server: {
        port: 3000,
        host: true,
        allowedHosts: ["all", "localhost.yan5q.org", "dev.zer0.cz"],
    },
    preview: {
        port: 3000,
        host: true,
        allowedHosts: ["all", "localhost.yan5q.org", "dev.zer0.cz"],
    },
});
