import React from 'react'

function HeroCard({id, name, appearance, image, work}) {


    async function handleLike(id) {

        console.log('like')
    }

    async function handleDelete(id) {
        console.log('delete')
    }
  return (
    <div className="hero-card">
        <h3>{name}</h3>
        <img src="" alt="" />
        <ul>
            {appearance}
        </ul>
        <h4>{work}</h4>
        <button
        onClick={handleLike}>
            Like
        </button>
        <button
        onClick={handleDelete}>
            Delete
        </button>

    </div>
  )
}

export default HeroCard