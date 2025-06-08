import { useEffect, useState } from "react";
import { fetchMovies, IMG_BASE_URL, searchMovies } from "../services/api";
import { useDarkMode } from "../context/DarkModeContext";
import SpinnerLoader from "../components/Elements/Spinner/Spinner";
import Carousel from "../components/fragments/Carousel";

const HomePage = () => {
  const [dataMovies, setDataMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { isDarkMode } = useDarkMode();

  const handleSearch = async (e) => {
    if (e.length > 0) {
      setIsLoading(true);
      const search = await searchMovies(e);
      setDataMovies(search);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchMovies()
      .then((res) => setDataMovies(res))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={`flex flex-col justify-center items-center `}>
      <Carousel />

      <input
        placeholder='Search Movie...'
        onChange={(e) => handleSearch(e.target.value)}
        type='text'
        className={`${
          isDarkMode ? "bg-white text-black" : "bg-gray-600 text-white"
        } p-2 rounded-md focus:outline-none text-black w-3/5 mt-20`}
      />

      {isLoading ? (
        <SpinnerLoader />
      ) : dataMovies.length === 0 ? (
        <h1 className='text-red-500 font-semibold mb-56 mt-28 text-2xl'>
          Data Not Found :(
        </h1>
      ) : (
        <div className='flex flex-wrap p-5 justify-center gap-3 mt-5 mx-5'>
          {dataMovies.length > 0 &&
            dataMovies.map((movie) => {
              return (
                <div
                  key={movie.id}
                  className={`${
                    isDarkMode
                      ? "bg-gray-600 hover:shadow-red-600 text-white"
                      : "bg-gray-800 hover:shadow-gray-600 text-white"
                  } lg:basis-1/5 md:basis-1/4 sm:basis-1/3 basis-full flex-1 text-center rounded-md overflow-hidden group  hover:shadow-lg shadow-lg`}>
                  <div className='p-3 flex flex-col '>
                    <h1 className='line-clamp-1 text-ellipsis mb-4 font-bold'>
                      {movie.title}
                    </h1>

                    {isLoading ? (
                      <SpinnerLoader />
                    ) : (
                      <div className='overflow-hidden object-cover group-hover:rounded-md'>
                        <img
                          src={`${IMG_BASE_URL}/${movie.poster_path}`}
                          className=' object-cover my-4 group-hover:scale-110 group-hover:-translate-y-2  transition-transform duration-500  '
                          alt=''
                        />
                      </div>
                    )}
                    <p>
                      <span className='italic'>Release Date: </span>
                      {movie.release_date}
                    </p>
                    <p>
                      {movie.vote_average}/{movie.vote_count}
                    </p>
                    {/* <p>{movie.overview}</p> */}
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default HomePage;
