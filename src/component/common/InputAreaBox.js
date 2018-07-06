import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './inputAreaBox.scss';

class InputAreaBox extends Component {

    static propTypes={
        title: PropTypes.string,
        plac: PropTypes.string
    }
    changeEvent (e) {
        this.setState({
            value: e.target.value
        });
    }
    render() {    
        return (
            <div className={style['info_item']}>
                <div className={style['in_title']}><span>{this.props.title}</span></div>
                <div className={style['in_body']}><textarea placeholder={this.props.plac}  onChange={(e) => this.changeEvent(e)}/></div>
            </div>
        );  
    }
}
export default InputAreaBox;