import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './button.scss';
class Button extends Component {
    static propTypes={
        text: PropTypes.string,
        buttonDownEvent: PropTypes.func,
        color: PropTypes.string
    }

    async componentDidMount() {
        if (this.props.color) this.button.style = "background-color: " + this.props.color;
    }

    buttonDownEvent = (e) => {
        this.props.buttonDownEvent(e);
    }

    render() {
        return (
            <div className={style['button']} onTouchStart={this.buttonDownEvent} ref={(ref) => this.button = ref}><span>{ this.props.text }</span></div>
        )
    }
}
export default Button;