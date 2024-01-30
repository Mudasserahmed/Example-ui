// components/Navbar.js

import React from 'react';
import Search from '../Search/Search'; // Assuming you have a Search component
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
   <div className={styles.navbar}>
     <div className={styles.logo}>
       <img
       width={50}
       height={50}
        src="https://cdn.icon-icons.com/icons2/272/PNG/512/Settings_30027.png" 
       alt=""
        />
     <span className={styles.logoText}>Zintools</span>
     </div>
     <div>
      <Search/>
     </div>
     <div className={styles.loginContainer}>
      <h2 className={styles.loginText}>Login</h2>
      <button className={styles.signUpButton}>Sign Up</button>
     </div>
   </div>
  );
};

export default Navbar;
