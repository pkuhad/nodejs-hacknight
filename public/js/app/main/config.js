requirejs.config({
    deps: ['main'],
    paths: {
        backbone: '../../backbone.1.0.0',
        underscore: '../../underscore.1.4.4',
        require: '../../require.js'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore'],
            exports: 'Backbone'
        }
    },
    name: "main",
    out: "mainapp.min.js"
})
