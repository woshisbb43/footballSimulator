
var width = 960,
    height = 500
     τ = 2 * Math.PI;;

var svg = d3.select("body").append("svg").attr("class" , "pitch")
    .attr("width", width)
    .attr("height", height)
    .style('background','green');


var circle = svg.append("circle")
    .attr("r" , 20);

var rect = svg.append("rect")
    .attr("width" , 50)
    .attr("height" , 40)
    .attr("opacity" , 0.5);

var arc = d3.svg.arc()
    .innerRadius(10)
    .outerRadius(200)

arcV = svg.append("path")
    .datum({endAngle: 0 , startAngle: 0})
    .attr("d", arc)
    .attr("fill" , "#FA8258")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white");
//heatmap array   
var xMax = 960;
var yMax = 500;
var heatArray = new Array();

for (i=0;i<xMax;i++) {
 heatArray[i]=new Array();
 for (j=0;j<yMax;j++) {
  heatArray[i][j]=0;
 }
}
// ############################# for heatmap ######################################
  var dx = heatArray.length,
      dy = heatArray[0].length;
      console.log(dx +"" + dy);

  // Fix the aspect ratio.
  // var ka = dy / dx, kb = height / width;
  // if (ka < kb) height = width * ka;
  // else width = height / ka;

  var scaleX = d3.scale.linear()
      .domain([0, 110])
      .range([0, width]);


  var scaleY = d3.scale.linear()
      .domain([0, 73])
      .range([height, 0]);

  var color = d3.scale.linear()
      .domain([0, 20, 40, 60, 80, 100, 120, 140])
      .range(["#0a0", "#6c0", "#ee0", "#eb4", "#eb9", "#fff" ,"#FF00FF", "#6699FF"]);

  // var xAxis = d3.svg.axis()
  //     .scale(x)
  //     .orient("top")
  //     .ticks(20);

  // var yAxis = d3.svg.axis()
  //     .scale(y)
  //     .orient("right");


var  canvas =  d3.select("body").append("canvas")
      .attr("width", dx)
      .attr("height", dy)
      .style("width", width + "px")
      .style("height", height + "px")
      .attr("id" , "canvas");


