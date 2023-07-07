import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({updatePokemon}) {
  const [obj, setObj] = useState({
    name: "",
    hp: "",
    front: "",
    back: ""
  })
 function handleChange(e){
  setObj([...obj, [e.target.name] = e.target.value])
 }
  function handleSubmit(){
    const newObj ={
      "name": obj.name,
      "hp": obj.hp,
      "sprites": {
        "front": obj.front,
        "back": obj.back}
    }
    console.log("submited")
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newObj)
    })      
    .then(resp => resp.json)
    .then(updatePokemon)
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name"  onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp"  onChange={handleChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl" 
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
             onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
