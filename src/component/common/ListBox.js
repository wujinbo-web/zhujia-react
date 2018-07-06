import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './listBox.scss';

class ListBox extends Component {

    static propTypes={
        datas: PropTypes.array,
        changeEvent: PropTypes.func
    }
    state = { 
        value: ''
    };
    items = [];
    moveFlag = false;
    async componentDidMount() {
        this.cancelAll();
    }
    changeEvent (e) {
        if (this.moveFlag) return this.moveFlag = !this.moveFlag;
        console.log(this.props.datas[e])
        this.cancelAll();
        this.items[e].style = "color: red; background-color: #fff";
        this.fatherEvent(e);
    }

    moveEvent (e) {
        this.moveFlag = true;
    }

    fatherEvent = (e) => {
        this.props.changeEvent(e);
    }

    cancelAll() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] !== null)
                this.items[i].style = "color: #333; background-color: inherit";
        }
    }

    getListItem = (data, i) => {
        return <div key={i} onTouchEnd={(e) => this.changeEvent(i)} onTouchMove={(e) => this.moveEvent(i)} ref={(ref) => this.items[i] = ref}><div className={style['item_v']}><span>{ data }</span></div><div className={style['item_line']}/></div>
    }
    render() {
        return (
            <div>
                {this.props.datas.map(this.getListItem)}
            </div>
        );  
    }
}
export default ListBox;