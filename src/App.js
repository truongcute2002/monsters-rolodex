import './index.css'
import { useState } from 'react'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from "./components/Header";
const App = () => {
  const [feedback,setFeedback ] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if(window.confirm("Do you want to delete this feedback permanently?"))
      setFeedback(feedback.filter((item) =>item.id!==id))
  }
  return (
    <>
      <Header/>
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
};


export default App;
