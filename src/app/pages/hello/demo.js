/**
 * Created by Rayr Lee on 2017/3/25.
 */

export default  {
    template: require('./demo.html'),
    controllerAs: 'vm',
    controller: Ctrl,
    bindings: {
        name: '@'
    }
}

function Ctrl($scope) {
    'ngInject';
    console.log($scope);
}