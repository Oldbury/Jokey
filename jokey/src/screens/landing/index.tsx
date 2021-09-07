import { Box, Flex, Heading, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { Joke } from "../../types/joke";

const LandingScreen = () => {
  const [joke, setJoke] = useState<Joke>();
  const [typeSelected, setTypeSelected] = useState<string>("random");

  const getJokeByType = async () => {
    const response = await fetch(`/jokes/${typeSelected}`);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  const getJoke = () => {
    getJokeByType()
      .then((res) => {
        console.log(res);
        setJoke(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <Navbar />
      <Select
        placeholder="Select a category"
        onChange={(e) => setTypeSelected(e.target.value)}
        defaultValue="random"
      >
        <option value="random">Random</option>
        <option value="programming">Programming</option>
        <option value="general">General</option>
      </Select>
      <button onClick={getJoke}>Get Joke</button>
      <p>Selected type: {typeSelected} </p>
      {/* <Flex direction="column"> */}
      <p>Setup {joke?.setup}</p>
      <p>Punchline {joke?.punchline}</p>
      {/* </Flex> */}
    </div>
  );
};

export default LandingScreen;
