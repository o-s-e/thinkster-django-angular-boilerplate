/**
 * Created by ose on 11/9/2015.
 */
(function () {
    "use strict";

    angular
        .module('thinkster.posts', [
            'thinkster.posts.controllers',
            'thinkster.posts.services',
            'thinkster.posts.directives'
        ]);

    angular
        .module('thinkster.posts.controllers', []);

    angular
        .module('thinkster.posts.directives', ['ngDialog']);

    angular
        .module('thinkster.posts.services', []);
})();

