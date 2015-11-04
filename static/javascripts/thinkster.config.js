/**
 * Created by ose on 11/4/2015.
 */
(function () {
    'use_strict';

    angular
        .module('thinkster.config')
        .config(config);

    config.$inject = ['$locationProvider'];

    /**
     * @name config
     * @desc Enable HTML5 routing
     */
    function config($locationProvider) {
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }

})();
