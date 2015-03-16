
var width = 960,
    height = 500
     τ = 2 * Math.PI;;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("transform", "translate(32," + (height / 2) + ")");

var circle = svg.append("circle")
    .attr("cx" , 100)
    .attr("cy" , 200)
    .attr("r" , 20);

var rect = svg.append("rect")
    .attr("cx" ,100)
    .attr("cy" , 100)
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
  var dx = heatArray[0].length,
      dy = heatArray.length;
      // console.log(dx +"" + dy);

  // Fix the aspect ratio.
  // var ka = dy / dx, kb = height / width;
  // if (ka < kb) height = width * ka;
  // else width = height / ka;

  var x = d3.scale.linear()
      .domain([0, dx])
      .range([0, width]);

  var y = d3.scale.linear()
      .domain([0, dy])
      .range([height, 0]);

  var color = d3.scale.linear()
      .domain([0, 500, 1000, 1500, 2000, 2500, 3000, 3500])
      .range(["#0a0", "#6c0", "#ee0", "#eb4", "#eb9", "#fff" ,"#FF00FF", "#6699FF"]); 



//load data
d3.csv("part.csv", function(error, ballP) {   




function update(datax, datay , heading , energy, speed) {

  var startHeading =  parseFloat (heading-1);
  var endHeading =parseFloat (heading+ 1);

  circle.transition()
        .duration(400)
        .attr("cx" , datax)
        .attr("cy" , datay);

  rect.transition()
        .duration(400)
        .attr("height" , speed*30 )
        .attr("x"  , datax + 10)
        .attr("y" , datay);

  arcV.transition()
        .duration(400)
        .attr("transform" , "translate(" + datax + "," + datay + ")")
        .call(arcTween, startHeading,  endHeading );
  
  calculateHeat(parseInt(datax*5) , parseInt(datay*5));    

  // drawImage();


      
  // console.log(startHeading);
  //   console.log(endHeading);

   // heatArray[datax][datay] = heatArray[datax][datay]+10;
   for (var i = datax-30; i < datax+30; i++) {
     for (var j = datay-30; j < datay+30; j++) {
      if(i<0||j<0){
        continue;
      }
     heatArray[i][j] = heatArray[i][j]+10;
     };
   };
   // console.log(heatArray[datax][datay]);
}

function drawImage() {
    var context = document.getElementById("canvas").getContext("2d"),
    //The createImageData() method creates a new, blank ImageData object
    //http://www.w3schools.com/tags/canvas_createimagedata.asp
        image = context.createImageData(dx, dy);
        // console.log("dafd")

    for (var y = 0, p = -1; y < dy; ++y) {
      for (var x = 0; x < dx; ++x) {

        var c = d3.rgb(color(heatArray[y][x]));
              if(x==800){
                console.log(dy)
                console.log(dx)
        console.log(y+" ")
        console.log(x+" ")
        console.log(heatArray[y][x]);
      }
        // console.log(color(heatmap[y][x]));
        //this c is every data's color in heatmap.josn
        image.data[++p] = c.r;
        image.data[++p] = c.g;
        image.data[++p] = c.b;
        //this is the transparency
        image.data[++p] = 255;
      }
    }
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

// The initial display.

// Grab a random sample of letters from the alphabet, in alphabetical order.
//this code run the function each 2000 miliseconds
var num =0;

var max = 0, maxX, maxY;
var clearID = setInterval(function() {

setInterval(function() {

  num = num + 1;

  // console.log(ballP[num].x_pos);
  if(ballP[num].tag_id = 6){
  update(ballP[num].x_pos, ballP[num].y_pos, ballP[num].heading, ballP[num].energy, ballP[num].speed);

  // console.log(ballP[num].tag_id);
}
      // .slice(1, Math.floor(Math.random() * 5)));
  // .slice(1, 3));
     // console.log(shuffle(alphabet));
     //      console.log(shuffle(alphabet).slice(1,3));

      // .sort());

  console.log(num);

  if (num == 1500) {
    console.log(heatArray);
        drawImage();
    for (i=0 ;i<xMax;i++) {
      for (j=0;j<yMax;j++) {
        if(heatArray[i][j] > max){
          max = heatArray[i][j];
          maxX= i;
          maxY = j;
        };
      }
    };
    console.log(max+"dd " + maxX + "" + maxY);
    clearInterval(clearID);} 
}, 1);


}, 300);

});