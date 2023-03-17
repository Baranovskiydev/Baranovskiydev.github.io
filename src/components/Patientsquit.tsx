import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import styles from './components.module.css'
import Patientline from './Patientline';
import {AddInfoSlice} from '../store/reducers/AddInfoSlice';

function Patientsquit() {
    const {users} = useAppSelector(state => state.QuitUserReducer)


    const dispatch = useAppDispatch();
    const {changeAddInfo} = AddInfoSlice.actions;
  
    function showMore(name:string, surname:string, patrname: string, age:string, diabolic: string){
      console.log("ЖОПА")
      let fullname = surname + ' ' + name + ' ' + patrname;
      let birdate = (new Date().getFullYear() - new Date(age).getFullYear()).toString()
      dispatch(changeAddInfo({
        fullname: fullname,
        age: birdate,
        diagnoses: diabolic}))
    }





  return (
    <div>
        <header className={styles.head} >
        <div>№ ИБ</div>
        <div>ФИО</div>
        <div>Причина Выбытия</div>
      </header>
      <div className={styles.slider}>
      {users && users.map(user => 
            <Patientline
              handleronclick={() => showMore(user.firstName,user.lastName,user.patrName,user.birthDate,user.diagnosis)}
                key = {user.historyNumber}
                id={user.historyNumber}
                fullname={user.firstName + ' ' + user.lastName + " " + user.patrName}
                cause={user.cause}
            />
            )}
        </div>
    </div>
  )
}

export default Patientsquit