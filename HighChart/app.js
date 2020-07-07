//Initialize our highcharts library
document.addEventListener('DOMContentLoaded', function(){
    Highcharts.chart('container', {
        chart:{
            // type:'column'
            // type:'bar'
            // type:'scatter'
            // type:'area'
            type:'areaspline',
            zoomType:'xy'
        },
        credits:{
            // enabled:false
            text:"My Custom Credits",
            href:"https://google.com",
            position:{
                align:'left',
                x:10
            },
            style:{
                fontSize: "15px",
                color:"red"
            }
        },
        colors:['#1c110a','#e4d6a7','#e9b44c','#9b2915','#50a2a7'],
        yAxis:{
            title:{
                text:'Fruits Eaten'
            }
        },
        tooltip:{
            formatter(){
                let s = `<strong>X is:</strong>${this.x}`;
                this.points.forEach(function(point){
                    console.log(point);
                    s += `<br>Y is:${point.y}-${point.series.name}`
                });
                return s;
            },
            shared:true,
            // formatter(){
            //     return `<strong>X value - ${this.x}</strong>, Y value - ${this.y}`
            // },
            // animation:true,
            // backgroundColor:'#333333',
            // borderColor:'#f01f11',
            // borderRadius:20,
            // followPointer:true,
            // style:{
            //     color:'#ffffff'
            // }
        },
        title:{
            text:'Our First Chart'
        },
        xAxis : {
            categories:['Apples', 'Bananas', 'Oranges']
        },
        series :  [
            {
              name: "John",
              data: [1, 2, 3, 100, 2, 3, 1, 2, 3],
            },
            {
              name: "Jane",
              data: [1, 20, 25, 60, 13, 12, 40, 14],
            },
            {
              name: "Wayna",
              data: [1, 20, 100, 1, 3, 2, 1, 2],
            },
            {
              name: "Jack",
              data: [10, 20, 100, 8, 7, 4, 2, 4],
            },
            {
              name: "Mario",
              data: [8, 12, 100, 6, 7, 4, 200, 4],
            },
            {
              name: "Matt",
              data: [1, 20, 25, 26, 60, 12, 30, 14],
            },
          ]
    })
})