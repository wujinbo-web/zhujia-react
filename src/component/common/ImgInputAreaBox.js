import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './imgInputAreaBox.scss';

class ImgInputAreaBox extends Component {

    static propTypes={
        title: PropTypes.string,
        plac: PropTypes.string,
        img: PropTypes.string
    }
    changeEvent (e) {
        this.setState({
            value: e.target.value
        });
    }
    render() {    
        return (
            <div className={style['item']}>
                <img src={this.props.img}/><span>{this.props.title}</span><textarea type="text" placeholder={this.props.plac}/>
            </div>
        );  
    }
}
export default ImgInputAreaBox;