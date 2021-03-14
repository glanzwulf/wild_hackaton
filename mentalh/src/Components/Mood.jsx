import './Moods.css'


const Mood = () => {
    return (
        <section className="Mood">
                <h2>How are you feeling today?</h2>
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