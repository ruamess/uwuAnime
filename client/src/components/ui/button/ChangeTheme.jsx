import React, { useState } from 'react';
import styles from '../styles/Wrapper.module.css';
import { BsSun } from "react-icons/bs";
import { MdOutlineNightlightRound } from "react-icons/md";

function ChangeTheme() {
  const [isSun, setIsSun] = useState(true);

  const toggleTheme = () => {
    setIsSun(!isSun);
  };

  return (
    <div onClick={toggleTheme} className={styles.change__theme}>
      {isSun ? <BsSun /> : <MdOutlineNightlightRound />}
    </div>
  );
}

export default ChangeTheme;
