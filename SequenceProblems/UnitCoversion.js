const FEET_IN_INCH=12;
let numberOfInch=42;
let conversionRatio = 1/FEET_IN_INCH;
let numberOfFeet= numberOfInch*conversionRatio;
console.log("Number of feet:- "+numberOfFeet);
//b. Rectangular Plot of 60 feet x 40 feet in meters.
let areaInFeet =2400;
const FEETSQ_TO_METERSQ = 0.3048*0.3048;
let areaInMeters = parseInt(areaInFeet*FEETSQ_TO_METERSQ);
console.log("Area in meters:- " + areaInMeters);
//c. Calculating area of 25 such plots.
let area = areaInMeters*25;
console.log("Area in meters  for 25 plots:- "+area);