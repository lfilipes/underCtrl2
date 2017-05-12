(function () {
    'use strict';

angular
	.module('App', ['ngResource','ui.bootstrap', 'ui.router', 'ui.navbar','ngRadialGauge','ngStorage' ,'ngMessages','ngAnimate', 'ngSanitize'])
	.config(config)
	.run(run);

function config ($stateProvider,$urlRouterProvider,$locationProvider) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");

   // Now set up the states
 $stateProvider 
 
   .state('/', {
        url: '/',
        views: {
            'navbar': {
                templateUrl: "partials/navbar.html",
                controller: "navbarCtrl",
				controllerAs: 'vm'
            },
            'body': {
                templateUrl: "partials/login.html",
                controller: null
            }
        }
    })
	
    .state('login', {
        url: '/login',
        views: {
            'navbar': {
                templateUrl: "partials/navbar.html",
                controller: "navbarCtrl",
				controllerAs: 'vm'
            },
            'body': {
                templateUrl: "partials/login.html",
                controller: 'loginCtrl',
				controllerAs: 'vm'
            }
        }
    })
	
	 .state('logout', {
        url: '/logout',
        views: {
            'navbar': {
                templateUrl: "partials/navbarLogInOut.html",
                controller: null,
				controllerAs: 'vm'
            },
            'body': {
                templateUrl: "partials/logout.html",
                controller: 'logoutCtrl',
				controllerAs: 'vm'
            }
        }
    })
	
    .state('register', {
        url: '/register',
        views: {
            'navbar': {
                templateUrl: "partials/navbar.html",
                controller: "navbarCtrl",
				controllerAs: 'vm'
            },
            'body': {
                templateUrl: "partials/register.html",
                controller: 'registerCtrl',
				controllerAs: 'vm'
            }
        }
    })
	
	.state('dash', {
        url: '/dash',

        views: {
            'navbar': {
                templateUrl: "partials/navbar.html",
                controller: "navbarCtrl",
				controllerAs: 'vm'
            },
            'body': {
				templateUrl: "partials/waterGaugeDash.html",
				controller: 'waterGaugeCtrl'
            }
        }
    })	
	
	.state('cisternaDash_b2', {
        url: '/cisternaDash_b2',

        views: {
            'navbar': {
                templateUrl: "partials/navbar.html",
                controller: "navbarCtrl",
				controllerAs: 'vm'
            },
            'body': {
				templateUrl: "partials/cisternaDash_b2.html",
				controller: 'cisternaDashCtrl_b2'
            }
        }
    })	
	
	.state('cisternaDash_b5', {
        url: '/cisternaDash_b5',

        views: {
            'navbar': {
                templateUrl: "partials/navbar.html",
                controller: "navbarCtrl",
				controllerAs: 'vm'
            },
            'body': {
				templateUrl: "partials/cisternaDash_b5.html",
				controller: 'cisternaDashCtrl_b5'
            }
        }
    })		
	
	.state('caixaDash_b3', {
        url: '/caixaDash_b3',

        views: {
            'navbar': {
                templateUrl: "partials/navbar.html",
                controller: "navbarCtrl",
				controllerAs: 'vm'
            },
            'body': {
				templateUrl: "partials/caixaDash_b3.html",
				controller: 'caixaDashCtrl_b3'
            }
        }
    })
	
	.state('caixaDash_b5', {
        url: '/caixaDash_b5',

        views: {
            'navbar': {
                templateUrl: "partials/navbar.html",
                controller: "navbarCtrl",
				controllerAs: 'vm'
            },
            'body': {
				templateUrl: "partials/caixaDash_b5.html",
				controller: 'caixaDashCtrl_b5'
            }
        }
    })

  .state('relcisternas', {
      url: '/relcisternas',
	  
	       views: {
            'navbar': {
                templateUrl: "partials/navbar.html",
                controller: "navbarCtrl",
				controllerAs: 'vm'
            },
			'body': {
				templateUrl: "partials/relcisternas.html",
				controller: 'cisternasCtrl'
			}
		}
    })		
	
	
	.state('relatorio', {
      url: '/relatorio',
        views: {
            'navbar': {
                templateUrl: "partials/navbar.html",
                controller: "navbarCtrl",
				controllerAs: 'vm'
            },
			'body': {	  
			  templateUrl: "partials/rel.html",
			  controller: 'relCtrl'
			}
		}
    })
	
  .state('relbl5', {
      url: '/relbl5',
        views: {
            'navbar': {
                templateUrl: "partials/navbar.html",
                controller: "navbarCtrl",
				controllerAs: 'vm'
            },
			'body': {	  
				templateUrl: "partials/relbl5.html",
				controller: 'bl5Ctrl'
			}
		}
    })
	
  .state('relbl2', {
      url: '/relbl2',
	          views: {
            'navbar': {
                templateUrl: "partials/navbar.html",
                controller: "navbarCtrl",
				controllerAs: 'vm'
            },
			'body': {
				templateUrl: "partials/relbl2.html",
				controller: 'bl2Ctrl'
			}
		}	  
    })
	
	
   .state('relbl3', {
      url: '/relbl3',
	        views: {
            'navbar': {
                templateUrl: "partials/navbar.html",
                controller: "navbarCtrl",
				controllerAs: 'vm'
            },
			'body': {
				templateUrl: "partials/relbl3.html",
				controller: 'bl3Ctrl'
			}
		}
    })
	
	.state('espGourmet', {
        url: '/espGourmet',

        views: {
            'navbar': {
                templateUrl: "partials/navbar.html",
                controller: "navbarCtrl",
				controllerAs: 'vm'
            },
            'body': {
				templateUrl: "partials/RadialGaugeDemo.html",
				controller: 'RadialGaugeDemoCtrl'
            }
        }
    })

	.state('switch', {
        url: '/switch',

        views: {
            'navbar': {
                templateUrl: "partials/navbar.html",
                controller: "navbarCtrl",
				controllerAs: 'vm'
            },
            'body': {
				templateUrl: "partials/switchDash.html",
				controller: "switchCtrl"
            }
        }
    });
	
}

    function run($rootScope, $http, $location, $localStorage) {
        // keep user logged in after page refresh
        if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
        }
 
        // redirect to login page if not logged in and trying to access a restricted page
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            var publicPages = ['/login','/logout','/'];
            var restrictedPage = publicPages.indexOf($location.path()) === -1;
            if (restrictedPage && !$localStorage.currentUser) {
                $location.path('/');
            }
        });
    }	



})();

 
 
