<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/music.css">

</head>
<body>
<style>
/* ._2024 div{    
    float: left;
    font-weight:1000;

} */
#yellow{
    color:rgb(232, 201, 1);
    font-weight:1000;

}

#pink{
    color:deeppink;
    font-weight:1000;
}
#purple{
    color:purple;
    font-weight:1000;
}
#blue{
    color:blue;
    font-weight:1000;
}


</style>    

<div  id="player">
    <audio controls id="audioPlayer" autoplay></audio>
    <!-- <div  class="_2024"> -->
    <?php
    if (isset($_GET['2024colorfull'])) {
        ?>
        <?php    
    /* echo '<div>✨</div><div  style="padding-top:4px;display:inline"><div  style="color:rgb(232, 201, 1) ">2</div> <div  style="color:deeppink">0</div> <div  style="color:purple">2</div> <div  style="color:blue">4 </div>   
    </div></div>'; */
    echo '<span id="yellow">✨2</span><span id="pink">0</span><span id="purple">2</span><span id="blue">4</span> ';
    }

    else if (isset($_GET['2024greenlight']))  {
        echo '<span style="font-weight:1000;color:rgb(162, 180, 0)">✨2024</span>' ;
    }

    ?>
    

    
<span style="font-weight:1000 ;color:rgb(162, 180, 0)">📀ATEEZ - <span> <span style="display:inline; font-weight:600;color:rgb(100, 128, 0);" id="currentTrack"></span>
    <!-- <div  style="display: inline ; font-weight:600;" ></div> -->
</div>

<script src="js/music.js"></script>
</body>
</html>