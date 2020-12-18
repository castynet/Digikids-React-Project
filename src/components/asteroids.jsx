import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
      <ComponentTitle>Below are a few recent Asteroids</ComponentTitle>
      <AsteroidsWrap>
        {data.map((asteroid) => (
          <Wrapper key={asteroid.id}>
            <Title>Name: {asteroid.designation}</Title>
            <Diameter>
              Diameter:{" "}
              {asteroid.estimated_diameter.meters.estimated_diameter_max} meters
            </Diameter>
            <LastSeen>
              Last seen: {asteroid.orbital_data.last_observation_date}
            </LastSeen>
          </Wrapper>
        ))}
      </AsteroidsWrap>
    </>
  );
}

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
  border: solid 2px #0f0;
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
