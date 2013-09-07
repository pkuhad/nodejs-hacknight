requirejs.config({
    deps: ['main'],
    paths: {
        backbone: '../../backbone.1.0.0',
        underscore: '../../underscore.1.4.4',
        require: '../../require.js',
        d3: '../../d3.v3'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore'],
            exports: 'Backbone'
        },
        d3: {
            exports: 'd3'
        }
    },
    name: "main",
    out: "mainapp.min.js"
})
