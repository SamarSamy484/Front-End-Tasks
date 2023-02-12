// to get the location
function getloc(){
    navigator.geolocation.getCurrentPosition(showLoc,showError,options)
}

// to show it
function showLoc(e){
    var long=e.coords.longitude;
    var lat=e.coords.latitude;
    location.assign("https://maps.google.com/maps?q="+ lat + ",+" + long);
}

// to show the errors
function showError(x){
    switch (x.code){
        case 0:
            alert(x.message);
            break;
        case 1:
            alert(x.message);
            break;
        case 2:
            alert(x.message);
            break;
        case 3:
            alert(x.message);
            break;
    }
}
const options={
    enableHighAccuracy: true
}