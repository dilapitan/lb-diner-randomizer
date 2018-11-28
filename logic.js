function start() {
  var diner_places = ["Mcdo", "KFC", "Jollibee", "Batchy", "Black and Brew", "Cadapan's", "Coop", "SU", "Chowking", "Searca", "711", "Tess and Ylloy's", "Ken's", "Hannah Rose", "Daniella's", "Ellen's", "Selena's", "Eatsumo", "Chelsea's"];
  var diner_places_length = diner_places.length;
  console.log(diner_places_length);
  var diner_index = Math.floor((Math.random() * diner_places_length));
  
  console.log("Where to eat: " + diner_places[diner_index]);
}
