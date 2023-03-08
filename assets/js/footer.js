const timeWrapper = document.querySelector('#time');
const locationWrapper = document.querySelector('#location');
const currentYearWrapper = document.querySelector('#current-year');

currentYearWrapper.innerHTML = new Date().getFullYear().toString();

navigator.geolocation.getCurrentPosition(position => {
    fetch(`http://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&addressdetails=1`)
        .then(response => response.json())
        .then(data => {
            locationWrapper.innerHTML = data.address.amenity;
        })
        .catch(error => console.error(error));
}, error => {
    locationWrapper.innerHTML = 'Location not available';
});

updateTime();
setInterval(() => updateTime(), 1000);

function updateTime() {
    timeWrapper.innerHTML = new Date().toLocaleTimeString();
}