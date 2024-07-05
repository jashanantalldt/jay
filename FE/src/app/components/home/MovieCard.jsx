"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";


const MovieCard = ({ id, image, name,}) => {
    const router = useRouter()
    const [imgSrc, setImgSrc] = useState(image);

  const handelClick = () => {
    router.push(`/movie/${id}`);
  };

  return (
    <div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg hover:backdrop-blur-xl transition duration-300 cursor-pointer"
      onClick={handelClick}
    >
      <div className="relative">
        <Image
          height="304"
          width="250"
          priority={true}
          alt={name}
          src={imgSrc}
          onError={() => {
            setImgSrc('https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/old_images/vertical/MOVIE/2789/1000212789/1000212789-v');
          }}
          className="w-[250px] h-[19rem]  object-cover"
        />
        <div className="absolute bottom-0 left-0  bg-gradient-to-t from-black p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300  flex flex-col justify-end  w-full h-full  ">
          <h2 className="text-xl font-bold">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default MovieCard