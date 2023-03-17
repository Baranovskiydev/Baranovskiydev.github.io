import React from 'react'
import styles from './components.module.css'

interface wideinfoprops{
    fullname: string;
    age: number;
    diagnoses: string;
}

function Wideinfo(info: wideinfoprops) {
  return (
    <div>
        <p>ФИО <span>{info.fullname}</span></p>
        <p>Возраст <span>{info.age}</span></p>
        <p>Диагноз <span>{info.diagnoses}</span></p>
    </div>
  )
}

export default Wideinfo