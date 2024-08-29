import React from 'react';
import Card from "./card"; 
import Orwell from "../assets/1984.png";
import Robakidze from "../assets/მცველნი.png";
import Camus from "../assets/camus.png";
import Don from "../assets/Don.png";

const data = [
  { id: '1', name: "1984 ", image: Orwell , description: "This dystopian novel presents a world under the control of a totalitarian regime that manipulates truth and enforces absolute loyalty. The story follows Winston Smith, who secretly rebels against the Party's oppressive rule. ", Characters:"Winston Smith, Julia, Big Brother "},
  { id: '2', name: "მცველნი გრალისა", image: Robakidze, description: "ამბავი იწყება შუასაუკუნეების ეპოქაში, სადაც მცველთა საიდუმლო საზოგადოება იცავს წმინდა გრალს ბოროტი ძალებისგან. წიგნი შეიცავს მისტიკურ და ფანტასტიკურ ელემენტებს, სადაც მთავარი გმირები ებრძვიან მრავალ დაბრკოლებას და იძიებენ გრალის საიდუმლოებას.", Characters:"ლევანი, თავადი გიორგი, ნორინა" },
  { id: '3', name: "The Plague", image: Camus, description:"The story begins with the outbreak of the plague, which initially appears as a series of mysterious deaths among the city's rats. As the disease spreads among humans, the town is quarantined, and the inhabitants face a new reality of isolation and mortality.", Characters:"Dr. Bernard Rieux, Raymond Rambert, Cottard" },
  { id: '4', name: "DOn Quixote", image: Don, description:"The novel follows Don Quixote, a gentleman from La Mancha who becomes so enamored with tales of chivalry and knighthood that he decides to become a knight-errant himself. Adopting the name Don Quixote, he sets out on a quest to revive chivalry and seek justice. He is accompanied by his loyal squire, Sancho Panza.", Characters:"Don Quixote, Sancho Panza, Dulcinea del Toboso" }
];

const Cardlist = () => {
  function action(name) {
    alert(`This is an action from ${name}`); 
  }

  return (
    <div>
      {data.map((card) => (
        <Card 
          key={card.id} 
          name={card.name} 
          description={card.description}
          Characters={card.Characters}
          image={card.image} 
          action={action} 
        />
      ))}
    </div>
  );
}

export default Cardlist;
