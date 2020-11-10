import React from 'react'
import styles from './css/MainForm.module.scss'
import classNames from 'classnames'

const MainForm = () => {
    return(
        <div className={styles.body_forms}>
            <div className={classNames(styles.forms, styles.login)}>
                <div className={styles.forms_sticky}>
                    <div className={styles.forms_title}>검사결과조회</div>
                    <div className={styles.input_wrapper}>
                        <a href="http://61.252.130.67:200/" target="blank" className={styles.input_btn}>SEARCH</a>
                    </div>
                </div>
            </div>
            <div className={classNames(styles.forms, styles.search)}>
                <div className={styles.forms_sticky}>
                    <div className={styles.forms_title}>검사항목조회</div>
                    <div className={styles.input_wrapper}>
                        <div className={styles.input_sticky}>
                            <input type="text" className={styles.input} placeholder="검사명"/>
                        </div>
                        <div className={styles.input_btn}>SEARCH</div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom_buttons_wrapper}>
                <a href="https://blog.naver.com/junchae42" target="blank" className={styles.bottom_button}>
                    <img className={styles.button_left_icon} alt="" src="../imgs/img/blog.svg"/>
                    <div className={styles.button_text}>블로그</div>
                    <img src="/imgs/icons/icon-right.svg" alt="" className={styles.icon} />
                </a>
                <a href="https://mail.shinwon.org/" target="blank" className={styles.bottom_button}>
                    <img className={styles.button_left_icon} alt="" src="../imgs/img/intranet.png"/>
                    <div className={styles.button_text}>인트라넷</div>
                    <img src="/imgs/icons/icon-right.svg" alt="" className={styles.icon} />
                </a>
            </div>
        </div>
    )
}

export default MainForm