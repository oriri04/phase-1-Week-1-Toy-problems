function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointsPer5KmOver = 1;
    const pointsThresholdForSuspension = 12;
  
    if (speed < speedLimit) {
      console.log("Ok");
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / 5);
  
      if (demeritPoints > pointsThresholdForSuspension) {
        console.log("License suspended");
      } else {
        console.log("Points: " + demeritPoints);
      }
    }
  }
  
  const carSpeed = 140;
  checkSpeed(carSpeed);
  