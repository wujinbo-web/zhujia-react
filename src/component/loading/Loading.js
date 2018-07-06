import React, { Component } from "react";

import style from "./loading.scss";

class Loading extends Component {
    render() {
        return (
            <div className={style["page-loading"]}>
                <div className={style["loading-center"]}>
                    <div className={style["loading-center-absolute"]}>
                        <div className={style["loadings"] + ' ' + style["loading-one"]}></div>
                        <div className={style["loadings"] + ' ' + style["loading-two"]}></div>
                        <div className={style["loadings"] + ' ' + style["loading-three"]}></div>
                        <div className={style["loadings"] + ' ' + style["loading-four"]}></div>
                        <div className={style["loadings"] + ' ' + style["loading-five"]}></div>
                        <div className={style["loadings"] + ' ' + style["loading-six"]}></div>
                        <div className={style["loadings"] + ' ' + style["loading-seven"]}></div>
                        <div className={style["loadings"] + ' ' + style["loading-eight"]}></div>
                        <div className={style["loadings"] + ' ' + style["loading-big"]}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading;