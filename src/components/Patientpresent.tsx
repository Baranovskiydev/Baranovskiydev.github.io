import React from 'react'
import { presentUserAPI } from '../API/UserPresent'
import Patientline from './Patientline'
import styles from "./components.module.css"

function Patientpresent() {
  const {data: patients, error, isLoading } = presentUserAPI.useFetchAllQuitUsersQuery(0)
  
  return (
    <div >
      <header className={styles.head} >
        <div>№ ИБ</div>
        <div>ФИО</div>
        <div>Палата</div>
      </header>
      {patients && patients.map(post => 
        <Patientline
          key = {post.historyNumber}
          id={post.historyNumber}
          fullname={post.firstName + ' ' + post.lastName + " " + post.patrName}
          room = {post.bedNumber}
        />
        )}
    </div>
  )
}

export default Patientpresent
