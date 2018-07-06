import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './tagBox.scss';

class TagBox extends Component {

    static propTypes={
        datas: PropTypes.object,
        changeEvent: PropTypes.func,
        name: PropTypes.string
    }
    state = { 
        value: '',
        refresh: false
    };
    items = [];
    moveFlag = false;
    async componentDidMount() {
        this.cancelAll();
    }
    changeEvent (e) {
        if (this.moveFlag) return this.moveFlag = !this.moveFlag;
        this.cancelAll();
        this.items[e].style = "border-color: #9ad7fd; color: #9ad7fd;";
        this.setState({
            value: this.props.datas[e]
        });
    }

    moveEvent () {
        this.moveFlag = true;
    }

    fatherEvent = (e) => {
        this.props.changeEvent(e);
    }

    cancelAll() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] !== null) {
                this.items[i].style = "border-color: #999; color: #999;";
            }
        }
    }

    getListItem = (data, i) => {
        return <div key={i} onTouchEnd={(e) => this.changeEvent(i)} onTouchMove={(e) => this.moveEvent()} ref={(ref) => this.items[i] = ref} className={style['tag_v']}><span>{ data }</span></div>
    }
    render() {
        return (
            <div className={style['box']}>
                <div className={style['title']}>{ this.props.datas.name }</div>
                {this.props.datas.value.map(this.getListItem)}
            </div>
        );  
    }
}
export default TagBox;