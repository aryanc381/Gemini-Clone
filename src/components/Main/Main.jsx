import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Main = () => {

    const {onSent, recentPrompt, showResults, loading, resultData, setInput, input} = useContext(Context);


  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">

            {!showResults
            ? 
            <>
                <div className="greet">
                <p><span>Hello,</span></p>
                <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Who is Trapit Bansal and what is his story from the ground up?</p>
                        <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Please explain me the code to train an LLM on google colab Tesla T4</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>How can I reach Aryan, can I directly message him?</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Please help with the leetcode question 989 from the Pandas Top1000 questions</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>
            :<div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className='result-data'>
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<div className="markdown-output">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {resultData}
                        </ReactMarkdown>
                    </div>}
                    
                </div>
             </div>
        }
            

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Ask...'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={()=> onSent()} src={assets.send_icon} alt="" />: null}
                        
                    </div>
                </div>
                <p className='bottom-info'>
                    This is made by Aryan Chauhan
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main
