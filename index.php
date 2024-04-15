<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/style.css">
  <title>Document</title>

  <style>
  body { margin: 0; overflow: hidden; }
  #fireworksCanvas {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    z-index: 10;
  }



    /* Add styles for your text content to ensure it has a higher z-index if needed */


</style>



</head>

<body>




    
    
    <center>
      
    <h1>

      
      
      
      
      
      <?php 
if (isset($_GET['late'])) {
  include("message/message_late.php");
} 
else if (isset($_GET['share'])) {
  include('./message/message_mignat1.php');
}

else  {
  // Fallback behaviour goes here
  include("./message/message_begin.php");
}
?>

    </h1> 

</center>


<!--     <div class="container">
      <div class="image">
        <video controls muted loop autoplay>
          <source src="./video/WhatsApp Video 2023-12-01 at 12.43.16.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      
        <div class="text" > -->
          <div class="container">
            <!-- <div class="image">
              <img src="image/2024_colorsblue_purple_pink.png" alt="2024"> -->
              
              <div style="padding-top: 0.2em;font-size: 110px; font-weight: 800;" class="image" >
                
              
              <div  style="color:rgb(232, 201, 1) ">✨2  </div> <div  style="color:deeppink">✨0  </div> <div  style="color:purple">✨2  </div> <div  style="color:blue">✨4  </div>       
        </div>
        
        <div class="text" >
          

          <!-- 2024_colorsblue_purple_pink.jpg -->
          
          <?php
if (isset($_GET['share'])) {
  include('./message/message_pre_mignat2.php');
}

else if (isset($_GET['begin'])){
  include('./message/message_pre_begin.php');
}
?>
</div>

</div>

</div>




<?php 
if (isset($_GET['snow'])){
  ?>
<script src="js/snow.js"></script>

<?php } ?>

  
  
  <script src="js/count.js"></script>
  
</body>

</html>