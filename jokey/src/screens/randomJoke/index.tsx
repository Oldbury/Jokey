import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { Joke } from "../../types/joke";

const RandomJokeScreen = () => {
  const [joke, setJoke] = useState<Joke>();

  const getRandomJoke = async () => {
    const response = await fetch("/randomJoke");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  useEffect(() => {
    getRandomJoke().then((res) => setJoke(res.joke));
  }, []);

  const getAnotherJoke = () => {
    getRandomJoke().then((res) => setJoke(res.joke));
  };

  return (
    <div>
      <Navbar />
      <Center bg="tomato" h="100vh" color="white">
        <Flex direction="column">
          <Heading size="lg">{joke?.setup}</Heading>
          <Heading size="md">{joke?.punchline}</Heading>
        </Flex>
      </Center>
      <button onClick={getAnotherJoke}>Get Another Joke</button>
    </div>
  );
};

export default RandomJokeScreen;
