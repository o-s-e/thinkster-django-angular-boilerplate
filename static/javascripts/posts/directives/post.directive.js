/**
 * Created by ose on 11/9/2015.
 */
/**
 * Post
 * @namespace thinkster.posts.directives
 */
(function () {
    "use strict";

    angular
        .module('thinkster.posts.directives')
        .directive('post', post);

    /**
     * @namespace Post
     */
    function post() {
        /**
         * @name directive
         * @desc The directive to be returned
         * @namespace thinkster.posts.directives.Post
         */
        var directive = {
            restrict: 'E',
            scope: {
                post: '='
            },
            templateUrl: '/static/templates/posts/post.html'
        };

        return directive;
    }
})();
