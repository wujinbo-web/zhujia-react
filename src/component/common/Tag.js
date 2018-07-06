import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './tag.scss';
class Tag extends Component {
    static propTypes={
        datas: PropTypes.array
    }

    getItemTag = (data, i) => {
        return <div className={style['tag']} key={i}><span>{ data }</span></div>
    }

    render() {
        return (
            <div>
                { this.props.datas.map(this.getItemTag) }
            </div>
        )
    }
}
export default Tag;