import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './agentContract.scss';
import pageStyle from '../page.scss';
import ContractItem from '../../component/common/ContractItem';

class AgentContract extends Component {

    async componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '签约管理';
    }

    getItem = (data, i) => {
        return <ContractItem datas={data} key={i}/>
    }

    render() {
        const res = [
            {
                title: "杭州万新大厦",
                size: "1室/1厅/120㎡",
                price: "1200/月",
                number: "CTR2017101320196",
                img: "/static/test/qianyue.png"
            },
            {
                title: "杭州万新大厦",
                size: "1室/1厅/120㎡",
                price: "1200/月",
                number: "CTR2017101320196",
                img: "/static/test/qianyue.png"
            },
            {
                title: "杭州万新大厦",
                size: "1室/1厅/120㎡",
                price: "1200/月",
                number: "CTR2017101320196",
                img: "/static/test/qianyue.png"
            },
            {
                title: "杭州万新大厦",
                size: "1室/1厅/120㎡",
                price: "1200/月",
                number: "CTR2017101320196",
                img: "/static/test/qianyue.png"
            },
            {
                title: "杭州万新大厦",
                size: "1室/1厅/120㎡",
                price: "1200/月",
                number: "CTR2017101320196",
                img: "/static/test/qianyue.png"
            },
            {
                title: "杭州万新大厦",
                size: "1室/1厅/120㎡",
                price: "1200/月",
                number: "CTR2017101320196",
                img: "/static/test/qianyue.png"
            },
            {
                title: "杭州万新大厦",
                size: "1室/1厅/120㎡",
                price: "1200/月",
                number: "CTR2017101320196",
                img: "/static/test/qianyue.png"
            },
            {
                title: "杭州万新大厦",
                size: "1室/1厅/120㎡",
                price: "1200/月",
                number: "CTR2017101320196",
                img: "/static/test/qianyue.png"
            },
            {
                title: "杭州万新大厦",
                size: "1室/1厅/120㎡",
                price: "1200/月",
                number: "CTR2017101320196",
                img: "/static/test/qianyue.png"
            }
        ];
        
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div className={style['item_box']}>
                        { res.map(this.getItem) }
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
export default AgentContract;