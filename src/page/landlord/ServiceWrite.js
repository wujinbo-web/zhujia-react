import React, { Component } from 'react';
import pageStyle from '../page2.scss';
import ImagePicker from '../../component/common/ImagePicker';
import Header from './component/Header';
import DropList from './component/DropList';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./ServiceWrite.css";

class ServiceWrite extends Component {
    constructor( ...args ) {
        super( ...args );
        this.state = {
            store: "",
            broker: "",
            adress: "",
            type: ""
        };
    }

    componentDidMount() {
        document.title = '报修信息填写';
    }
    static propTypes={
        history: PropTypes.object
    }
    fnReset = () => {
        this.props.history.push('/servicelist');
    }
    handleStore = ( val, name) => {                //获取列表值
        this.setState({ name: val });
    }
    render() {
        let selectJson = [
            { name: '门店:', title: "store", store: { title: "请选择门店", list: [ '下沙店', '临平店', '西湖店', '萧山店', '文海店' ] } },
            { name: '经纪人:', title: "broker", store: { title: "请选择经济人", list: [ '张三', '李四', '王五', '熊大' ] } },
            { name: '地址:', title: "adress", store: { title: "请选择地址", list: [ '下沙', '西湖', '上城', '下城', '拱墅' ] } },
            { name: '维修类型:', title: "type", store: { title: "请选择维修类型", list: [ '普通维修', 'VIP维修' ] } }
        ];

        return (
            <div className={pageStyle['page']} id="servicewrite" >
                <React.Fragment>
                    <div className={'box'}>
                        <ul className={'list'}>
                            {
                                selectJson.map( (listItem, index) => {
                                    return (
                                        <li key={index} className="a1">{ listItem.name }
                                            <div className="wrap">
                                                <DropList data={listItem.store} name={ listItem.title } handleStore={this.handleStore} />
                                            </div>
                                        </li>
                                    );
                                })
                            }
                            <li className="a1">报修内容:
                                <textarea rows="3" cols="20" placeholder="请描述报修内容">
                                </textarea>
                            </li>
                            <li className="a1">上传图片：
                                <ImagePicker/>
                            </li>
                            <a href="javascript:;" className={'reset'} onClick={this.fnReset} >取消</a>
                            <a href="javascript:;" className={'prev'}>预约维修</a>
                        </ul>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}
export default ServiceWrite;
