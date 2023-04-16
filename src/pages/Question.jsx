import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { questions} from '../consts/questions';

function Question() {
    const {id}=useParams()
    let question=questions[Number(id)-1]
    const [yourAns, setYourAns]=useState(null)
    const [color, setColor]=useState("")
    const checkAnswer=(value)=>{
        if(value===null){
            alert('Выберите ответ')
            return
        } 
        if(Number(value)===question.right){
            setColor("lime")
            questions[id-1].checked=true
        }
        else{
            setColor("red")
        }
    }
    return (
        <>
        <Link to={"/"} className='text-[20px]'>Назад</Link> 
        <div className='w-full h-screen flex items-center justify-center'>
            <img src={question.image} className="h-[500px] mr-[40px]"/>
            <div className='w-[600px]'>
                <h2 className='text-[26px] mb-[20px] '>Вопрос на {question.weight} очков</h2>
                <h1 className='text-[40px] mb-[40px]'>{question.text}</h1>
                <div className='text-[26px]'>
                <form>
                {
                    question.variants.map((item,index)=>
                        <div className='w-[400px] rounded-[10px] flex mb-[10px]' style={Number(yourAns)===index?{background:color,}:{}}>
                        <input className='cursor-pointer' type="radio" name={question.id} value={index} id={index}
                            onChange={(e)=>setYourAns(e.target.value)}
                            onClick={()=>setColor("gray")}
                        />
                        <div className='ml-[10px]'>{item}</div>
                        </div>
                    )
                }
                <button className='mt-[20px] px-[40px] py-[10px] bg-teal-400 hover:bg-teal-500'
                onClick={(e)=>{
                    e.preventDefault()
                    checkAnswer(yourAns)
                }}
                >Ответить</button>
                </form>
                </div>
            </div>
            
        </div>
        </>
     );
}

export default Question;