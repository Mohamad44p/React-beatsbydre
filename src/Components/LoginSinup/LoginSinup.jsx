import React, { useState, useEffect } from "react"; 
import email_icon from '../Assets/email.png';
import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';
import { useNavigate } from "react-router-dom";
import styles from './LoginSingup.module.css';

const LoginSingup = () => {
  const [mode, setMode] = useState('Sign Up'); // Renamed for clarity
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.background = 'linear-gradient(var(--main-color), var(--secondary-color))';
    return () => {
      document.body.style.background = '';
    };
  }, []);

  const handleSignup = async () => {
    if (email === 'user1@example.com' && password === 'Password1' && name === 'User1') {
      navigate('/home'); 
    } else {
      console.error('Sign-up failed');
    }

  }

  const handleLogin = async () => {
    if (email === 'user1@example.com' && password === 'Password1') {
      navigate('/home');
    } else {
      console.error('Invalid login credentials');
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>{mode}</div>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.inputs}>
        {mode === 'Login' ? null :
          <div className={styles.input}>
            <img src={user_icon} alt="User Icon" />
            <input type="text" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
          </div>
        }
        <div className={styles.input}>
          <img src={email_icon} alt="Email Icon" />
          <input type="email" placeholder="Email Id" required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.input}>
          <img src={password_icon} alt="Password Icon" />
          <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className={styles['forget-password']}>
        Forgot Password? <span>Click here!</span>
      </div>
      <div className={styles['submit-container']}>
        {mode === 'Login' ? 
          <button className={styles.submit} onClick={handleLogin}>Login</button> :
          <button className={styles.submit} onClick={handleSignup}>Sign Up</button>
        }
        <button className={`${styles.submit} ${styles.gray}`} onClick={() => { 
          setMode(mode === 'Login' ? 'Sign Up' : 'Login'); 
        }}>
          {mode === 'Login' ? 'Switch to Sign Up' : 'Switch to Login'}
        </button>
      </div>
    </div>
  );
} // This closing brace was missing

export default LoginSingup;
