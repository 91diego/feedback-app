function FeedBackStats({feedBack}) {

    // Calculate ratings avarage
    let avarage = feedBack.reduce((acc, currValue)=> {
        return acc + currValue.rating
    }, 0) / feedBack.length

    avarage = avarage.toFixed(1).replace(/[.,]0$/,'')

    return (
        <div className="feedback-stats">
            <h4>{feedBack.length} Reviews</h4>
            <h4>Avarage Rating: {isNaN(avarage) ? 0 : avarage}</h4>
        </div>
    )
}

export default FeedBackStats
