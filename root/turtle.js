var canvas = null;
var ctx = null;

clear = function() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

scale = function(s) {
    movement_scale = s;
}

draw_turtle = function() {
    scale(.5);
    color('transparent');
    rotate(-90);
    move(7.5);
    rotate(-90);
    move(10);
    rotate(180)

    color('green');
    move(5);
    rotate(90);
    move(5)
    rotate(-90);
    move(5)
    rotate(-90);
    move(5)
    rotate(90);
    move(5)
    rotate(90);
    move(5)
    rotate(-90);
    move(5)
    rotate(90);
    move(5)
    rotate(90);
    move(5)
    rotate(-90);
    move(5)
    rotate(90);
    move(5);
    rotate(90);
    move(5)
    rotate(-90);
    move(5)
    rotate(-90);
    move(5)
    rotate(90);
    move(5);
    rotate(90);
    move(15)
}

rad = function(deg) {
    return deg*Math.PI/180;
}

move = function(distance) {
    var delta_x = distance*Math.cos(rad(rotation));
    var delta_y = distance*Math.sin(rad(rotation));
    ctx.beginPath();
    ctx.moveTo(canvas.width/2+location_x,canvas.height/2+location_y);
    location_x += delta_x*movement_scale;
    location_y += delta_y*movement_scale;
    ctx.lineTo(canvas.width/2+location_x,canvas.height/2+location_y);
    ctx.stroke();
}

rotate = function(deg) {
    rotation += deg;
}

color = function(c) {
    ctx.strokeStyle = c;
}

reset = function() {
    location_x = 0;
    location_y = 0;
    rotation = 270;
    movement_scale = 1;
    ctx.strokeStyle = 'white';
}

draw = function() { 
    reset();
    run();
    draw_turtle();
}

on_run = function() {
    localStorage.setItem('script',$('#turtle_script').val());
    clear();
    try {
	eval('run = function(){'+$('#turtle_script').val()+"}")
    }
    catch(err)
    {
	txt="There was an error while running your script.\n\n";
	txt+="Error description: " + err.message + "\n\n";
	txt+="Click OK to continue.\n\n";
	alert(txt);
    }
    draw();
}

start = function() {
    canvas = $('#screen').get(0);
    ctx = canvas.getContext('2d');
    $('#turtle_script').keydown(function(event) {
	  if (event.keyCode == '82' && event.ctrlKey ) {
	      on_run();
	  }
    });
    $('#run_button').click(on_run);
    clear();
    reset();
    draw_turtle();
    $('#turtle_script').val(localStorage.getItem('script'));
}
