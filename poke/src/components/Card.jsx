import { useState, useEffect} from "react"
import "./card.css"
function Card() {
  const [poke, setPoke] = useState();
  async function getUser() {
    const res = await fetch(
      `https://apiv2.allsportsapi.com/football/?met=Countries&APIkey=4710d673b6cdd6c5336e670eaff96a429add6ad6f6ddaa619e33ef50882b5cee`
    );
    const data = await res.json();
    console.log(data);
    setPoke(data.result);
  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      {poke?.map((card, index) => (
        <div key={index} className="rep">
            <h1>{card.country_name}</h1>
            <img src={card.country_logo} alt="" />
        </div>
      ))}
    </>
  );
}

export default Card;
