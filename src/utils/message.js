import {Message} from 'element-ui';

const myAlert = {};

myAlert.success = function (msg) {
    Message.success({
        message: msg,
        type: 'success'
    });
};

myAlert.fail = function (msg) {
    Message.error(msg);
};

export default myAlert;
