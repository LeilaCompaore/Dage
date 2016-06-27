/**
 * Created by leilacompaore on 2016-06-26.
 */
/**************************************************
 * Configuring Employees Plugins
 **************************************************/
/**
 * Register Plugins
 */
exports.register = function(server, options, next) {

    server.route([

        {
            method : 'GET',
            path : '/profile',
            handler : function(request, reply) {

                reply('the profile gurrll')
            }
        }
    ]);

    next();
};

/**
 * Plugin attributes...
 * we have here the Name and the Version of the plugin
 */
exports.register.attributes = {

    name : 'ProfileModule',
    version : '1.0.0'
};