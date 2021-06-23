var Number = readlineSync.questionInt("1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet. \nEnter Your Choice:- ");
switch (Number) {
    case 1:
        var Feet = readlineSync.questionInt("Enter a Feet:- ");
        let FeettoInch = Feet * 12;
        console.log("Inch:- " + FeettoInch);
        break;
    case 2:
        var Feet1 = readlineSync.questionInt("Enter a Feet:- ");
        let FeettoMeter = Feet1 * 0.3048;
        console.log("Meter:- " + FeettoMeter);
        break;
    case 3:
        var Inch = readlineSync.questionInt("Enter a Inch:- ");
        let InchtoFeet = Inch / 12;
        console.log("Feet:- " + InchtoFeet);
        break;
    case 4:
        var Meter2 = readlineSync.questionInt("Enter a Meter:- ");
        let MetertoFeet = Meter2 * 3.28;
        console.log("Feet:- " + MetertoFeet);
        break;

    default:
        break;
}