//load data
d3.csv("playerSix.csv", function(error, ballP) {   

  //player's quickest speed is 13.3202 slowest is 0 

function update(datax, datay , heading , energy, speed) {


  var startHeading =  parseFloat (heading-1);
  var endHeading =parseFloat (heading+ 1),
  scaleDataX = parseInt(scaleX(datax)),
  scaleDataY = parseInt(scaleY(datay));
  if(speed==0){
    speed = 0.1;
  }

  console.log("x "+scaleDataX + " y" + scaleDataY + " heading" + heading);
  circle.transition()
        .duration(500)
        .attr("cx" , scaleDataX)
        .attr("cy" , scaleDataY);
        //choose this player.

  circle.on("click", function() {
          //old values for dataset
        // d3.select("#a1").remove();
          drawImage();
         });


  rect.transition()
        .duration(500)
        .attr("height" , speed*30 )
        .attr("x"  , scaleDataX + 10)
        .attr("y" , scaleDataY);

  arcV.transition()
        .duration(500)
        .attr("transform" , "translate(" + scaleDataX + "," + scaleDataY + ")")
        .call(arcTween, startHeading,  endHeading );
  
  calculateHeat(scaleDataX ,scaleDataY);    

  // drawImage();



}
//caluculate the apperance array for heatmap
function calculateHeat(datax , datay){

   // heatArray[datax][datay] = heatArray[datax][datay]+10;
   for (var i = datax-30; i < datax+30; i++) {
     for (var j = datay-30; j < datay+30; j++) {
      if(i<0||j<0){
        continue;
      }
     heatArray[i][j] = heatArray[i][j]+10;
     };
   };
   // console.log(heatArray[datax][datay] + " x"+datax +" y"+ datay);
}

function drawImage() {
    var context = document.getElementById("canvas").getContext("2d"),
    //The createImageData() method creates a new, blank ImageData object
    //http://www.w3schools.com/tags/canvas_createimagedata.asp
        image = context.createImageData(dx, dy);
        // console.log("dafd")

    for (var y = 0, p = -1; y < dy; ++y) {
      for (var x = 0; x < dx; ++x) {

        var c = d3.rgb(color(heatArray[x][y]));
      //         if(x==800){
      //           console.log(dy)
      //           console.log(dx)
      //   console.log(y+" ")
      //   console.log(x+" ")
      //   console.log(heatArray[y][x]);
      // }
        // console.log(color(heatmap[y][x]));
        //this c is every data's color in heatmap.josn
        image.data[++p] = c.r;
        image.data[++p] = c.g;
        image.data[++p] = c.b;
        //this is the transparency
        image.data[++p] = 255;
        // console.log(p);
      }
    }
    // console.log(image);
    context.putImageData(image, 0, 0);
}

function arcTween(transition, newStartAngle , newFinishAngle) {

  // The function passed to attrTween is invoked for each selected element when
  // the transition starts, and for each element returns the interpolator to use
  // over the course of transition. This function is thus responsible for
  // determining the starting angle of the transition (which is pulled from the
  // element's bound datum, d.endAngle), and the ending angle (simply the
  // newAngle argument to the enclosing function).
  transition.attrTween("d", function(d) {

    // To interpolate between the two angles, we use the default d3.interpolate.
    // (Internally, this maps to d3.interpolateNumber, since both of the
    // arguments to d3.interpolate are numbers.) The returned function takes a
    // single argument t and returns a number between the starting angle and the
    // ending angle. When t = 0, it returns d.endAngle; when t = 1, it returns
    // newAngle; and for 0 < t < 1 it returns an angle in-between.
    var interpolateStart = d3.interpolate(d.startAngle, newStartAngle);
    var interpolateEnd = d3.interpolate(d.endAngle, newFinishAngle);

    // The return value of the attrTween is also a function: the function that
    // we want to run for each tick of the transition. Because we used
    // attrTween("d"), the return value of this last function will be set to the
    // "d" attribute at every tick. (It's also possible to use transition.tween
    // to run arbitrary code for every tick, say if you want to set multiple
    // attributes from a single function.) The argument t ranges from 0, at the
    // start of the transition, to 1, at the end.
    return function(t) {

      // Calculate the current arc angle based on the transition time, t. Since
      // the t for the transition and the t for the interpolate both range from
      // 0 to 1, we can pass t directly to the interpolator.
      //
      // Note that the interpolated angle is written into the element's bound
      // data object! This is important: it means that if the transition were
      // interrupted, the data bound to the element would still be consistent
      // with its appearance. Whenever we start a new arc transition, the
      // correct starting angle can be inferred from the data.
    d.startAngle = interpolateStart(t);
     d.endAngle = interpolateEnd(t);

      // Lastly, compute the arc path given the updated data! In effect, this
      // transition uses data-space interpolation: the data is interpolated
      // (that is, the end angle) rather than the path string itself.
      // Interpolating the angles in polar coordinates, rather than the raw path
      // string, produces valid intermediate arcs during the transition.
      return arc(d);
    };
  });
}

//this code run the function each 2000 miliseconds
var num =0;
var maxX=0;
var maxY; 
var max;
var timeStamp;

var clearID = setInterval(function() {  
  if(ballP[num].tag_id == 1){
    console.log("6");
  }
  else{
  num = num + 1;
  if(num==2000|| num ==4000|| num == 6000 || num ==8000 || num ==10000|| num == 12000|| num == 14000 || num == 16000){
      drawImage();
  }
  // console.log(ballP[num].x_pos);
  if(parseInt( ballP[num].timestamp) == timeStamp){
      timeStamp = parseInt(ballP[num].timestamp);
      }
  else{
      timeStamp = parseInt(ballP[num].timestamp);  
      update(ballP[num].x_pos, ballP[num].y_pos, ballP[num].heading, ballP[num].energy, ballP[num].speed);
  // console.log(timeStamp);
  }
  // console.log(num);
  // ####################### code to stop interval ########################################
  if (num == 2000) {
    console.log(heatArray);
    // drawImage();

    // for (i=0 ;i<xMax;i++) {
    //   for (j=0;j<yMax;j++) {
    //     if(heatArray[i][j] > max){
    //       max = heatArray[i][j];
    //       maxX= i;
    //       maxY = j;
    //     };
    //   }
    // };
    // console.log(max+"dd " + maxX + "" + maxY);
    // clearInterval(clearID);
  } 
}
  // ####################### code to stop interval ########################################
}, 1);


});