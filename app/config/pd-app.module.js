/**
 * Created by italogustavomirandamelo on 21/01/17.
 */
    angular.module('pdCurso', [
    'ngMessages',
    'ngAnimate',
    'toastr',
    'ui.grid',
    'ui.grid.selection',
    'ngMaterial',
    'ui.router'
]);


angular.module('pdCurso')
    .config(config);

function config($mdThemingProvider, $compileProvider) {
$mdThemingProvider.theme('blue')
    .primaryPalette('blue')
    .accentPalette('pink');

    $compileProvider.preAssignBindingsEnabled(true);
}

