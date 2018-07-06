import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './downloadApp.scss';
import pageStyle from '../page.scss';
class DownloadApp extends Component {

    async componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + 'APP下载';
        
    }

    render() {
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    <div  className={style['background']}>
                        <a href="http://android.myapp.com/myapp/detail.htm?apkName=com.itboye.ihomebank&ADTAG=mobile"><div className={style['button']}>
                            <span>下载住家APP</span> 
                        </div></a>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}
export default DownloadApp;