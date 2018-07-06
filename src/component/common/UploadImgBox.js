import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './uploadImgBox.scss';

class UploadImgBox extends Component {

    static propTypes={
        title: PropTypes.string,
        img: PropTypes.string
    }
    
    render() {    
        return (
            <div className={style['item']}>
                <div><img src={this.props.img}/><span>{this.props.title}</span></div>
                <div className={style['img_box']}>
                    <div className={style['image_div']}><img src="/static/landlord/shangchuantupianD.png"/></div>
                </div>
            </div>
        );  
    }
}
export default UploadImgBox;