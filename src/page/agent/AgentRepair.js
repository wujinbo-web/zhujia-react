import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './agentRepair.scss';
import ImgInputBox from '../../component/common/ImgInputBox';
import ImgInputAreaBox from '../../component/common/ImgInputAreaBox';
import UploadImgBox from '../../component/common/UploadImgBox';

class IndividualRepair extends Component {

    async componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '住家维修';
    }

    render() {
        console.log("IndividualRepair");
        return (
            <div className={style['page']}>
                <React.Fragment>
                    <div className={style['item_box']}>
                        <ImgInputBox title="报修人:" img="/static/agent/baoxiuren.png" plac="请填写报修人姓名" />
                        <ImgInputBox title="手机号:" img="/static/agent/shoujihao.png" plac="请填写报修人手机号" />
                        <ImgInputBox title="填写地址:" img="/static/agent/tianxiedizhi.png" plac="请填写报修地址" />
                        <ImgInputBox title="选择报修类型:" img="/static/agent/baoxiuleixing.png" plac="请选择维修类型" />
                        <ImgInputAreaBox title="填写详细信息:" img="/static/agent/tianxiexinxi.png" plac="请描述报修内容" />
                        <UploadImgBox title="上传图片:" img="/static/agent/shangchuantupian.png" />
                        <div className={style['item']}>
                            <div className={style['cancel']}><span>取消</span></div>
                            <div className={style['submit']}><span>预约维修</span></div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
export default IndividualRepair;