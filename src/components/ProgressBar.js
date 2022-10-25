import React from 'react';

React.useEffect(() => {
  if (progress <= 25) {
    setColor("255,0,0");
  } else if (progress <= 50) {
    setColor("255,255,0");
  } else if (progress <= 75) {
    setColor("0,0,255");
  } else {
    setColor("0,255,0");
  }

  const timer = setInterval(() => {
    setProgress((previousProgress) => {
      if (previousProgress === 100) {
        return 0;
      }
      return previousProgress + 5;
    });
    return () => {
      clearInterval(timer);
    };
  }, [progress]);


  <LinearProgress
    variant="determinate"
    value={progress}
    sx={{
      backgroundColor: `rgb(${color},0.4)`,
      "& .MuiLinearProgress-bar": {
        backgroundColor: `rgb(${color})`
      }
    }}
  />
})
