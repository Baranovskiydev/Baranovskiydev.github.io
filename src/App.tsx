import React from 'react';
import { useAppDispatch } from './hooks/redux';
import Patientpresent from './components/Patientpresent';
import styles from './app.module.css'

function App() {

  const dispatch = useAppDispatch();
  return (
    <div className={styles.app}>
      <Patientpresent/>
    </div>
  );
}

export default App;