import React, { Component } from 'react';
import pageStyle from '../page2.scss';
import Search from '../../component/common/Search';
import Header from './component/Header';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ServiceList.css';
class ServiceList extends Component {
    constructor(...args) {
        super(...args);
    }
    componentDidMount() {
        document.title = '联盟店-维修';
    }
    static propTypes={
        history: PropTypes.object
    }
    fnService = () => {
        this.props.history.push('/servicewrite');
    }
    render() {
        let aText = [
            { "address": "杭州万新大厦的", "content": "[热水器维修]哦哦哦", "date": "2018-5-24", "price": "230" },
            { "address": "杭州万新大厦的2", "content": "[热水器维修]哦哦哦2", "date": "2018-5-25", "price": "250" },
            { "address": "杭州万新大厦的3", "content": "[热水器维修]哦哦哦3", "date": "2018-5-26", "price": "280" }
        ];
        return (
            <div className={pageStyle['page']} id="serviceList">
                <React.Fragment>
                    <div className={'box'}>
                        <Header title="维修"/>
                        <div className={'menu'}>
                            <div className={'wrap'}>
                                <span></span>
                                <div className={'form'}>
                                    <Search title="请输入要查询的内容"/>
                                </div>
                                <input type="button" value="报修" className={'btn'} onClick={this.fnService} />
                            </div>
                        </div>
                        <div className={'box_list'}>
                            {
                                aText.map((text, index) => {
                                    return (
                                        <div key={index} className={'list_item'}>
                                            <ul className={'left'}>
                                                <li className={'item1'}>报修地址：{text.address}</li>
                                                <li className={'item2'}>报修内容：{text.content}</li>
                                                <li className={'item3'}>报修时间：{text.date}</li>
                                            </ul>
                                            <div className={'right'}>{text.price}元</div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
export default ServiceList;
