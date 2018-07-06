import React, { Component } from 'react';
import Header from './component/Header';
import pageStyle from '../page2.scss';
import './IntelligentRecord.css';
class IntelligentRecord extends Component {
    constructor (...args) {
        super (...args);
    }
    componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '智能锁';
    }
    render() {
        const aText = [
            { user: "棋啊(APP)", static: "成功", id: "sciener_1170055", time: "2017-11-02 10:54:49" },
            { user: "棋啊(APP)2", static: "成功", id: "sciener_1170056", time: "2017-11-02 10:54:49" },
            { user: "棋啊(APP)3", static: "成功", id: "sciener_1170057", time: "2017-11-02 10:54:49" },
            { user: "棋啊(APP)4", static: "成功", id: "sciener_1170058", time: "2017-11-02 10:54:49" },
            { user: "棋啊(APP)5", static: "成功", id: "sciener_1170059", time: "2017-11-02 10:54:49" },
            { user: "棋啊(APP)6", static: "成功", id: "sciener_1170060", time: "2017-11-02 10:54:49" },
            { user: "棋啊(APP)7", static: "成功", id: "sciener_1170061", time: "2017-11-02 10:54:49" },
            { user: "棋啊(APP)8", static: "成功", id: "sciener_1170062", time: "2017-11-02 10:54:49" },
            { user: "棋啊(APP)9", static: "成功", id: "sciener_1170063", time: "2017-11-02 10:54:49" },
            { user: "棋啊(APP)10", static: "成功", id: "sciener_1170064", time: "2017-11-02 10:54:49" },
            { user: "棋啊(APP)11", static: "成功", id: "sciener_1170065", time: "2017-11-02 10:54:49" },
            { user: "棋啊(APP)12", static: "成功", id: "sciener_1170066", time: "2017-11-02 10:54:49" },
            { user: "棋啊(APP)13", static: "成功", id: "sciener_1170067", time: "2017-11-02 10:54:49" },
            { user: "棋啊(APP)14", static: "成功", id: "sciener_1170068", time: "2017-11-02 10:54:49" },
            { user: "棋啊(APP)15", static: "成功", id: "sciener_1170069", time: "2017-11-02 10:54:49" },
            { user: "棋啊(APP)16", static: "成功", id: "sciener_1170070", time: "2017-11-02 10:54:49" },
            { user: "棋啊(APP)17", static: "成功", id: "sciener_1170071", time: "2017-11-02 10:54:49" },
            { user: "棋啊(APP)18", static: "成功", id: "sciener_1170072", time: "2017-11-02 10:54:49" }
        ];
        let listCom = (
            aText.map( item => {
                return (
                    <div className="item" key={item.id}>
                        <p className="text1">{item.user}<span>{item.static}</span></p>
                        <p className="text2">{item.id}<span>{item.time}</span></p>
                    </div>
                )
            })
        );
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div className={"box"} id="intelligentrerecord">
                        <Header title="开锁记录" />
                        {listCom}
                    </div>
                </React.Fragment>
            </div>
        )
    }
}
export default IntelligentRecord
