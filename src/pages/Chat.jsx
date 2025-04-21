import React from 'react'
import Chatwindow from '../components/Chatwindow'
import generalchatpage from '../components/Generalchatpage'


const Chat = () => {
  return (

    <>
     <div className='bg-gray-900  font-bold text-2xl text-white'>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-2xl text-black">
           <Chatwindow/>
           <generalchatpage/>
         </div>


     </div>
      
    </>
  )
}

export default Chat
