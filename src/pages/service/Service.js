import React, { useState, useEffect } from 'react'
import Layout from '../Layout'
import InputForm from '../../components/InputForm'
import styles from '../../css/Service.module.scss'
import ServiceSidebar from './components/ServiceSidebar'
import Official from './components/Official'
import BloodCollection from './components/BloodCollection'
import DataRoom from './components/DataRoom'
import Recruitment from './components/Recruitment'
import Contact from './components/Contact'
import FAQ from './components/FAQ'

function Service(props){

    const [ num, setNum ] = useState(1)

    useEffect(() => {
        setNum(parseInt(props.match.params.num))
    }, [props.match])

    return(
        <Layout>
            <div className={styles.body}>
                <div className={styles.body_top_bg_wrapper}>
                    <img src={require("./components/css/service.png")} alt="" className={styles.body_top_bg}/>
                </div>
                <div className={styles.body_contents}>
                    <ServiceSidebar selectedNum={num}/>
                    {num===1 ? <Official props={props.location}/> : 
                    num===2 ? <DataRoom/> : 
                    num===3 ? <BloodCollection/> :
                    num===4 ? <FAQ/> :
                    num===5 ? <Contact/> :
                    num===6 ? <Recruitment/> :
                    <Official/>}
                </div>
            </div>
            <InputForm/>
        </Layout>
    )
}

export default Service