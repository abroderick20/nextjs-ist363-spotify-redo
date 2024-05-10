"use client";

import { useEffect, useState } from "react";

//import Showcase from "../components/custom/Showcase";

const HomePage = () => {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      fetch("/api/artists")
        .then((res) => res.json())
        .then((data) => {
          setArtists(data.artists);
          setIsLoading(false);
        });
    } catch (error) {
      setError(error);
    }
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading artists</p>;

  console.log({ artists });

  return (
    <div>
      {artists.map((artist) => (
        <h1 key={artist.id}>{artist.name}</h1>
      ))}
    </div>
  );
};

export default HomePage;
