  var dom = document.getElementById('AshenClock-D');
  var Ashen = dom.getContext("2d");
  var width = Ashen.canvas.width;
  var height = Ashen.canvas.height;
  var r = width / 2;
  var rem = width / 200;  
  function drawBackground(){
	  Ashen.save();
	  Ashen.translate(r,r);
	  Ashen.beginPath();
	  Ashen.strokeStyle = '#ff9191';
	  Ashen.lineWidth = 10 * rem;
	  Ashen.arc(0,0,r-Ashen.lineWidth / 2,0,2 *Math.PI,false);
	  Ashen.stroke();
	   var hourNumbers = [3,4,5,6,7,8,9,10,11,12,1,2];
	  Ashen.font = 18 * rem + 'px Arial';
	  Ashen.fillStyle = '#fff'
	  Ashen.textAlign = 'center';
	  Ashen.textBaseline = 'middle';
	  hourNumbers.forEach(function(number,i){
		  var rad = 2*Math.PI/12 * i;
		  var x = Math.cos(rad) * ( r - 30 * rem);
		  var y = Math.sin(rad) * ( r - 30 * rem);
		  Ashen.fillText(number,x,y);
	  }); 
	  for(var i=0; i<60;i++){
		  var rad = 2*Math.PI / 60 * i;
		  var x = Math.cos(rad) * ( r - 18 * rem);
		  var y = Math.sin(rad) * ( r - 18 * rem);
   
   
		  Ashen.beginPath();
		  if(i % 5 === 0){
			  Ashen.fillStyle = '#42ca78';
			  Ashen.arc(x,y,2 * rem,0,2*Math.PI,false);
		  }else{
			  Ashen.fillStyle = '#ccc'; //灰色
			  Ashen.arc(x,y,2 * rem,0,2*Math.PI,false);
		  }
		  Ashen.fill();
	  }  
  } 
  function drawHour(hour,minute){
	  Ashen.save();
	  Ashen.beginPath();
	  var rad = 2*Math.PI / 12 * hour;
	  var mrad = 2*Math.PI / 12 / 60 * minute;
	  Ashen.rotate(rad + mrad);
	  Ashen.lineWidth = 10 * rem;
	  Ashen.lineCap = 'round';
	  Ashen.moveTo(0,10 * rem);
	  Ashen.lineTo(0, -r / 2 );
	  Ashen.stroke();
	  Ashen.restore();
  } 
  function drawMinute(minute,second){
	  Ashen.save();
	  Ashen.beginPath();
	  var rad = 2*Math.PI / 60 * minute;
	  var mrad = 2*Math.PI / 60 / 60 * second;
	  Ashen.rotate(rad + mrad);
	  Ashen.lineWidth = 7 * rem;
	  Ashen.lineCap = 'round';
	  Ashen.moveTo(0,10 * rem);
	  Ashen.lineTo(0, -r + 25 * rem);
	  Ashen.stroke();
	  Ashen.restore();
  } 
  function drawSecond(second){
	  Ashen.save();
	  Ashen.beginPath();
	  Ashen.fillStyle = '	#ff9191'
	  var rad = 2*Math.PI / 60 * second;
	  Ashen.rotate(rad);
	  Ashen.moveTo(-2,20 * rem);
	  Ashen.lineTo(2, 20 * rem);
	  Ashen.lineTo(0.5, -r + 18 * rem);
	  Ashen.lineTo(-0.5, -r + 18 * rem);
	  Ashen.fill();
	  Ashen.restore();
  }
  function drawDot(){
	  Ashen.beginPath();
	  Ashen.fillStyle = '#fff'
	  Ashen.arc(0,0,3 * rem,0,2 * Math.PI, false);
	  Ashen.fill();
   
   
  }
  function draw(){
	  Ashen.clearRect(0,0,width,height);
	  var now = new Date();
	  var hour = now.getHours();
	  var minute = now.getMinutes();
	  var second = now.getSeconds();
	  drawBackground();
	  drawHour(hour,minute);
	  drawMinute(minute,second);
	  drawSecond(second);
	  drawDot();
	  Ashen.restore();
  }
  draw()
  setInterval(draw,1000);
