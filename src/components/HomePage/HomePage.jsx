import React, {useState} from 'react'
import styles from './homePage.module.css'
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    let navigate = useNavigate();
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/${input}`);
    }


  return (
    <div className={styles.container}>
        <h1>The Internet Clipboard</h1>
        <div className={styles.imageContainer}>
            <img src="https://vitap.ac.in/wp-content/uploads/2020/07/AB2.jpg" alt="Vitap image" />
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
            <h3>localhost:3000/</h3>
            <input type="text" placeholder="type..." onChange={(e) => setInput(e.target.value)}  />
            <button>Go</button>
        </form>
    </div>
  )
}

export default HomePage