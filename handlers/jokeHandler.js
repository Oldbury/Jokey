const jokes = require('../jokes.json')

const RandomJoke = () => {
    return jokes[Math.floor(Math.random() * jokes.length)]
}

const jokeByType = (type) => {
    if (type === 'random') {
        return (RandomJoke())
    }
    const jokeType = jokes.filter(joke => joke.type === type)
    return jokeType[Math.floor(Math.random() * jokeType.length)]
};
module.exports = {RandomJoke, jokeByType}