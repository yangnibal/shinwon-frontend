import React, { useState, useEffect } from 'react'
import Layout from '../Layout'
import InputForm from '../../components/InputForm'
import styles from '../../css/Introduction.module.scss'
import IntroductionSidebar from './components/IntroductionSidebar'
import LaboratoryProcess from './components/LaboratoryProcess'
import SampleHandling from './components/SampleHandling'
import LaboratoryType from './components/LaboratoryType'
import LaboratoryProfile from './components/LaboratoryProfile'
import PrenatalManagement from './components/PrenatalManagement'
import CheckResult from './components/CheckResult'
import Disease from './components/Disease'

function Introduction(props){

    const [ num, setNum ] = useState(1)

    useEffect(() => {
        setNum(parseInt(props.match.params.num))
    }, [props.match])

    return(
        <Layout>
            <InputForm/>
            <div className={styles.body}>
                <img src="/imgs/img/test-guidance.png" alt="" className={styles.body_top_bg}/>
                <div className={styles.body_contents}>
                    <IntroductionSidebar selectedNum={num}/>
                    {num===1 ? <LaboratoryProcess/> :
                    num===2 ? <SampleHandling/> :
                    num===3 ? <LaboratoryType/> : 
                    num===4 ? <LaboratoryProfile/> : 
                    num===5 ? <PrenatalManagement/> : 
                    num===6 ? <Disease/> : 
                    <CheckResult/>}
                </div>
            </div>
        </Layout>
    )
}

export default Introduction