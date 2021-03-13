import './Moods.css'


const Mood = () => {
    return (
        <section className="Mood">
                <h1>How are you feeling today?</h1>
                <div className="Moods">
                    <div className="MoodButton">
                        <p>☹️</p>
                    </div>
                    <div className="MoodButton">
                        <p>😐</p>
                    </div>
                    <div className="MoodButton">
                        <p>🙂</p>
                    </div>
                    <div className="MoodButton">
                        <p>😀</p>
                    </div>
                </div>
        </section>
    )
}

export default Mood;