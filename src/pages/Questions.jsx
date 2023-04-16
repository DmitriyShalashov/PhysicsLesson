import React, { useEffect, useState } from 'react';
import {questions, quiz} from '../consts/questions';
import { Link } from 'react-router-dom';
import TeamsList from '../components/TeamsList';
import Modal from '../components/Modal';
import { teams } from '../consts/teams';

function Questions() {
    const [showModal, setShowModal]=useState(false)
    useEffect(()=>{
      if(teams.length>0)setShowModal(true)
    },[questions])
    return ( 
        <div className='p-[100px] w-full h-screen flex justify-between'>
          <div>
            {
          quiz.map((item)=>
            <div className='flex justify-between items-center w-[800px] mb-[30px]'>
              <h1 className='text-[30px]'>{item.category}</h1>
              <div className='flex items-center'>
              {
                item.questions.map((i,index)=>
                <Link to={"/PhysicsLesson/"+i}>
                  <div key={i}  style={{background:questions[item.questions[index]-1].checked===true?"lime":""}}
                   className='border-2 border-black p-4 rounded-[10%] mr-[20px] border-2 w-fit text-[20px] hover:bg-gray-200'>
                    {index*10+10}
                  </div>
                </Link>
                )
              }
              <div className='border-2 border-black p-4 rounded-[50%] cursor-pointer mr-[20px] border-2 w-fit text-[20px] bg-yellow-200 hover:bg-yellow-400 '>+40</div>
              </div>
            </div>
          )
        }
        </div>
        <TeamsList setShowModal={setShowModal}/>
        <Modal  showModal={showModal} setShowModal={setShowModal}/>
        </div>
     );
}

export default Questions;