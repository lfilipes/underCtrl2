(function () {
    'use strict';

angular
	.module('App')
    .controller('navbarCtrl', navbarCtrl);
	

	function navbarCtrl($scope,$location,$localStorage,AuthenticationService) {
		
	var vm = this;
	
	vm.isLoggedIn = false;
	
	 if ($localStorage.currentUser) {
        vm.isLoggedIn=true;  
		vm.currentUser = $localStorage.currentUser;
     };

	vm.allMenuItens = [
		
	  {
		name: "Nivel Reservatório",
		link: "#",
		subtree: [{
		  name: "Cisterna_b2",
		  link: "cisternaDash_b2"
		}, {
		  name: "Cisterna_b5",
		  link: "cisternaDash_b5"
		}, {
		  name: "Caixa_b3",
		  link: "caixaDash_b3"
		}, {
		  name: "Caixa_b5",
		  link: "caixaDash_b5"
		}
		 ]
	  }, 

	 {
		name: "Relatórios",
		link: "#",
		subtree: [{
		  name: "Cisternas",
		  link: "relcisternas"
		},{
		  name: "Bloco 2",
		  link: "relbl2"
		}, {
		  name: "Bloco 3",
		  link: "relbl3"
		}, {
		  name: "Bloco 5",
		  link: "relbl5"
		}, {
		  name: "Geral",
		  link: "relatorio"
		}
		]
	  },
	   {
		name: "Espaço Gourmet",
		link: "#",
		subtree: [{
		  name: "Espaço Gourmet",
		  link: "espGourmet"
		}]
	  },
	  
	  ]
	};
	
	})();



