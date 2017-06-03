/**
 * Created by Rayr Lee on 2017/5/6.
 */

export default {
    template: require('./app.html'),
    controllerAs: 'vm',
    controller($_ajax, $uibModal) {
        'ngInject';
        let that = this;
        that.phone = '';
        that.isDisabled = false;

        that.changeFn = () => {
            that.isDisabled = that.phone.length === 11 ? true : false;
        };

        that.getCode = () => {
            if (!that.isDisabled) {
                return;
            }
            $uibModal.open({
                component: 'loginModal',
                resolve: {
                    data () {
                        return {
                            phone: that.phone
                        };
                    }
                }
            }).result.then((val) => {
                console.log('发送成功', val);
            }, () => {

            });
        };

        that.loginFn = () => {
            $_ajax.get('app/login/login', {phone: that.phone, verify_code: that.verify_code})
                .then(() => {}, () => {
                    alert('错误');
                    this.timestamp = new Data();
                });
        }
    }
}