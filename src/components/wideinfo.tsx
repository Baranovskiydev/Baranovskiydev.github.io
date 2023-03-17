import React from 'react'
import styles from './components.module.css'
import { useAppSelector } from '../hooks/redux'



function Wideinfo() {
    const {fullname, age, diagnoses} = useAppSelector(state => state.AddInfoReducer)


  return (
    <div className={styles.wide}>
        <header>Информация о пациенте</header>
        <p>ФИО:     <input disabled id="1" value={fullname}></input></p>
        <p>Возраст: <input disabled id="2" value={age}></input></p>
        <p>Диагноз: <input disabled id="3" value={diagnoses}></input></p>
    </div>
  )
}

export default Wideinfo