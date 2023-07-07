import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const front = pokemon.sprites.front
  const back = pokemon.sprites.back 
  const [sprite, setSprite] = useState(front)
  const updateSprite = sprite === front ? back : front
  function handleClick(){
    setSprite(updateSprite)
  }
  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={sprite === front ? front : back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
