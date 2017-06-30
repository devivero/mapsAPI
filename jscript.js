//call api
const mapUri = "https://maps.googleapis.com/maps/api/geocode/json?latlng=47.6098048,-122.33480189999999&key=AIzaSyDGPZ47-w_ZMoIR_JJrcxPonmCJYpmvdQo"

let request = new XMLHttpRequest()
request.open("GET", mapUri, true)
request.onload = onloadFunc
request.onerror = onerrorFunc
request.send()

function onloadFunc(){
  const resp = JSON.parse(request.response)
  console.log(resp);
  if (resp.results.length > 0){
    document.getElementById("container").innerHTML = resp.results[0].formatted_address
  }
  else {
    console.log("Status is: "+resp.status);
  }
}

function onerrorFunc(){
  console.log("error message");
}
