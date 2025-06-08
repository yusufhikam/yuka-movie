import { useEffect, useState } from "react";
import { fetchNowPlayingMovies, IMG_BASE_URL } from "../../services/api";
// import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router";

// import "../../App.css";

const Carousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchNowPlayingMovies().then((res) => setMovies(res.slice(0, 8) || []));
  }, []);
  return (
    <div className="w-full h-[100vh] z-20">
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={true}
        loop={movies.length > 0 ? true : false}
        className="w-full h-full "
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link
              to={"/shit"}
              className="w-full h-full md:relative bg-cover bg-center flex justify-center items-center"
              style={{
                backgroundImage: `url(${IMG_BASE_URL}/${movie.backdrop_path})`,
              }}
            >
              <div className="bg-black/50 md:absolute md:bottom-50 md:left-20 p-6 m-5 rounded-md text-start max-w-lg text-white">
                <h2 className="text-3xl font-bold">{movie.title}</h2>
                <p className="mt-2 line-clamp-5 text-ellipsis">
                  {movie.overview}
                </p>

                <p className="font-bold mt-10">
                  Realese : {new Date(movie.release_date).getFullYear()}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
