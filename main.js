c = document.getElementById("idk").value;
image_lol="https://media.tenor.com/images/783b23983a669b60969354290f5ce247/tenor.gif";
block_image_object="";
function new_image(){
    fabric.Image.fromURL(image_lol,function(Img){
        block_image_object=Img;
   
        block_image_object.scaleToWidth(800);
        block_image_object.scaleToHeight(600);
        block_image_object.set({
        top:player_y,
        left:player_x
        });
       canvas.add(block_image_object);
    });
   }
   function play(){
       song=document.getElementById("myAudio").value;
       song.play()
   }
