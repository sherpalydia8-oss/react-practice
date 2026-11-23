
import { useEffect, useState } from 'react'

const Movies = () => {

  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const response = await fetch(
      'https://movies-api.accel.li/api/v2/list_movies.json'
    )

    const data = await response.json()

    setMovies(data.data.movies)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className="min-h-screen bg-[#100e19] text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 md:px-16 py-6 border-b border-white/10">

        <h1 className="text-3xl font-extrabold tracking-wide">
          <span className="text-pink-500">LYDIA</span>
          <span className="text-white">VERSE</span>
        </h1>

        <p className="text-gray-300 font-medium">
          Home
        </p>

      </nav>

      {/* Hero Section */}
      <section className="px-8 md:px-16 py-16">

        <p className="text-pink-400 font-semibold tracking-widest mb-4">
          WELCOME TO LYDIAVERSE
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
          Discover Your
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            Favorite Movies
          </span>
        </h1>

        <p className="text-gray-400 text-lg">
          Explore the world of movies, one story at a time.
        </p>

      </section>

      {/* Movies */}
      <section className="px-8 md:px-16 pb-16">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-pink-500">✦</span> Explore Movies
          </h2>

          <p className="text-gray-400 text-sm">
            {movies.length} Movies
          </p>

        </div>

        {/* Movie Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">

          {movies.map((movie) => (

            <div
              key={movie.id}
              className="group bg-[#1c1928] rounded-2xl overflow-hidden border border-white/5 hover:border-pink-500/50 hover:-translate-y-2 transition duration-300 shadow-lg"
            >

              {/* Movie Image */}
              <div className="overflow-hidden">
                <img
                  src={movie.medium_cover_image}
                  alt={movie.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Movie Details */}
              <div className="p-4">

                <h2 className="font-bold text-lg truncate group-hover:text-pink-400 transition">
                  {movie.title}
                </h2>

                <div className="flex justify-between items-center mt-3">

                  <span className="text-gray-400 text-sm">
                    {movie.year}
                  </span>

                  <span className="text-yellow-400 text-sm font-semibold">
                    ★ {movie.rating}
                  </span>

                </div>

                <div className="flex flex-wrap gap-2 mt-4">

                  {movie.genres?.slice(0, 2).map((genre) => (

                    <span
                      key={genre}
                      className="bg-purple-500/15 text-purple-300 text-xs px-3 py-1 rounded-full"
                    >
                      {genre}
                    </span>

                  ))}

                </div>

                <p className="text-gray-400 text-sm mt-4">
                  ⏱ {movie.runtime} min
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 text-center py-8">

        <h2 className="text-xl font-bold">
          <span className="text-pink-500">LYDIA</span>VERSE
        </h2>

        <p className="text-gray-500 text-sm mt-2">
          Your Universe. Your Entertainment. ❤️
        </p>

        <p className="text-gray-600 text-xs mt-3">
          © 2026 LYDIAVERSE. All rights reserved.
        </p>

      </footer>

    </div>
  )
}

export default Movies
