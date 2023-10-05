const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'lib/main.js'),
            name: 'DATA STRUCTURE',
            fileName: (format) => `data-structure.${format}.js`
        }
    }
});