import React, { useEffect, useState } from "react";

export default function Asteroids() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const rawData = await fetch(
      "https://www.neowsapp.com/rest/v1/neo/browse?page=2044&size=12&api_key=1DUyIPZRNvevTAO9w0v3tShxDK2zjbdny8B4Asp4"
    );
    const recivedData = await rawData.json();
    console.log(recivedData.near_earth_objects);
    setData(recivedData.near_earth_objects);
  };

  return (
    <>
      <p></p>
    </>
  );
}
