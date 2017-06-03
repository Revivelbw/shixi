/**
 * Created by Rayr Lee on 2017/6/3.
 */

class Ctrl {
    constructor($_ajax) {
        'ngInject';
        let that = this;


        that.timestamp = new Date();

        that.changeImg = () => {
            that.timestamp = new Date();
        };

        that.send = () => {
            $_ajax.get('app/login/verifycode', {phone: that.resolve.data.phone, code: that.code})
                .then(() => {
                    that.close({$value: 'ok'});
                }, () => {
                    alert('错误');
                    this.timestamp = new Date();
                });
        };
    }
}

export default {
    template: require('./modal.html'),
    controllerAs: 'vm',
    controller: Ctrl,
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    }
}