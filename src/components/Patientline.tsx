import React from 'react'
import styles from './components.module.css'

interface lineprops{
    id: number;
    fullname: string;
    room?: number;
    cause?: string;
}

function Patientline(info: lineprops) {
  return (
    <div className={styles.line}>
        <div>{info.id}</div>
        <div>{info.fullname}</div>
        <div>{info.cause} {info.room}</div>
    </div>
  )
}

export default Patientline