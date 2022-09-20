import { useEffect, useState } from "react";
import { Card, Text } from "@nextui-org/react";
import axios from "axios";
import "./Soccer.css";

function Soccer() {
  const [sportsTeam, setSportsTeam] = useState();
  const apiKey = "4710d673b6cdd6c5336e670eaff96a429add6ad6f6ddaa619e33ef50882b5cee"
  const team = "96"
  async function data() {
    const res = await axios.get(
      `https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=${team}&APIkey=${apiKey}`
    );

    
    setSportsTeam(res.data.result[0]);
  }

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="players">
      {sportsTeam?.players.map((art, index) => (
        <div key={index} className="card">
          <h2>{art.player_name}</h2>
          <img src={art.player_image} alt="No image"/>
          <img src="" alt="" srcset="" />
          <p>Pozicija {art.player_type}</p>
          <p>Broj igraca {art.player_number}</p>
          <p>Godine igraca {art.player_age}</p>
        </div>
      ))}
    </div>
  );
}

export default Soccer;
