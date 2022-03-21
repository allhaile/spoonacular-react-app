import { useEffect, useState } from "react";
import styled from "styled-components";
function Popular() {

  // variable and function to increment variable
  const [popular, setPopular] = useState([])

    useEffect(() => {
      getPopular();
    }, [])
    

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_KEY}&number=10`);

        const data = await api.json();
        setPopular(data.recipes)
        console.log(data)

    }

  return (
    <div>
      {/* Loops over an array and grabs what you specify */}
      {popular.map((recipe) =>{
        return(
          <Wrapper key={recipe.id}>
            <h3>Popular Picks</h3>
          {popular.map((recipe) =>{
            return(
              <Card>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title}></img>
              </Card>
            );
          })}
            
            
          </Wrapper>
        );
      })}

    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
`

export default Popular;