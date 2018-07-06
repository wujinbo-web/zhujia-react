import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './towItemView.scss';
import ListBox from './ListBox'

class TowItemView extends Component {

    static propTypes={
        res: PropTypes.array,
        returnEvent: PropTypes.func
    }
    state = { 
        value: '',
        item_value: this.props.res[0].value
    };

    changeEvent = (e) => {
        this.setState({
            item_value: this.props.res[e].value,
            value: this.props.res[e].name
        });
        this.childItemBox.componentDidMount();
        this.returnEvent(this.props.res[e].name, true);
    }

    changeValue = (e) => {
        this.setState({
            value: this.state.item_value[e]
        })
        this.returnEvent(this.state.item_value[e]);
    }

    returnEvent = (e, flag) => {
        this.props.returnEvent(e, flag);
    }

    render() {
        const keys = [];
        for (let data of this.props.res) {
            keys.push(data.name);
        }
        return (
            <div className={style['item_box']}>
                <div className={style['key_box']}>
                    <ListBox datas={ keys } changeEvent={ this.changeEvent }/>
                </div>
                <div className={style['value_box']}>
                    <ListBox datas={ this.state.item_value } changeEvent={ this.changeValue } ref={(ref) => this.childItemBox = ref}/>
                </div>
            </div>
        );  
    }
}

export default TowItemView;