import React from 'react'

function Heroes() {

    async function displayHeroes(id) {
        try {
            const response = await fetch(`https://www.superheroapi.com/api.php/5826270344122811/${id}`)
            const data = await response.json()
            console.log(data)
            

        } catch(error) {
            console.log(error)
        }
    }

    for (let i = 1; i < 20; i++) {
        displayHeroes(i)
    }

  return (
    <div>Heroes</div>
  )
}

export default Heroes