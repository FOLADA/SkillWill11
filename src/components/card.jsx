
const Card = ({name, image, description, Characters,  action}) => {
    return (
      <div>
        <h1 class="h1">{name}</h1>
          <p>{description}</p>
          <ul>
          {Characters}
          </ul>
        <img class="image" src={image} alt="" />
        <button class="btn"onClick={() => {
          console.log(name); 
          action(name); 
        }}>
          button
        </button>
      </div>
    );
  };
  
  export default Card;
  