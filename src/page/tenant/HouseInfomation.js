import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './houseInfomation.scss';
import pageStyle from '../page.scss';
import { Carousel, WingBlank } from 'antd-mobile';
import ConfigureBox from '../../component/common/ConfigureBox';
import ConfigureOpenBox from '../../component/common/ConfigureOpenBox';

const res = [
    "static/test/fangyuantupian",
    "static/test/fangyuantupian",
    "static/test/fangyuantupian"
]
const res2 = [
    {
        title: "整租·环东公寓·1室1厅",
        price: "3000/月",
        size: "45㎡·朝东",
        img: "static/test/qitafangyuan.png"
    },
    {
        title: "整租·环东公寓·1室1厅",
        price: "3000/月",
        size: "45㎡·朝东",
        img: "static/test/qitafangyuan.png"
    },
    {
        title: "整租·环东公寓·1室1厅",
        price: "3000/月",
        size: "45㎡·朝东",
        img: "static/test/qitafangyuan.png"
    }
]
const res3 = {
    number: "HN3301001443",
    floor: "6层/8层",
    type: "1室0厅1卫",
    room: "合租-次卧",
    direction: "朝北",
    size: "15㎡",
    characteristic: "地铁附近、电梯、采光好、拎包入住"
}
class HouseInfomation extends Component {
    state = {
        data: res,
        source: res2,
        infomation: res3
    }

    async componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '房源详情';
        this.hiddenview.style = "visibility: hidden";
        this.cover.style = "visibility: hidden";
    }

    nearbySource = (data, i) => {
        return (
            <div key={i} className={style['source_box']}>
                <div className={style['img_box']}><img src={data.img} /></div>
                <div className={style['source_tp']}>
                    <div className={style['source_title']}><span>{ data.title }</span></div>
                    <div className={style['source_price']}><span>{ data.price }</span></div>
                </div>
                <div className={style['source_size']}><span>{ data.size }</span></div>
            </div>
        )
    }

    openBox = (e) => {
        this.hiddenview.style = "visibility: visible";
        this.cover.style = "visibility: visible";
    }

    closeOpenBox = (e) => {
        this.hiddenview.style = "visibility: hidden";
        this.cover.style = "visibility: hidden";
    }

    render() {
        console.log("houseInfomation");
        const arr = ["冰箱", "椅子", "书桌", "衣柜", "热水器", "空调", "沙发"]
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div className={style['content']}>
                        <div className={style['house_main']}>
                            <div className={style['broadcast']}>
                                <Carousel
                                    autoplay={true}
                                    infinite
                                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                    afterChange={index => console.log('slide to', index)}
                                >
                                    {this.state.data.map(val => (
                                        <a
                                            key={val}
                                            href=""
                                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                        >
                                            <img
                                                src={`/${val}.png`}
                                                alt=""
                                                style={{ width: '100%', verticalAlign: 'top' }}
                                                onLoad={() => {
                                                
                                                    window.dispatchEvent(new Event('resize'));
                                                    this.setState({ imgHeight: 'auto' });
                                                }}
                                            />
                                        </a>
                                    ))}
                                </Carousel>
                            </div>
                            <div className={style['house_title_price']}>
                                <span>整租·南北盛德国际·1室1厅</span>
                            </div>
                            <div className={style['tagTitle']}>
                                <div className={style['sign']}></div><span>房源描述</span>
                            </div>
                            <div className={style['des']}><span>干净清爽，拎包入住</span></div>
                        </div>
                        <div className={style['authentication']}>
                            <div>   
                                <div><img src="" /></div>
                                <div><span>经纪人房源</span></div>
                            </div>
                        </div>
                        <div className={style['house_infomation']}>
                            <div className={style['tagTitle']}>
                                <div className={style['sign']}></div><span>房间信息</span>
                            </div>
                            <div className={style['info']}>
                                <div className={style['info_item']}>
                                    <div className={style['info_left']}><span className={style['info_title']}>编 号: </span><span className={style['info_value']}>{ this.state.infomation.number }</span></div>
                                    <div className={style['info_right']}><span className={style['info_title']}>楼 层: </span><span className={style['info_value']}>{ this.state.infomation.floor }</span></div>
                                </div>
                                <div className={style['info_item']}>
                                    <div className={style['info_left']}><span className={style['info_title']}>户 型: </span><span className={style['info_value']}>{ this.state.infomation.type }</span></div>
                                    <div className={style['info_right']}><span className={style['info_title']}>房 间: </span><span className={style['info_value']}>{ this.state.infomation.room }</span></div>
                                </div>
                                <div className={style['info_item']}>
                                    <div className={style['info_left']}><span className={style['info_title']}>朝 向: </span><span className={style['info_value']}>{ this.state.infomation.direction }</span></div>
                                    <div className={style['info_right']}><span className={style['info_title']}>面 积: </span><span className={style['info_value']}>{ this.state.infomation.size }</span></div>
                                </div>
                                <div className={style['info_item']}><span className={style['info_title']}>特 色: </span><span className={style['info_value']}>{ this.state.infomation.characteristic }</span></div>
                            </div>
                        </div>
                        <div className={style['house_configure']}>
                            <div className={style['tagTitle']}>
                                <div className={style['sign']}></div><span>设备配置</span>
                            </div>
                            <div>
                                <ConfigureBox datas={arr} changeEvent={this.openBox}/>
                                <div className={style['open_box']} ref={(ref) => this.hiddenview = ref}><ConfigureOpenBox datas={arr} /></div>
                                <div className={style['cover_box']} ref={(ref) => this.cover = ref} onTouchStart={this.closeOpenBox}/>
                            </div>
                        </div>
                        <div className={style['house_position']}>
                            <div className={style['tagTitle']}>
                                <div className={style['sign']}></div><span>位置信息</span>
                            </div>
                            <div>
                                <img src="/static/test/ditu.png" />
                            </div>
                        </div>
                        <div className={style['price_infomation']}>
                            <div className={style['tagTitle']}>
                                <div className={style['sign']}></div><span>小区价格走势</span>
                            </div>
                            <div>
                                <img src="/static/test/zoushi.png" />
                            </div>
                        </div>
                        <div className={style['nearby_source']}>
                            <div className={style['tagTitle']}>
                                <div className={style['sign']}></div><span>附近房源</span>
                            </div>
                            <div>
                                <Carousel
                                    autoplay={false}
                                    infinite
                                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                    afterChange={index => console.log('slide to', index)}
                                >
                                    {this.state.source.map(this.nearbySource)}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className={style['bottom_bar']}>
                        <div className={style['collection']}>
                            <img src="/static/tenant/icon/off.png" />
                            <div><span>收藏</span></div>
                        </div>
                        <div className={style['landlord']}>
                            <span>房东</span>
                        </div>
                        <div className={style['apply']}>
                            <span>申请签约</span>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
export default HouseInfomation;