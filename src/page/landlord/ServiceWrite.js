import React, { Component } from 'react';
import pageStyle from '../page2.scss';
import ImagePicker from '../../component/common/ImagePicker';
import Header from './component/Header';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./ServiceWrite.css";

class ServiceWrite extends Component {
    constructor( ...args ) {
        super( ...args );
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
    render() {
        let selectJson = [
            { name: '门店:', store: [ '下沙店', '临平店', '西湖店', '萧山店', '文海店' ] },
            { name: '经纪人:', store: [ '张三', '李四', '王五', '熊大' ] },
            { name: '地址:', store: [ '下沙', '西湖', '上城', '下城', '拱墅' ] },
            { name: '维修类型:', store: [ '普通维修', 'VIP维修' ] }
        ];

        return (
            <div className={pageStyle['page']} id="servicewrite" >
                <React.Fragment>
                    <div className={'box'}>
                        <Header title="报修信息填写" />
                        <ul className={'list'}>
                            {
                                selectJson.map( (listItem, index) => {
                                    return (
                                        <li key={index}>{ listItem.name }
                                            <select>
                                                <option >请选择{ listItem.name }</option>
                                                {
                                                    listItem.store.map( (item, num) => {
                                                        return (
                                                            <option key={num}>{item}</option>
                                                        );
                                                    })
                                                }
                                            </select>
                                        </li>
                                    );
                                })
                            }
                            <li>报修内容:
                                <textarea rows="3" cols="20" placeholder="请描述报修内容">
                                </textarea>
                            </li>
                            <li>上传图片：
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
