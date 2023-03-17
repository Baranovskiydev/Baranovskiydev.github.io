import React from 'react'
import { presentUserAPI } from '../API/UserPresent'
import Patientline from './Patientline'
import styles from "./components.module.css"
import {AddInfoSlice} from '../store/reducers/AddInfoSlice'
import { useAppDispatch } from '../hooks/redux'

function Patientpresent() {
  const {data: patients, error, isLoading } = presentUserAPI.useFetchAllQuitUsersQuery(0)



  const dispatch = useAppDispatch();
  const {changeAddInfo} = AddInfoSlice.actions;

  function showMore(name:string, surname:string, patrname: string, age:string, diabolic: string){
    let fullname = surname + ' ' + name + ' ' + patrname;
    let birdate = (new Date().getFullYear() - new Date(age).getFullYear()).toString()
    dispatch(changeAddInfo({
      fullname: fullname,
      age: birdate,
      diagnoses: diabolic}))
  }



  return (
    <div >
      <header className={styles.head} >
        <div>№ ИБ</div>
        <div>ФИО</div>
        <div>Палата</div>
      </header>
      <div className={styles.slider}>
      {patients && patients.map(post => 
        <Patientline
          handleronclick={() => showMore(post.firstName,post.lastName,post.patrName,post.birthDate,post.diagnosis)}
          key = {post.historyNumber}
          id={post.historyNumber}
          fullname={post.firstName + ' ' + post.lastName + " " + post.patrName}
          room = {post.bedNumber}
        />
        )}
      </div>
    </div>
  )
}

export default Patientpresent
