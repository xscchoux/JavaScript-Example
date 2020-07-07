//Initialize our highchats library
document.addEventListener('DOMContentLoaded', function(){
    
    const options = {
        chart:{
            type:'column',
            zoomType:"xy"
        },
        title:{
            text:"Our Second Chart"
        },
        yAxis:{
            title:{
                text:'Fruits Eaten'
            }
        },
        responsive:{
            rules:[
                {
                 condition:{
                    maxWidth:500,
                },
                chartOptions:{
                    legend: {enabled: false },
                    yAxis:{ title: {text:''}}
                }
            }
        ]
        }
    };
    // $.get('test.csv', csv=>{
    //     options.data ={
    //         csv,
    //     };
    //     Highcharts.chart("container", options);
    // })


    // fetch('test.csv').then(res => {
    //     return res.text();
    // }).then(csv => {
    //     options.data = {
    //         csv
    //     };
    
    //     Highcharts.chart("container", options);
    // });



    options.data = {
        csvURL:'http://localhost:5500/test.csv',
        enablePolling:true,
        dataRefreshRate:2
    }
    Highcharts.chart("container", options);


    // Highcharts.chart('container', {
    //     chart:{
    //         type:'line',
    //         zoomType:'xy'
    //     },
    
    //     yAxis:{
            
    //         title:{
    //             text:'Fruits Eaten'
    //         }
    //     },
      
    //     title:{
    //         text:'Our First Chart'
    //     },
    //     xAxis : {
    //         // alternateGridColor: '#b7cff7',
    //         categories:['Apples', 'Bananas', 'Oranges']
    //     },
    //     series:[
    //         {
    //             name:"Fruit Consumption",
    //             // negativeColor:'red',
    //             data:[-4,-8,0,4,5,6,2,9,10,12,15,10,9,7,-4],
    //             zones:[
    //                 {
    //                     value:0,
    //                     color:'#f7a35c'
    //                 },
    //                 {
    //                     value:10,
    //                     color:'#7cb5ec'
    //                 },
    //                 {
    //                     color:'#90ed7d'
    //                 },
            
    //         ]
    //         }
    //       ]
    // })
});