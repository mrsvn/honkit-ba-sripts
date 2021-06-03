module.exports = {
    website: {
        assets: './assets',
        js: [
            'script.js'
        ]
    },

    // Map of hooks
    hooks: {
        "init": function() {
           console.log('init honkit scripts')
        }
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};