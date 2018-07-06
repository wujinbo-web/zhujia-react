import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './hiddenInputBox.scss';

class HiddenInputBox extends Component {

    static propTypes={
        title: PropTypes.string,
        submitEvent: PropTypes.func
    }

    componentDidMount() {
        this.hiddenBox.style = "visibility: " + this.state.visibility;
    }

    state = { 
        value: '',
        visibility: 'hidden'
    };
    changeEvent (e) {
        this.setState({
            value: e.target.value
        });
    }

    submitEvent = () => {
        this.props.submitEvent();
    }
    
    render() {
        return (
            <div className={style['hidden_box']} ref={(ref) => this.hiddenBox = ref}>
                <div className={style['hidden_title']}><span>{this.props.title}</span></div>
                <div className={style['hidden_input']}><span>收入:</span><input type="text" onChange={(e) => this.changeEvent(e)}/></div>
                <div className={style['hidden_button']}><div onTouchStart={this.submitEvent}><span>提交申请</span></div></div>
            </div>
        );  
    }
}
export default HiddenInputBox;