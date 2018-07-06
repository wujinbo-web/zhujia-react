import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './oneTagView.scss';
import TagBox from './TagBox'

class OneTagView extends Component {

    static propTypes={
        res: PropTypes.array,
        returnEvent: PropTypes.func
    }
    state = { 
        value: ''
    };

    tagViews = [];

    changeValue = () => {
        let tagStr = "";
        for (let i = 0; i < this.tagViews.length; i++) {
            tagStr += this.tagViews[i].state.value + ",";
        }
        if (tagStr.length > 0) tagStr = tagStr.substr(0, tagStr.length - 1);
        this.setState({
            value: tagStr
        });
        this.returnEvent(tagStr);
    }

    returnEvent = (e, flag) => {
        this.props.returnEvent(e, flag);
    }

    getListItem = (data, i) => {
        return <TagBox datas={ this.props.res[i] } key={i} ref={(ref) => this.tagViews[i] = ref}/>
    }

    render() {
        return (
            <div>
                <div className={style['tag_box']}>  
                    {this.props.res.map(this.getListItem)}
                </div>
                <div className={style['in_line']}/>
                <div className={style['button']} onTouchStart={ this.changeValue }><span>确定</span></div>
            </div>
        );  
    }
}

export default OneTagView;