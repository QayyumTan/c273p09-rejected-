$(document).ready(function () {
    
    

 

    var data = [10, 20, 30, 40, 50];
    var labels = ["Singapore", "Malaysia", "Thailand", "Vietnam", "Myanmar"];
    $.ajax({
        type: "GET",
        url: "getStatistics.php",
        cache: false,
        dataType: "JSON",

 

        success: function (response) {
            
            for(stats of response){
                data.push(stats.population);
                labels.push(stats.country);
            }
            
            

 

            
            
           
            
            var barChart = new Chart($("#barChart"), {
                type: 'horizontalBar',
                data: {
                    datasets: [{
                            data: data,
                            backgroundColor: "lightblue",
                            label: 'Population'
                        }],
                    labels: labels
                },
                options: {
                    responsive: true
                }
            });

 


            
        },
        error: function (obj, textStatus, errorThrown) {
            console.log("Error " + textStatus + ": " + errorThrown);
        }
    });

 

 

});