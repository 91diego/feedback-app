import { useState } from "react";

import Header from "./components/Header";

import FeedbackData from "./data/FeedbackData";
import FeedBackList from "./components/FeedBackList";
import FeedBackStats from "./components/FeedBackStats";
import FeedBackForm from "./components/FeedBackForm";

function App() {

    const [feedBack, setFeedBack] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedBack(feedBack.filter((item) => item.id !== id))   
        }
    }

    return (
        <>
            <Header text="Hello feedback app" />
            <div className="container">
                <FeedBackForm />
                <FeedBackStats feedBack={feedBack} />
                <FeedBackList 
                    feedBack={feedBack} 
                    handleDelete={deleteFeedback} 
                />
            </div>
        </>
    )
}

export default App;