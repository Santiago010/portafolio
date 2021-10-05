const RandomNumber = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default RandomNumber;
