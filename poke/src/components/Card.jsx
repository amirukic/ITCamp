import { useState, useEffect} from "react"
import "./card.css"
function Card() {
  const [poke, setPoke] = useState();
  async function getUser() {
    const res = await fetch(
      `https://kitsu.io/api/edge/anime?page[limit]=8&page[offset]=0&filter[text]=one%20piece`
    );
    const data = await res.json();
    setPoke(data.data);
    console.log(data.data);
  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
        {poke?.map((el,index) => (
          <div key={index} className="main"><img src={el.attributes.posterImage.small} alt="" /></div>
        ))}
    </>
  );
}

export default Card;
