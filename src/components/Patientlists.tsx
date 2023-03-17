import React, { SyntheticEvent, useState } from 'react'
import styles from "./components.module.css"
import Patientpresent from './Patientpresent'
import { presentUserAPI } from '../API/UserPresent'
import { useAppSelector } from '../hooks/redux'
import { IsUnknown } from '@reduxjs/toolkit/dist/tsHelpers'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Patientsquit from './Patientsquit'
import { SyntheticEventData } from 'react-dom/test-utils'

function Patientlists() {
    const {data: patients} = presentUserAPI.useFetchAllQuitUsersQuery(0);
    const {users} = useAppSelector(state => state.QuitUserReducer);
    const navigate = useNavigate();
    const [checked, setChecked] = useState(true);
    const [Checkedquit, setCheckedquit] = useState(false)
    const toQuited = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(false);
        setCheckedquit(true);
        navigate("/quited");
    }
    const toPresent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedquit(false);
        setChecked(true);
        navigate("*");
    }

  return (
    <div className={styles.list}>
            <form>
                <input onChange={toPresent} className={styles.tabs} type="radio" name="list" id="present" value="presentu" checked={checked}/>
                <label htmlFor="present">ПРИСУТСТВУЮТ({patients?.length})</label>
                <input onChange={toQuited} className={styles.tabs} type="radio" name="list" id="quit" value="quitu" checked={Checkedquit}/>
                <label htmlFor="quit">ВЫБЫВШИЕ({users?.length})</label>
            </form>
            <Routes>
                <Route path='*' element= {<Patientpresent/>}/>
                <Route path='/quited' element={<Patientsquit/>}/>
            </Routes>

    </div>
  )
}

export default Patientlists