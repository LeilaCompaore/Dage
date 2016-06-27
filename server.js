var Hapi = require('hapi');
var server = new Hapi.Server();
var Path = require('path');

/**
 * Lets the server run on this Host and Port
 */
server.connection({host:'localhost',port:8000});


/**
 * Register all Modules as Plugins Here
 *
 */

var plugins = [

    { register : require('vision') }, //register Vision with others Plugins
    { register : require('./app/profile/profile_server.js') }
];


/**
 * Routing Views
 */
server.register(plugins, function (err) {

    if (err) {
        throw err;
    }

    server.views({

        engines: { html: require('handlebars') },
        path: __dirname
    });

    /**
     * Default route
     */
    server.route({ method: 'GET', path: '/', handler: function(request, reply) {

        //reply.view('home/home', {title : 'Home'});
        reply('welcome back winner')

    } });
});




/**
 * Starting Server
 */
server.start(function(){

    console.log("Server running on", server.info.uri);
});
 
