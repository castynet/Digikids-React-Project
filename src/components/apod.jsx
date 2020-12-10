import React, { useState } from "react";

export default function Apod() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const rawData = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=1DUyIPZRNvevTAO9w0v3tShxDK2zjbdny8B4Asp4"
    );
    const data = await rawData.json();
  };

  return (
    <>
      <p>hello</p>
    </>
  );
}
