/**
 * 获取api数据并储存
 */
import { observable, computed, action } from 'mobx';
import http from '../tool/http';
import { API_URL } from '../config';
import { Toast } from 'antd-mobile';

class ApiHelper {
    @observable dataMap = observable.map();

    @action async requestPost(ApiType, data, errorTip = false) {
        const url = `${API_URL}/${ApiType}`;
        const result = await http.apiPost(url, data);
        this.dataMap.set(ApiType, result);
        if (!result.status && errorTip) Toast.fail(result.info, 1.5);
        return result;
    }

    @action async requestGet(ApiType, data, errorTip = false) {
        const url = `${API_URL}${ApiType}`;
        let dataString = "?";
        if (data) {
            for (var Key in data) {
                dataString = dataString + Key + '=' + data[Key] + '&';
            }
            if (dataString.length > 0) dataString = dataString.substring(0, dataString.length - 1);
        }
        const result = await http.apiGet(url + dataString);
        this.dataMap.set(ApiType, result);
        if (!result.status && errorTip) Toast.fail(result.info, 1.5);
        return result;
    }
}

export default new ApiHelper;
