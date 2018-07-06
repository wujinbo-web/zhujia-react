import moment from 'moment';
//删首尾空
const trim = string => string.replace(/(^\s*)|(\s*$)/g, "");

//金额指定格式 只允许2位小数 9位整数
const price = string => {
    let value = string;
    //清除"数字"和"."以外的字符
    value = value.replace(/[^\d.]/g, "");
    //验证第一个字符是数字而不是
    value = value.replace(/^\./g, "");
    //只保留第一个. 清除多余的
    value = value.replace(/\.{2,}/g, ".");
    value = value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    //只能输入两个小数
    value = value.replace(/^(-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
    if (value !== '') {
        let value2 = value.split('.');
        if (value2[0].length > 9) {
            value = value2[0].substr(0, 9) + (value2[1] ? '.' + value2[1] : '');
        }
    }
    return value;
};

//整数
const integer = string => {
    let value =  string.match(/^-?[0-9]\d*/) || string.match(/-?/);
    return value ? value[0] : '';
};

const timeString = timestamp => {
    return moment(timestamp * 1000).format('YYYY-MM-DD HH:mm');
};

export default {
    trim,
    price,
    integer,
    timeString
}