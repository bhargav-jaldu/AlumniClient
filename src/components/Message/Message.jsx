import React, {useState, useEffect, useRef} from 'react'
import styles from './message.module.css'

import axios from 'axios'

const Message = () => {

    let [select, setSelect] = useState()

    const inputEl = useRef(null);

    const [messages, setMessages] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();

        const url = window.location.href;

        if (select !== undefined) { 
            select *= 60
        }


        axios.post('http://localhost:3001/message', {
            url: url,
            message: inputEl.current.value,
            time: select
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })

        select = undefined;
    }

    const displayMsg = () => {
        const url = window.location.href;

        axios.get(`http://localhost:3001/message`, { params:  {
            url: url
        }
    })
        .then(res => {
            setMessages(res.data)
            console.log(messages)
            me();
        })
        .catch(err => {
            console.log(err)
        })
    }

    const me = () => {
        let m = "";
        if (messages.message.length != undefined) {
            for(let i = 0;i < messages.message.length;i++) {
                m += messages.message[i].message
            }
        }
        inputEl.current.value = m;
    }

    window.onload = displayMsg

    useEffect(() => {
        displayMsg()
    }, [])

  return (
    <div className={styles.container}>
        <h1>The Internet Clipboard</h1>
        <h3>Paste in anything you want</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
            <textarea cols="70" rows="10" placeholder="type..." ref={inputEl}></textarea><br />
            <button>Create</button>

            {/* <p>Destory Clipboard After home Many Minutes</p> */}
            {/* <select value={select} onChange={(e) => setSelect(e.target.value)}>
                <option>Dont Remove</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select> */}
        </form>
    </div>
  )
}

export default Message