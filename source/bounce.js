const displayBallAt = (cords) => {
  ellipse(cords.x, cords.y, DIAMETER, DIAMETER);
};

const findBallDirection = (() => {
  let direction = { x: 1, y: 1 };
  return (cords) => {
    if (cords.y > CANVAS.HEIGHT || cords.y < 0) {
      direction.y *= -1;
    }
    if (cords.x > CANVAS.WIDTH || cords.x < 0) {
      direction.x *= -1;
    }
    return direction;
  };
})();

const updateCoordinate = (cords) => {
  const direction = findBallDirection(cords);
  return {
    x: cords.x + SPEED.x * direction.x,
    y: cords.y + SPEED.y * direction.y,
  };
};

const findNextCoordinates = (() => {
  let current = INITIAL_COORDINATE;
  return () => {
    current = updateCoordinate(current);
    return current;
  };
})();
