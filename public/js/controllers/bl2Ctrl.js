angular.module('App').controller('bl2Ctrl', function($scope,$resource){
   
     $scope.exportData = function () {
        var blob = new Blob([document.getElementById('exportable').innerHTML], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
        });
        saveAs(blob, "Relatorio_bloco2.xls");
    };

	$scope.items = [];
	
	var apiData = $resource('/api/data/1/UCSReserv1/bl2');
	function buscaData() {
		apiData.query(
			function(items) {		
				$scope.items = items;
			},
			function(erro) {
				console.log(erro);
				$scope.mensagem = {texto: 'Não foi possível obter os dados'};
			}
		);
	}
buscaData();
})