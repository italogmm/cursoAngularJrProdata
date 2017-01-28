angular.module('pdCurso')
    .controller('Index6Controller', Index6Controller);

function Index6Controller($scope, $rootScope){

    $scope.$on('onTestEvent', onTestEvent);
    $scope.dispararEvento = dispararEvento;

    function  onTestEvent(event, data) {
        event.preventDefault(); //evitar de continuar descendo no escopo
        console.log(data);
    }

    function dispararEvento(){
        $rootScope.$broadcast('onTestEvent', 'testeee');
    }
}