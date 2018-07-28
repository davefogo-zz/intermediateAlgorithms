// mapTheDebris.js

// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
/*
http://www.physicsclassroom.com/class/circles///Lesson-4/Mathematics-of-Satellite-Motion
*/

//i: arr of objects with name and avgAlt (averageAltitude)
//o: arr of objects with name and orbital period properties
//s: formula for acceleration =
// GM (force square kilometers) / (kilometers) (earthRadius + avgAlt)^2;
//sqrt[(3.1415pie)^2 * radius^3 / GM]

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447

  return arr.map(function(satellite) {
    var totalRadius = earthRadius + satellite.avgAlt;
    var orbitalP = Math.round(
      Math.sqrt(
        4 * Math.PI**2 * totalRadius**3 / GM
      )
    );

    return {name: satellite.name, orbitalPeriod: orbitalP}
  })
}

console.log(orbitalPeriod([
  {name : "sputnik", avgAlt : 35873.5553}
]));// should return [{name: "sputnik", orbitalPeriod: 86400}].
console.log(orbitalPeriod([
  {name: "iss", avgAlt: 413.6},
  {name: "hubble", avgAlt: 556.7},
  {name: "moon", avgAlt: 378632.553}
]));// should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]