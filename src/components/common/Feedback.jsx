import React from 'react'
import db from '../../Model/DBConnection'

export default function Feedback() {
  const [feedback, setFeedback] = React.useState({})
  const [isSend, setIsSend] = React.useState(false)

  const updateDB = () => {
    const result = async () => await db.sql`Use Database ComposeBlog;insert into Feedbacks(name,email,message) values (${feedback.name.trim()},${feedback.email.trim()},${feedback.message.trim()});`
    console.log(result);

    result().then((res) => {
      console.log(res);
      alert("Thank you for your feedback")
      setIsSend(true)
      setFeedback({
        name: "",
        email: "",
        message: ""
      })
    }).catch((err) => {
      console.log(err);
    })

  }
  const onSend = () => {
    if (!feedback.name || !feedback.email || !feedback.message) {
      alert("Please fill all the fields")
      return
    }
    updateDB()
  }
  return (
    <div className='w-full border-t-2 border-gray-400/20 h-full flex  p-2 sm:p-4 justify-center bg-black items-center flex-col' id='feedback'>
      <h1 className='text-2xl md:text-3xl xl:text-3xl 2xl:text-4xl font-bold text-white'>Feedback</h1>
      <p className='w-full sm:w-full md:w-2/3 xl:w-2/3 text-gray-400 text-center mb-2'>Please provide us with your valuable feedback so that we can make improvements.
        We are always happy to hear from you.
        you can also share your ideas with us.
      </p>

      <div className='w-full sm:w-full md:w-1/2 xl:w-1/2 h-fit flex flex-col'>
        <input type="text" value={feedback.name} onChange={(e) => setFeedback({ ...feedback, name: e.target.value })} placeholder="Name" className='w-full h-12 focus:outline-2 focus:outline-violet-600 mt-2  p-2 border border-gray-300 rounded-lg' />
        <input type="text" value={feedback.email} onChange={(e) => setFeedback({ ...feedback, email: e.target.value })} placeholder="Email" className='w-full h-12 mt-2 p-2 border border-gray-300 rounded-lg focus:outline-2 focus:outline-violet-600' />
        <textarea value={feedback.message} onChange={(e) => setFeedback({ ...feedback, message: e.target.value })} placeholder="Message" className='w-full h-24 p-2 border mt-2  border-gray-300 rounded-lg focus:outline-2 focus:outline-violet-600 ' />
        <button onClick={onSend} className='w-full h-12 focus:outline focus:outline-violet-600  focus:bg-violet-800 hover:bg-violet-800 bg-violet-600 mt-2  rounded-2xl text-white'>Submit</button>
        {
          isSend && <p className='text-white w-full mt-2 rounded-2xl text-center bg-green-700/50 p-4'>Thank you for your feedback</p>
        }
      </div>
    </div>
  )
}
