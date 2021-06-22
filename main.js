canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car_width = 100;
car_height = 90;

background_image = "https://i.pinimg.com/736x/d0/9c/4c/d09c4cfd1b93cc66dc13c8b461fd2145.jpg";

car_1 = "https://www.clipartmax.com/png/middle/17-172157_racing-car-cartoon-car-top-view.png";
car1_x = 10;
car1_y = 10;

car_2 = "https://lh3.googleusercontent.com/proxy/YUDblChsHmnd9IL6dfS1zsnU1HP3O1UYTz8fPKs9F9vopeFyJYZ4HoWto-VNxLaMvLtI6yvkrkns_sKFGMbILIV2X92UVew";
car2_x = 10;
car2_y = 10;


function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car_imgTag = new Image();
    car_imgTag.onload = uploadcar;
    car_imgTag.src = "https://www.clipartmax.com/png/middle/17-172157_racing-car-cartoon-car-top-view.png";
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadcar1(){
    ctx.drawImage(car_imgTag, car1_x, car1_y, car_width, car_height);
    
}

function uploadcar2(){
    ctx.drawImage(car_imgTag, car2_x, car2_y, car_width, car_height);
    
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up1();
            console.log("up");
        }

        if(keyPressed == '40')
        {
            down1();
            console.log("down");
        }

        if(keyPressed == '37')
        {
            left1();
            console.log("left");
        }

        if(keyPressed == '39')
        {
            right1();
            console.log("right");
        }

       


    function up1(){
        if(car1_y >=0){
            car1_y = car1_y - 10;
            console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }

    function down1(){
        if(car1_y <=500){
            car1_y = car1_y + 10;
            console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y);
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }
    
    function left1(){
        if(car1_x >=0){
            car1_x = car1_x - 10;
            console.log("When left arrow is pressed, x = " + car1_x + " | y = " +car1_y);
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }

    function right1(){
        if(car1_y >=0){
            car1_y = car1_y + 10;
            console.log("When right arrow is pressed, x = " + car1_x + " | y = " +car1_y);
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }