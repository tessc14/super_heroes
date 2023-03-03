import React, { useState, useEffect } from 'react'
import './style.css'

function Heroes() {

    const [heroes, setHeroes] = useState([]);
  
    useEffect(() => {
      async function fetchRandomHeroes() {
        const heroesArray = [];
        for (let i = 1; i < 732; i++) {
          try {
            const response = await fetch(`https://www.superheroapi.com/api.php/5826270344122811/${i}`);
            const data = await response.json();
            heroesArray.push(data);
          } catch (error) {
            console.log(error);
          }
        }
        setHeroes(heroesArray);
      }
  
      fetchRandomHeroes();
    }, []);
  
    console.log(heroes);

    return (
        console.log('done')
    )


}

export default Heroes;
