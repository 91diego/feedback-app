import FeedBackItem from "./FeedBackItem";

function FeedBackList({feedBack, handleDelete}) {

    if (!feedBack || feedBack.length === 0) {
        return <p>No Feedback yet</p>
    }
    return (
        <div className="feedback-list">
            {feedBack.map((item) => (
                <FeedBackItem 
                    key={item.id} 
                    item={item}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    )
}

export default FeedBackList
