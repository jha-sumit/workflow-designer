import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            '~external': path.resolve(__dirname, 'external'),
            "@utils": path.resolve(__dirname, 'src/utils'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@layouts': path.resolve(__dirname, 'src/layouts'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '~types': path.resolve(__dirname, 'src/types'),
            '~configs': path.resolve(__dirname, 'src/configs'),
            '@models': path.resolve(__dirname, 'src/models'),
            '~styles': path.resolve(__dirname, 'src/styles'),
            '@feature': path.resolve(__dirname, 'src/Incident'),
            '@store': path.resolve(__dirname, 'src/reducers'),
            '@editor': path.resolve(__dirname, 'src/editor'),
            '@apps': path.resolve(__dirname, 'src'),
            "@api": path.resolve(__dirname, 'src/api'),
            "@context": path.resolve(__dirname, 'src/context'),
            "~assets": path.resolve(__dirname, 'src/assets'),
        }
    },
    plugins: [react()],
})
