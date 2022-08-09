import {FaTimes} from 'react-icons/fa'
import Card from "./shared/Card"

function FeedBackItem({item, handleDelete}) {

    /*const [rating, setRating] = useState(7)
    const [text, setText] = useState('EXAMPLE')

    const handleClick = () => {
        setRating((prev) => {
            return prev + 1
        })
    }*/

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className='close'>
                <FaTimes color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

export default FeedBackItem
