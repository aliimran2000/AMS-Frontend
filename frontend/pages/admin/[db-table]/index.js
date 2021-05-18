import React, { useState } from 'react';
import styles from '../../../styles/Home.module.css'
import { useRouter } from 'next/router'
import {parseCookies} from '../../../Utils/CParse'


function DBComponenent({data}) {

   
    const router = useRouter()



    return (
        <div className={styles.container}>
            <div className={styles.card}>
                {router.asPath.split("/")[2]}
            </div>
            <div style={{width: 100 }}>
                {data ? JSON.stringify(data) : "datanot found yet"}
            </div>
        </div>
    )
}

export async function getServerSideProps({ req,res }){
    const data = parseCookies(req)
  
    if (res) {
        if (Object.keys(data).length === 0 && data.constructor === Object) {
        
            res.writeHead(301, { Location: "/Login" })
            res.end()
        }
    
    }
    

    return {
        props: { data } 
    }
  }




export default DBComponenent