import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Asteroids() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function randomPage() {
    return Math.floor(Math.random() * 2044) + 1;
  }

  const getData = async () => {
    const rawData = await fetch(
      `https://www.neowsapp.com/rest/v1/neo/browse?page=${randomPage()}&size=12&api_key=1DUyIPZRNvevTAO9w0v3tShxDK2zjbdny8B4Asp4`
    );
    const recivedData = await rawData.json();
    setData(recivedData.near_earth_objects);
  };

  function isBad(hazardous) {
    if (hazardous === true) {
      return "Dangerous";
    } else if (hazardous === false) {
      return "Fine";
    } else {
      return "Unknown";
    }
  }

  return (
    <>
      <ComponentTitle>Below are a few recent Asteroids</ComponentTitle>
      <AsteroidsWrap>
        {data.map((asteroid) => (
          <Wrapper
            key={asteroid.id}
            bad={asteroid.is_potentially_hazardous_asteroid}
          >
            <Title>Name: {asteroid.designation}</Title>
            <Diameter>
              Diameter:{" "}
              {asteroid.estimated_diameter.meters.estimated_diameter_max} meters
            </Diameter>
            <LastSeen>
              Last seen: {asteroid.orbital_data.last_observation_date}
            </LastSeen>
            <Status>
              The Asteroid is{" "}
              {isBad(asteroid.is_potentially_hazardous_asteroid)}
            </Status>
          </Wrapper>
        ))}
      </AsteroidsWrap>
    </>
  );
}

const Status = styled.p`
  text-align: left;
`;

const ComponentTitle = styled.h1`
  margin-top: 20px;
`;

const AsteroidsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const Wrapper = styled.div`
  border: solid 2px ${(props) => (props.bad ? "#f00" : "#0f0")};
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
`;

const Title = styled.h3`
  text-decoration: underline;
`;

const LastSeen = styled.p`
  text-align: left;
`;

const Diameter = styled.p`
  text-align: left;
`;
