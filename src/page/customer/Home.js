import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { userLogin } from '../../constants/ApiTypes';
import style from './home.scss';
import pageStyle from '../page.scss';
import ApiHelper from "../../store/ApiHelper";
import { Carousel, Toast } from 'antd-mobile';

class Home extends Component {
    static propTypes = {
        history: PropTypes.object
    }

    async componentDidMount() {
        document.title = window.SITE_NAME + ' - ' + '首页';
        const data = {
            wx_openid: "888888"
        }
        Toast.loading();
        console.log("loading");
        const result = await ApiHelper.requestGet(userLogin, data);
        console.log(result);
        Toast.hide();
        if (result.status) {
            console.log("success");
            this.props.history.push("/agentHome");
        } else {
            Toast.fail(result.msg, 1);
        }
        
    }

    render() {
        return (
            <div className={pageStyle['page']}>
                <React.Fragment>
                    
                </React.Fragment>
            </div>
        );
    }
}

export default Home;