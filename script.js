var bookingTravelcounter = 0;
var bookingTravelledPath;
var bookingTravlledCoordinates = [];
var bookingCoordinates;
var map;
var bookingPath;
var startEndMarker;
var labels = 'SD';
var labelIndex = 0;
var carImageMarker;
var marker;

//===============================Map initializing function================================//
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: { lat: 30.7139, lng: 76.7024 },
        mapTypeId: 'terrain'
    });

    bookingCoordinates = [
        { lat: 30.7129, lng: 76.7093 },
        { lat: 30.7130, lng: 76.7086 },
        { lat: 30.7131, lng: 76.7080 },
        { lat: 30.7132, lng: 76.7074 },
        { lat: 30.7133, lng: 76.7068 },
        { lat: 30.7134, lng: 76.7061 },
        { lat: 30.7135, lng: 76.7054 },
        { lat: 30.7136, lng: 76.7048 },
        { lat: 30.7137, lng: 76.7042 },
        { lat: 30.7138, lng: 76.7036 },
        { lat: 30.7139, lng: 76.7024 },
        { lat: 30.7140, lng: 76.7018 },
        { lat: 30.7141, lng: 76.7016 },
        { lat: 30.7142, lng: 76.7014 },
        { lat: 30.7143, lng: 76.7011 },
        { lat: 30.7142, lng: 76.7008 },
        { lat: 30.7141, lng: 76.7004 },
        { lat: 30.7138, lng: 76.7000 },
        { lat: 30.7137, lng: 76.6997 },
        { lat: 30.7136, lng: 76.6993 },
        { lat: 30.7135, lng: 76.6990 },
    ];

    bookingPath = new google.maps.Polyline({
        path: bookingCoordinates,
        geodesic: true,
        strokeColor: '#000000',
        strokeOpacity: 0.5,
        strokeWeight: 5
    });

    bookingPath.setMap(map);

    startEndMarker = [
        { position: new google.maps.LatLng(30.7135, 76.6990) },
        { position: new google.maps.LatLng(30.7129, 76.7093) }
    ];

    for (let i = 0; i < startEndMarker.length; i++) {
        marker = new google.maps.Marker({
            position: startEndMarker[i].position,
            label: labels[labelIndex++ % labels.length],
            map: map
        });
    };

    carImageMarker = new google.maps.Marker({
        position: startEndMarker[0].position,
        icon: 'car.png',
        map: map
    });
};

//=========================================Vehicle Marker Movement Function========================================//
function changeMarkerPosition(carImageMarker) {
    bookingTravelcounter++;
    for (let j = bookingCoordinates.length - bookingTravelcounter; j >= 0; j--) {
        var latlng = new google.maps.LatLng(bookingCoordinates[j].lat, bookingCoordinates[j].lng);
        carImageMarker.setPosition(latlng);
        bookingTravlledCoordinates.push({
            lat: bookingCoordinates[j].lat,
            lng: bookingCoordinates[j].lng
        });
        bookingTravelledPath = new google.maps.Polyline({
            path: bookingTravlledCoordinates,
            geodesic: true,
            strokeColor: '#000000',
            strokeOpacity: 1.0,
            strokeWeight: 5
        });
        bookingTravelledPath.setMap(map);
        break;
    }
};

setInterval(function () {
    changeMarkerPosition(carImageMarker);
}, 2000);