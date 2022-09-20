import { useEffect, useState } from "react";
import { Card, Text } from "@nextui-org/react";
import axios from "axios";
import "./Soccer.css";

function Soccer() {
  const [sport, setSport] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ce6e8d6e9fmsh76f2de7f73d6ddfp1d3fb2jsnde8c953972b0",
      "X-RapidAPI-Host": "odds.p.rapidapi.com",
    },
  };

  async function data() {
    const res = await axios.get(
      "https://odds.p.rapidapi.com/v4/sports?all=true",
      options
    );

    console.log(res.data);
    setSport(res.data);
  }

  useEffect(() => {
    data();
  }, []);

  return (
    <div>
      <Card isHoverable variant="bordered" css={{ mw: "400px" }}>
        <Card.Body>
          <Text>
            {sport.map((art) => (
              <div className="header">
                {art.group === "Soccer" && <h1>{art.title}</h1>}
              </div>
            ))}
          </Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Soccer;
