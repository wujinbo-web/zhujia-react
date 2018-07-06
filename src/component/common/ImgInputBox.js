import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './imgInputBox.scss';

class ImgInputBox extends Component {

    static propTypes={
        title: PropTypes.string,
        plac: PropTypes.string,
        img: PropTypes.string
    }
    state = { 
        value: ''
    };
    changeEvent (e) {
        this.setState({
            value: e.target.value
        });
    }
    render() {
        return (
            <div className={style['item']}>
                <img src={this.props.img}/><span>{this.props.title}</span><input type="text" placeholder={this.props.plac}/>
            </div>
        );  
    }
}
export default ImgInputBox;