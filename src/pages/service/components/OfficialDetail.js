import React, { useEffect, useState } from 'react'
import styles from './css/OfficialDetail.module.css'
import SectionTitle from '../../../components/SectionTitle'
import axios from 'axios'
import Layout from '../../Layout'
import { Link } from 'react-router-dom'
import download from 'downloadjs'

function OfficialDetail(props){

    const [ data, setData ] = useState({})

    useEffect(() => {
        axios.get(`https://api.shinwon.org/board/${props.match.params.officialid}/`)
        .then(res => {
            res.data.contents = res.data.contents.replace(/\/UploadFiles/gi, "https://api.shinwon.org/media")
            res.data.contents = res.data.contents.replace(/http:\/\/13.125.200.188:8080/gi, "https://api.shinwon.org")
            if(res.data.fileurl!==null) res.data.filename = decodeURIComponent(res.data.fileurl.split("/").slice(-1)[0]) 
            if(res.data.fileurl2!==null) res.data.filename2 = decodeURIComponent(res.data.fileurl2.split("/").slice(-1)[0])
            if(res.data.fileurl3!==null) res.data.filename3 = decodeURIComponent(res.data.fileurl2.split("/").slice(-1)[0])
            setData(res.data)
            console.log(res.data)

        })
        .catch(err => {
            console.log(err)
        })
    }, [props.match.params.officialid])

    const downloadFile = (file) => {
        download(file)
    }

    return(
        <Layout>
            <div className={styles.body}>
                <div className={styles.body_top_bg_wrapper}>
                    <img src="../../imgs/img/foundation.png" alt="" className={styles.body_top_bg}/>
                </div>
                
                <div className={styles.body_contents}>
                    <>
                    <div className={styles.sidebar}>
                        <div className={styles.side_box_shadow}>
                            <div className={styles.sidebar_title}>
                                <img src="../../imgs/img/foundation-sidebar.png" alt="" className={styles.sidebar_title_img}/>
                                <div className={styles.sidebar_title_text}>고객서비스</div>
                            </div>
                            <Link to="/service/1" className={styles.sidebar_selected}>공문</Link>
                            <Link to="/service/2" className={styles.sidebar_content}>자료실</Link>
                            <Link to="/service/3" className={styles.sidebar_content}>감염지침</Link>
                            <Link to="/service/4" className={styles.sidebar_content}>FAQ</Link>
                            <Link to="/service/5" className={styles.sidebar_content}>오시는길</Link>
                            <Link to="/service/6" className={styles.sidebar_content}>채용공고</Link>
                        </div>
                    </div>
                    </>
                    <div className={styles.container}>
                        <div className={styles.section}>
                            <SectionTitle kor="공문" eng="Official"/>
                            <div className={styles.detail_title_wrapper}>
                                <div className={styles.detail_title}>{data.title}</div>
                                <div className={styles.detail_date_wrapper}>
                                    <div className={styles.detail_date_text}>작성일</div>
                                    <div className={styles.detail_date}>{data.regdate}</div>
                                </div>
                            </div>
                            <div className={styles.detail_contents_wrapper}>
                                <div dangerouslySetInnerHTML={{__html:data.contents}}/>
                            </div>
                            
                            {data.fileurl!=="" && data.fileurl!==null ?
                            <div className={styles.file_download_wrapper}>
                                <div className={styles.file_title_wrapper}>
                                    <div className={styles.file_title}>첨부파일</div>
                                    {data.filename}
                                </div>
                                <a onClick={() => downloadFile(data.fileurl)} className={styles.file_download_button}>다운로드</a>
                            </div>
                            : null}
                            {data.fileurl2!=="" && data.fileurl2!==null ?
                            <div className={styles.file_download_wrapper}>
                                <div className={styles.file_title_wrapper}>
                                    <div className={styles.file_title}>첨부파일</div>
                                    {data.filename2}
                                </div>
                                <a onClick={() => downloadFile(data.fileurl2)} className={styles.file_download_button}>다운로드</a>
                            </div>
                            : null}
                            {data.fileurl3!=="" && data.fileurl3!==null ?
                            <div className={styles.file_download_wrapper}>
                                <div className={styles.file_title_wrapper}>
                                    <div className={styles.file_title}>첨부파일</div>
                                    {data.filename3}
                                </div>
                                <a onClick={() => downloadFile(data.fileurl3)} className={styles.file_download_button}>다운로드</a>
                            </div>
                            : null}
                            <div className={styles.list_btn_wrapper}>
                                <Link to="/service/1" className={styles.list_btn}>목록</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="forms-wrapper">
            <div className="forms login">
                <div className="forms-sticky">
                    <div className="forms-title">검사결과조회</div>
                    <div className="input-wrapper">
                        <a target="blank" href="http://61.252.130.67:200/" className="input-btn">SEARCH</a>
                    </div>
                </div>
            </div>
            <div className="forms search">
                <div className="forms-sticky">
                    <div className="forms-title">검사항목조회</div>
                    <div className="input-wrapper">
                        <input type="text" className="input" placeholder="검사명"/>
                        <div className="input-btn">SEARCH</div>
                    </div>
                </div>
            </div>
            <div className="forms-btn-wrapper">
                <a target="blank" href="https://939.co.kr/swcl/" className="forms-btn forms-btn__gray">
                    <img src="../../imgs/icons/icon-gear.svg" alt="" className="forms-btn-icon"/>
                    <div className="forms-btn-text">원격지원</div>
                </a>
                <Link to="/service/2" className="forms-btn forms-btn__blue">
                    <img src="../../imgs/icons/icon-download.svg" alt="" className="forms-btn-icon"/>
                    <div className="forms-btn-text light">양식다운로드</div>
                </Link>
            </div>
            </div>
        </Layout>
    )
}

export default OfficialDetail