function MovieCard({title,genre,year,image}){
    return(
        <div className="MovieCard">
             <img src={image} alt={title} width="200" />
             <h2>{title}</h2>
            <p>Genre: {genre}</p>
            <p>Year: {year}</p>

            <button>Watch Now</button>
        </div>
    );
}
export default MovieCard;