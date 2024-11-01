import Days from "./days"

function App() {


  return (
    <>
    <div className="title">
      <h1>Workouts</h1>
    </div>
    <Days day="Monday" muscle="Chest" />
    <Days day="Tuesday" muscle="Leg" />
    <Days day="Wednesday" muscle="Back and Bicep" />
    <Days day="Thursday" muscle="Abs" />
    <Days day="Friday" muscle="Shoulder and Tricep" />
    <Days day="Saturday" muscle="Leg" />
    <Days day="Sunday" muscle="Rest Day" />





    </>
  )
}

export default App
