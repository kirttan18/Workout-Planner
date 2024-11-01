import ChestPress from './assets/ChestPress.gif'
import WorkoutCard from './Workout-card';


function days(props){

    let dayText=props.day;
    let muscle=props.muscle;

    if(dayText=="Thursday"){
        return(
            <div className="days">
            <div className="day-name">
                <h2>{dayText}</h2>  
                <p>{muscle}</p>  
            </div>

            <div className="cardContainer">
            <iframe width="90%" height="90% * 16/9" src="https://www.youtube.com/embed/s0sk9iIndtw?si=FrELuk_MoAyJBpQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            </div>
        )
    }

    if(dayText=="Sunday"){
        return(
            <div className="days">
            <div className="day-name">
                <h2>{dayText}</h2>  
                <p>{muscle}</p>  
            </div>

            <div className="cardContainer">
                <h1 id='SundayText'>Recovery and Rest Day</h1>
            </div>

            </div>
        )
    }




    return(
        <div className="days">
            <div className="day-name">
                <h2>{dayText}</h2>  
                <p>{muscle}</p>  
            </div>

            <div className="cardContainer">
            <WorkoutCard day={dayText} />
            </div>

            
        </div>
    )
}

export default days;