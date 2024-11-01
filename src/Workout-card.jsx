import { useEffect, useState } from 'react';



function WorkoutCard(props){
    let day=props.day;
    
    let url=`http://localhost:3000/${day}`;
    let [Workouts,setWorkouts]=useState([1]);
    
    useEffect(()=>{
        fetch(url)
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setWorkouts(data);
        })
    },[]);




    return(
    <>
    {
        Workouts.map((workout)=>(
            <div className="workout-card" key={workout.id}>
        
                <img className="card-image" src={workout.Imgurl}></img>
                <h3 className="card-heading">{workout.name}</h3>
                <p className="card-text">{workout.reps}</p>
            </div>
        ))
    }
    
    </>
      
    )
}

export default WorkoutCard;