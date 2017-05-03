(function () {
    'use strict';
 
    angular
        .module('App')
        .controller('loginCtrl', Controller);
 
    function Controller($location, AuthenticationService) {
        var vm = this;
 
        vm.login = login;
 
        initController();
 
        function initController() {
            // reset login status
            AuthenticationService.Logout();
        };
 
        function login() {
            vm.loading = true;
            AuthenticationService.Login(vm.email, vm.password, function (result) {
                if (result === true) {
                    $location.path('/dash');
                } else {
                    vm.error = 'Email or password is incorrect';
                    vm.loading = false;
                }
            });
        };
    }
})();