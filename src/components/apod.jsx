import React, { useState, useEffect } from "react";

export default function Apod() {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const rawData = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=1DUyIPZRNvevTAO9w0v3tShxDK2zjbdny8B4Asp4"
    );
    const recivedData = await rawData.json();
    setData(recivedData);
  };

  return (
    <>
      <p>{data}</p>
    </>
  );
}
