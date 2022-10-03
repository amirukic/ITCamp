import { useState, useEffect} from "react"
import "./card.css"
function Card() {
  const [poke, setPoke] = useState();
  async function getUser() {
    const res = await fetch(
      `https://kitsu.io/api/edge/anime/7991`
    );
    const data = await res.json();
    console.log(data);
    setPoke(data.data);
  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      {/* {poke?.map((card, index) => (
        <div key={index} className="rep">
            <h1>{card.attributes.slug}</h1>
            <h2>{card.attributes.synopsis}</h2>
        </div>
      ))} */}
    </>
  );
}

export default Card;
