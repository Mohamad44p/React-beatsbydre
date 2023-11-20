import React, { useState, useEffect } from "react"; 
import email_icon from '../Assets/email.png';
import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';
import { useNavigate } from "react-router-dom";
import styles from './LoginSingup.module.css';

const LoginSingup = () => {
  const [title, setTitle] = useState('Sign Up');
  const [changes, setChanges] = useState('Sign Up');
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
    try {
      const response = await fetch('http://localhost:8000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      if (response.ok) {
        navigate('/home'); 
      } else {
        console.error('Sign-up failed');
      }
    } catch (error) {
      console.error('There was a problem with the sign-up process:', error);
    }
  }

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/users');
      const users = await response.json();
      const user = users.find(u => u.email === email && u.password === password);
  
      if (user) {
        navigate('/home');
      } else {
        console.error('Invalid login credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>{title}</div>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.inputs}>
        {changes === 'Login' ? null :
          <div className={styles.input}>
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
          </div>
        }
        <div className={styles.input}>
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id" required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.input}>
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className={styles['forget-password']}>
        Forgot Password? <span>Click here!</span>
      </div>
      <div className={styles['submit-container']}>
        {changes === 'Login' ? 
          <button className={styles.submit} onClick={handleLogin}>Login</button> :
          <button className={styles.submit} onClick={handleSignup}>Sign Up</button>
        }
        <button className={`${styles.submit} ${styles.gray}`} onClick={() => { 
          setTitle(changes === 'Login' ? 'Sign Up' : 'Login'); 
          setChanges(changes === 'Login' ? 'Sign Up' : 'Login'); 
        }}>
          {changes === 'Login' ? 'Switch to Sign Up' : 'Switch to Login'}
        </button>
      </div>
    </div>
  );
}

export default LoginSingup;

