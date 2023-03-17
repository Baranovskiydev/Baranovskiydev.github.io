import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import styles from './app.module.css'
import { fetchQuitUsers } from './store/reducers/ActionCreators';
import { presentUserAPI } from './API/UserPresent';
import Patientlists from './components/Patientlists';
import Wideinfo from './components/Wideinfo';
import {Router} from 'react-router-dom'

function App() {

  const dispatch = useAppDispatch();
  const {data: patients, error, isLoading } = presentUserAPI.useFetchAllQuitUsersQuery(0)
  useEffect(() => {
    dispatch(fetchQuitUsers())
  }, [])
  
  return (
    <div className={styles.app}>
        <Wideinfo/>
        <Patientlists/>
    </div>
  );
}

export default App;