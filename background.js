
$.simpleWeather({
        woeid: '', //2357536
        location: 'Pristin', //Pristina, Prizren, Mitrovica, Gjilan, Dakovica, Ipek,Ferizaj 
        unit: 'c',
        success: function(weather) {

       chrome.runtime.onMessage.addListener(
                function(request, sender, sendResponse) {


                    // read `newIconPath` from request and read `tab.id` from sender
                    chrome.browserAction.setIcon({
                        path: request.newIconPath,
                        tabId: sender.tab.id
                    });
                    chrome.browserAction.setBadgeBackgroundColor({color: [0, 0, 0, 230]});
                    chrome.browserAction.setBadgeText({text: ""+weather.temp+"°C"});

                });
   
           
        },
        error: function(error) {
           
        }
    });
  