<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
  #starsCanvas {
      position: fixed; /* or absolute */
      top: 0;
      left: 0;
      z-index: -1; /* send the canvas to the back */
    }

    </style>
</head>
<body>
<canvas id="starsCanvas"></canvas>

<script src="js/stars.js"></script>
</body>
</html>