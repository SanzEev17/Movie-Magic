import React from 'react'

const MovieDetails = ({params}:{params:{movieId:string}}) => {
  return (
    <div>
        <div>
            {params.movieId}
        </div>
    </div>
  )
}

export default MovieDetails