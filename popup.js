$(document).ready(function() {

    $(document).ready(function() {
        $('body').on('click', 'a', function() {
            chrome.tabs.create({url: $(this).attr('href')});
            return false;
        });
    });

 

    //butonat slide
    $("#next").click(function() {
        var $next = $(".slide:visible").toggle().next('.slide');
        if ($next.size() < 1) {
            $next = $(".slide:first");
        }
        
        $next.toggle();
    });

    $("#prev").click(function() {
        var $prev = $(".slide:visible").toggle().prev('.slide');
        if ($prev.size() < 1) {
            $prev = $(".slide:last");
        }
        $prev.toggle();
    });

    //Prishtina
    $.simpleWeather({
        woeid: '', //2357536
        location: 'Pristin', //Pristina, Prizren, Mitrovica, Gjilan, Dakovica, Ipek,Ferizaj 
        unit: 'c',
        success: function(weather) {


            html = '<div class="city"><h1>Prishtin&euml;</h1>';
            html += '<span>Sot</span>';
            html += '<h2> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<span class="lowercase"><p class="temp">Temp max/min: </p> ' + weather.high + '&deg;' + '/' + weather.low + '&deg;</span></div>';

            var week = [];
            for (var i = 1; i < weather.forecast.length; i++) {
                var day = weather.forecast[i].day + '';

//                chrome.extension.getBackgroundPage().console.log(day);
                if (day === 'Mon') {
                    week.push('E Hene');
                }
                if (day === 'Tue') {
                    week.push('E Marte');
                }
                if (day === 'Wed') {
                    week.push('E Merkure');
                }
                if (day === 'Thu') {
                    week.push('E Enjte');
                }
                if (day === 'Fri') {
                    week.push('E premte');
                }
                if (day === 'Sat') {
                    week.push('E Shtune');
                }
                if (day === 'Sun') {
                    week.push('E Diele');
                }

            }

            html += '<div class="next-days">';
            for (var i = 0; i < weather.forecast.length - 2; i++) {
                var day = weather.forecast[i].day;
//                <p>' + weather.forecast[i].text+ '</p>
                html += '<div><p>' + week[i] + '</p><is class="icon-' + weather.forecast[i].high + '"></is><p class="temp">Temp max/min: </p><p>' +
                        weather.forecast[i].high + '&deg;' + '/' + weather.forecast[i].low + '&deg; </p></div>';
            }
            html += '</div>';


            $("#weather1").html(html);
        },
        error: function(error) {
            $("#weather1").html('<p>' + error + '</p>');
        }
    });

    //Prizreni
    $.simpleWeather({
        woeid: '', //2357536
        location: 'Shkoder', //Pristina, Prizren, Mitrovica, Gjilan, Dakovica, Ipek,Ferizaj 
        unit: 'c',
        success: function(weather) {

            html = '<div class="city"><h1>Velipoj&euml;</h1>';
            html += '<span>Sot</span>';
            html += '<h2> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<span class="lowercase"><p class="temp">Temp max/min: </p> ' + weather.high + '&deg;' + '/' + weather.low + '&deg;</span></div>';

            var week = [];
            for (var i = 1; i < weather.forecast.length; i++) {
                var day = weather.forecast[i].day + '';

//                chrome.extension.getBackgroundPage().console.log(day);
                if (day === 'Mon') {
                    week.push('E Hene');
                }
                if (day === 'Tue') {
                    week.push('E Marte');
                }
                if (day === 'Wed') {
                    week.push('E Merkure');
                }
                if (day === 'Thu') {
                    week.push('E Enjte');
                }
                if (day === 'Fri') {
                    week.push('E premte');
                }
                if (day === 'Sat') {
                    week.push('E Shtune');
                }
                if (day === 'Sun') {
                    week.push('E Diele');
                }

            }

            html += '<div class="next-days">';
           for (var i = 0; i < weather.forecast.length - 2; i++) {
                var day = weather.forecast[i].day;
//                <p>' + weather.forecast[i].text+ '</p>
                html += '<div><p>' + week[i] + '</p><is class="icon-' + weather.forecast[i].high + '"></is><p class="temp">Temp max/min: </p><p>' +
                        weather.forecast[i].high + '&deg;' + '/' + weather.forecast[i].low + '&deg; </p></div>';
            }
            html += '</div>';

            $("#weather2").html(html);
        },
        error: function(error) {
            $("#weather2").html('<p>' + error + '</p>');
        }
    });

    //Peja
    $.simpleWeather({
        woeid: '', //2357536
        location: 'Shengjin', //Pristina, Prizren, Mitrovica, Gjilan, Dakovica, Ipek,Ferizaj 
        unit: 'c',
        success: function(weather) {

            html = '<div class="city"><h1>Sh&euml;ngjin</h1>';
            html += '<span>Sot</span>';
            html += '<h2> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<span class="lowercase"><p class="temp">Temp max/min: </p> ' + weather.high + '&deg;' + '/' + weather.low + '&deg;</span></div>';

            var week = [];
            for (var i = 1; i < weather.forecast.length; i++) {
                var day = weather.forecast[i].day + '';

//                chrome.extension.getBackgroundPage().console.log(day);
                if (day === 'Mon') {
                    week.push('E Hene');
                }
                if (day === 'Tue') {
                    week.push('E Marte');
                }
                if (day === 'Wed') {
                    week.push('E Merkure');
                }
                if (day === 'Thu') {
                    week.push('E Enjte');
                }
                if (day === 'Fri') {
                    week.push('E premte');
                }
                if (day === 'Sat') {
                    week.push('E Shtune');
                }
                if (day === 'Sun') {
                    week.push('E Diele');
                }

            }

            html += '<div class="next-days">';
            for (var i = 0; i < weather.forecast.length - 2; i++) {
                var day = weather.forecast[i].day;
//                <p>' + weather.forecast[i].text+ '</p>
                html += '<div><p>' + week[i] + '</p><is class="icon-' + weather.forecast[i].high + '"></is><p class="temp">Temp max/min: </p><p>' +
                        weather.forecast[i].high + '&deg;' + '/' + weather.forecast[i].low + '&deg; </p></div>';
            }
            html += '</div>';

            $("#weather3").html(html);
        },
        error: function(error) {
            $("#weather3").html('<p>' + error + '</p>');
        }
    });

    //Mitrovica
    $.simpleWeather({
        woeid: '', //2357536
        location: 'Ulcinj', //Pristina, Prizren, Mitrovica, Gjilan, Dakovica, Ipek,Ferizaj 
        unit: 'c',
        success: function(weather) {

            html = '<div class="city"><h1>Ulqin</h1>';
            html += '<span>Sot</span>';
            html += '<h2> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<span class="lowercase"><p class="temp">Temp max/min: </p> ' + weather.high + '&deg;' + '/' + weather.low + '&deg;</span></div>';

            var week = [];
            for (var i = 1; i < weather.forecast.length; i++) {
                var day = weather.forecast[i].day + '';

//                chrome.extension.getBackgroundPage().console.log(day);
                if (day === 'Mon') {
                    week.push('E Hene');
                }
                if (day === 'Tue') {
                    week.push('E Marte');
                }
                if (day === 'Wed') {
                    week.push('E Merkure');
                }
                if (day === 'Thu') {
                    week.push('E Enjte');
                }
                if (day === 'Fri') {
                    week.push('E premte');
                }
                if (day === 'Sat') {
                    week.push('E Shtune');
                }
                if (day === 'Sun') {
                    week.push('E Diele');
                }

            }

            html += '<div class="next-days">';
            for (var i = 0; i < weather.forecast.length - 2; i++) {
                var day = weather.forecast[i].day;
//                <p>' + weather.forecast[i].text+ '</p>
                html += '<div><p>' + week[i] + '</p><is class="icon-' + weather.forecast[i].high + '"></is><p class="temp">Temp max/min: </p><p>' +
                        weather.forecast[i].high + '&deg;' + '/' + weather.forecast[i].low + '&deg; </p></div>';
            }
            html += '</div>';

            $("#weather4").html(html);
        },
        error: function(error) {
            $("#weather4").html('<p>' + error + '</p>');
        }
    });

    //Gjilan
    $.simpleWeather({
        woeid: '', //2357536
        location: 'Durres', //Pristina, Prizren, Mitrovica, Gjilan, Dakovica, Ipek,Ferizaj 
        unit: 'c',
        success: function(weather) {

            html = '<div class="city"><h1>Durr&euml;s</h1>';
            html += '<span>Sot</span>';
            html += '<h2> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<span class="lowercase"><p class="temp">Temp max/min: </p> ' + weather.high + '&deg;' + '/' + weather.low + '&deg;</span></div>';

            var week = [];
            for (var i = 1; i < weather.forecast.length; i++) {
                var day = weather.forecast[i].day + '';

//                chrome.extension.getBackgroundPage().console.log(day);
                if (day === 'Mon') {
                    week.push('E Hene');
                }
                if (day === 'Tue') {
                    week.push('E Marte');
                }
                if (day === 'Wed') {
                    week.push('E Merkure');
                }
                if (day === 'Thu') {
                    week.push('E Enjte');
                }
                if (day === 'Fri') {
                    week.push('E premte');
                }
                if (day === 'Sat') {
                    week.push('E Shtune');
                }
                if (day === 'Sun') {
                    week.push('E Diele');
                }

            }

            html += '<div class="next-days">';
            for (var i = 0; i < weather.forecast.length - 2; i++){
                var day = weather.forecast[i].day;
//                <p>' + weather.forecast[i].text+ '</p>
                html += '<div><p>' + week[i] + '</p><is class="icon-' + weather.forecast[i].high + '"></is><p class="temp">Temp max/min: </p><p>' +
                        weather.forecast[i].high + '&deg;' + '/' + weather.forecast[i].low + '&deg; </p></div>';
            }
            html += '</div>';

            $("#weather5").html(html);
        },
        error: function(error) {
            $("#weather5").html('<p>' + error + '</p>');
        }
    });

    //Vlora
    $.simpleWeather({
        woeid: '', //2357536
        location: 'Vlore', //Pristina, Prizren, Mitrovica, Gjilan, Dakovica, Ipek,Ferizaj 
        unit: 'c',
        success: function(weather) {

             html = '<div class="city"><h1>Vlor&euml;</h1>';
            html += '<span>Sot</span>';
            html += '<h2> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<span class="lowercase"><p class="temp">Temp max/min: </p> ' + weather.high + '&deg;' + '/' + weather.low + '&deg;</span></div>';

            var week = [];
            for (var i = 1; i < weather.forecast.length; i++) {
                var day = weather.forecast[i].day + '';

//                chrome.extension.getBackgroundPage().console.log(day);
                if (day === 'Mon') {
                    week.push('E Hene');
                }
                if (day === 'Tue') {
                    week.push('E Marte');
                }
                if (day === 'Wed') {
                    week.push('E Merkure');
                }
                if (day === 'Thu') {
                    week.push('E Enjte');
                }
                if (day === 'Fri') {
                    week.push('E premte');
                }
                if (day === 'Sat') {
                    week.push('E Shtune');
                }
                if (day === 'Sun') {
                    week.push('E Diele');
                }

            }

            html += '<div class="next-days">';
           for (var i = 0; i < weather.forecast.length - 2; i++) {
                var day = weather.forecast[i].day;
//                <p>' + weather.forecast[i].text+ '</p>
                html += '<div><p>' + week[i] + '</p><is class="icon-' + weather.forecast[i].high + '"></is><p class="temp">Temp max/min: </p><p>' +
                        weather.forecast[i].high + '&deg;' + '/' + weather.forecast[i].low + '&deg; </p></div>';
            }
            html += '</div>';


            $("#weather6").html(html);
        },
        error: function(error) {
            $("#weather6").html('<p>' + error + '</p>');
        }
    });



    //Dakovica
    $.simpleWeather({
        woeid: '', //2357536
        location: 'Himara', //Pristina, Prizren, Mitrovica, Gjilan, Dakovica, Ipek,Ferizaj 
        unit: 'c',
        success: function(weather) {

            html = '<div class="city"><h1>Himarë</h1>';
            html += '<span>Sot</span>';
            html += '<h2> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<span class="lowercase"><p class="temp">Temp max/min: </p> ' + weather.high + '&deg;' + '/' + weather.low + '&deg;</span></div>';

            var week = [];
            for (var i = 1; i < weather.forecast.length; i++) {
                var day = weather.forecast[i].day + '';

//                chrome.extension.getBackgroundPage().console.log(day);
                if (day === 'Mon') {
                    week.push('E Hene');
                }
                if (day === 'Tue') {
                    week.push('E Marte');
                }
                if (day === 'Wed') {
                    week.push('E Merkure');
                }
                if (day === 'Thu') {
                    week.push('E Enjte');
                }
                if (day === 'Fri') {
                    week.push('E premte');
                }
                if (day === 'Sat') {
                    week.push('E Shtune');
                }
                if (day === 'Sun') {
                    week.push('E Diele');
                }

            }

            html += '<div class="next-days">';
            for (var i = 0; i < weather.forecast.length - 2; i++) {
                var day = weather.forecast[i].day;
//                <p>' + weather.forecast[i].text+ '</p>
                html += '<div><p>' + week[i] + '</p><is class="icon-' + weather.forecast[i].high + '"></is><p class="temp">Temp max/min: </p><p>' +
                        weather.forecast[i].high + '&deg;' + '/' + weather.forecast[i].low + '&deg; </p></div>';
            }
            html += '</div>';


            $("#weather7").html(html);
        },
        error: function(error) {
            $("#weather7").html('<p>' + error + '</p>');
        }
    });

    //Ferizaji
    $.simpleWeather({
        woeid: '', //2357536
        location: 'Sarande', //Pristina, Prizren, Mitrovica, Gjilan, Dakovica, Ipek,Ferizaj 
        unit: 'c',
        success: function(weather) {

             html = '<div class="city"><h1>Sarand&euml;</h1>';
            html += '<span>Sot</span>';
            html += '<h2> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<span class="lowercase"><p class="temp">Temp max/min: </p> ' + weather.high + '&deg;' + '/' + weather.low + '&deg;</span></div>';

            var week = [];
            for (var i = 1; i < weather.forecast.length; i++) {
                var day = weather.forecast[i].day + '';

//                chrome.extension.getBackgroundPage().console.log(day);
                if (day === 'Mon') {
                    week.push('E Hene');
                }
                if (day === 'Tue') {
                    week.push('E Marte');
                }
                if (day === 'Wed') {
                    week.push('E Merkure');
                }
                if (day === 'Thu') {
                    week.push('E Enjte');
                }
                if (day === 'Fri') {
                    week.push('E premte');
                }
                if (day === 'Sat') {
                    week.push('E Shtune');
                }
                if (day === 'Sun') {
                    week.push('E Diele');
                }

            }

            html += '<div class="next-days">';
            for (var i = 0; i < weather.forecast.length - 2; i++) {
                var day = weather.forecast[i].day;
//                <p>' + weather.forecast[i].text+ '</p>
                html += '<div><p>' + week[i] + '</p><is class="icon-' + weather.forecast[i].high + '"></is><p class="temp">Temp max/min: </p><p>' +
                        weather.forecast[i].high + '&deg;' + '/' + weather.forecast[i].low + '&deg; </p></div>';
            }
            html += '</div>';


            $("#weather8").html(html);
        },
        error: function(error) {
            $("#weather8").html('<p>' + error + '</p>');
        }
    });

    //Orikum
    $.simpleWeather({
        woeid: '', //2357536
        location: 'Orikum', //Pristina, Prizren, Mitrovica, Gjilan, Dakovica, Ipek,Ferizaj 
        unit: 'c',
        success: function(weather) {

             html = '<div class="city"><h1>Orikum</h1>';
            html += '<span>Sot</span>';
            html += '<h2> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<span class="lowercase"><p class="temp">Temp max/min: </p> ' + weather.high + '&deg;' + '/' + weather.low + '&deg;</span></div>';

            var week = [];
            for (var i = 1; i < weather.forecast.length; i++) {
                var day = weather.forecast[i].day + '';

//                chrome.extension.getBackgroundPage().console.log(day);
                if (day === 'Mon') {
                    week.push('E Hene');
                }
                if (day === 'Tue') {
                    week.push('E Marte');
                }
                if (day === 'Wed') {
                    week.push('E Merkure');
                }
                if (day === 'Thu') {
                    week.push('E Enjte');
                }
                if (day === 'Fri') {
                    week.push('E premte');
                }
                if (day === 'Sat') {
                    week.push('E Shtune');
                }
                if (day === 'Sun') {
                    week.push('E Diele');
                }

            }

            html += '<div class="next-days">';
            for (var i = 0; i < weather.forecast.length - 2; i++) {
                var day = weather.forecast[i].day;
//                <p>' + weather.forecast[i].text+ '</p>
                html += '<div><p>' + week[i] + '</p><is class="icon-' + weather.forecast[i].high + '"></is><p class="temp">Temp max/min: </p><p>' +
                        weather.forecast[i].high + '&deg;' + '/' + weather.forecast[i].low + '&deg; </p></div>';
            }
            html += '</div>';


            $("#weather9").html(html);
        },
        error: function(error) {
            $("#weather9").html('<p>' + error + '</p>');
        }
    });

    //Dhermi
    $.simpleWeather({
        woeid: '', //2357536
        location: 'Himare', //Pristina, Prizren, Mitrovica, Gjilan, Dakovica, Ipek,Ferizaj 
        unit: 'c',
        success: function(weather) {

             html = '<div class="city"><h1>Dh&euml;rmi</h1>';
            html += '<span>Sot</span>';
            html += '<h2> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<span class="lowercase"><p class="temp">Temp max/min: </p> ' + weather.high + '&deg;' + '/' + weather.low + '&deg;</span></div>';

            var week = [];
            for (var i = 1; i < weather.forecast.length; i++) {
                var day = weather.forecast[i].day + '';

//                chrome.extension.getBackgroundPage().console.log(day);
                if (day === 'Mon') {
                    week.push('E Hene');
                }
                if (day === 'Tue') {
                    week.push('E Marte');
                }
                if (day === 'Wed') {
                    week.push('E Merkure');
                }
                if (day === 'Thu') {
                    week.push('E Enjte');
                }
                if (day === 'Fri') {
                    week.push('E premte');
                }
                if (day === 'Sat') {
                    week.push('E Shtune');
                }
                if (day === 'Sun') {
                    week.push('E Diele');
                }

            }

            html += '<div class="next-days">';
            for (var i = 0; i < weather.forecast.length - 2; i++) {
                var day = weather.forecast[i].day;
//                <p>' + weather.forecast[i].text+ '</p>
                html += '<div><p>' + week[i] + '</p><is class="icon-' + weather.forecast[i].high + '"></is><p class="temp">Temp max/min: </p><p>' +
                        weather.forecast[i].high + '&deg;' + '/' + weather.forecast[i].low + '&deg; </p></div>';
            }
            html += '</div>';


            $("#weather10").html(html);
        },
        error: function(error) {
            $("#weather10").html('<p>' + error + '</p>');
        }
    });

    //Ksamil
    $.simpleWeather({
        woeid: '', //2357536
        location: 'Ksamil', //Pristina, Prizren, Mitrovica, Gjilan, Dakovica, Ipek,Ferizaj 
        unit: 'c',
        success: function(weather) {

            html = '<div class="city"><h1>Ksamil</h1>';
            html += '<span>Sot</span>';
            html += '<h2> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
            html += '<span class="lowercase"><p class="temp">Temp max/min: </p> ' + weather.high + '&deg;' + '/' + weather.low + '&deg;</span></div>';

            var week = [];
            for (var i = 1; i < weather.forecast.length; i++) {
                var day = weather.forecast[i].day + '';

//                chrome.extension.getBackgroundPage().console.log(day);
                if (day === 'Mon') {
                    week.push('E Hëne');
                }
                if (day === 'Tue') {
                    week.push('E Marte');
                }
                if (day === 'Wed') {
                    week.push('E Mërkure');
                }
                if (day === 'Thu') {
                    week.push('E Enjte');
                }
                if (day === 'Fri') {
                    week.push('E Premte');
                }
                if (day === 'Sat') {
                    week.push('E Shtune');
                }
                if (day === 'Sun') {
                    week.push('E Diele');
                }

            }

            html += '<div class="next-days">';
            for (var i = 0; i < weather.forecast.length - 2; i++) {
                var day = weather.forecast[i].day;
//                <p>' + weather.forecast[i].text+ '</p>
                html += '<div><p>' + week[i] + '</p><is class="icon-' + weather.forecast[i].high + '"></is><p class="temp">Temp max/min: </p><p>' +
                        weather.forecast[i].high + '&deg;' + '/' + weather.forecast[i].low + '&deg; </p></div>';
            }
            html += '</div>';


            $("#weather11").html(html);
        },
        error: function(error) {
            $("#weather11").html('<p>' + error + '</p>');
        }
    });

});
