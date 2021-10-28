import {useEffect, useState} from "react";

export default function Home() {
  const [frame, setFrame] = useState(1);
  const [date, setDate] = useState(new Date());
  const [acceleration, setAcceleration] = useState(0);

  useEffect(() => {
    time();
  }, [date])

  const time = () => {
    setTimeout(() => {
      setDate(new Date(date.getTime() + Number(acceleration) + 100))

      let newFrame = date.getHours() + ("00" + date.getMinutes()
      ).slice(-2)

      setFrame(Math.ceil((newFrame * 3500) / 2359));
    }, 100)
  }

  return (
    <>
      <div className="container">
        <div className="crop">
          <img src={`img/out${frame}.png`} alt="backgorund"/>
        </div>
        <div className="centered">
          <h2>{date.toLocaleDateString()}</h2>
          <h3>{date.toLocaleTimeString()}</h3>
          <label htmlFor="customRange1" className="form-label">Set Time</label>
          <input type="range" className="form-range" defaultValue="0" value={acceleration} min="-200000" max="200000"
                 step="100000"
                 onChange={(event) => {
                   setAcceleration(event.target.value)
                 }}/>
        </div>
        <div className="bottom-left">
          <a href="https://youtu.be/hioVpO_TkrY"><p>youtu.be/hioVpO_TkrY</p></a>
        </div>
      </div>
    </>
  )
}
