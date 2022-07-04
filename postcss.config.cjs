const purgecss = require("@fullhuman/postcss-purgecss")

module.exports = ({ env }) => {
    const postcss = {
        plugins: []
    }

    if (env === "production") {
        postcss.plugins.push(purgecss({
            content: ['index.html', '**/*.js', '**/*.ts', '**/*.html', '**/*.svelte']
        }))
    }

    return postcss
}
