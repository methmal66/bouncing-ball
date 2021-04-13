const displayBallAt = (cords) => {
  ellipse(cords.x, cords.y, DIAMETER, DIAMETER);
};

const updateLocation = (location) => ({
  x: location.x + SPEED.x,
  y: location.y + SPEED.y,
});

const findNextCoordinates = (() => {
  let current = INITIAL_LOCATION;
  return () => {
    current = updateLocation(current);
    return current;
  };
})();
