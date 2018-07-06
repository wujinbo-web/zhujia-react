import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './oneItemView.scss';
import ListBox from './ListBox'

class OneItemView extends Component {

    static propTypes={
        res: PropTypes.array,
        returnEvent: PropTypes.func
    }
    state = { 
        value: ''
    };

    changeValue = (e) => {
        this.setState({
            value: this.props.res[e]
        });
        this.returnEvent(this.props.res[e]);
    }

    returnEvent = (e) => {
        this.props.returnEvent(e);
    }

    render() {
        return (
            <div className={style['item_box']}>  
                <ListBox datas={ this.props.res } changeEvent={ this.changeValue }/>
            </div>
        );  
    }
}

export default OneItemView;