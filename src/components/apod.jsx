import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Apod() {
  // below are the states of the app
  const [date, setDate] = useState();
  const [explanation, setExplanation] = useState();
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const rawData = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=1DUyIPZRNvevTAO9w0v3tShxDK2zjbdny8B4Asp4"
    );
    const recivedData = await rawData.json();

    setDate(recivedData.date);
    setExplanation(recivedData.explanation);
    setTitle(recivedData.title);
    setUrl(recivedData.url);
  };

  return (
    <>
      <Wrapper>
        <Heading>{title}</Heading>
        <ContentWrapper>
          <Image src={url} alt="Apod img of the Day" />
          <div>
            <Day>Picture of the day - {date}</Day>
            <Expl>{explanation}</Expl>
          </div>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;

const Image = styled.img`
  width: 400px;
`;

const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  background-color: #ffdd94;
  padding: 20px 0;
  border-radius: 5px;
`;

const Expl = styled.p`
  font-size: 20px;
  text-align: justify;
  width: 500px;
  margin: 0 auto;
`;

const Day = styled.p``;

const Heading = styled.h2``;
