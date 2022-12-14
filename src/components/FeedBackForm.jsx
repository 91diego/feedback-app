import { useState } from "react"
import Button from "./shared/Button"
import Card from "./shared/Card"

function FeedBackForm() {

    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                {/* @todo - rating select component */}
                <div className="input-group">
                    <input 
                        onChange={handleTextChange} 
                        type="text" 
                        placeholder="Add a review"
                        value={text}
                    />
                    <Button type="submit" version='secondary'>
                        Send
                    </Button>
                </div>
            </form>
        </Card>
    )
}

export default FeedBackForm
