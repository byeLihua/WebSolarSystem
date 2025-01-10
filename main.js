//Keplerian compute
const JPLKeplerianElements = [              //from https://ssd.jpl.nasa.gov/planets/approx_pos.html
    {
        "name"  : "Mercury",
        "a"     : 0.38709927,
        "aRate" : 0.00000037,
        "e"     : 0.20563593,
        "eRate" : 0.00001906,
        "i"     : 7.00497902,
        "iRate" : -0.00594749,
        "l"     : 252.25032350,
        "lRate" : 149472.67411175,
        "lp"    : 77.45779628,
        "lpRate": 0.16047689,
        "ln"    : 48.33076593,
        "lnRate": -0.12534081,
    },
    {
        "name"  : "Venus",
        "a"     : 0.72333566,
        "aRate" : 0.00000390,
        "e"     : 0.00677672,
        "eRate" : -0.00004107,
        "i"     : 3.39467605,
        "iRate" : -0.00078890,
        "l"     : 181.97909950,
        "lRate" : 58517.81538729,
        "lp"    : 131.60246718,
        "lpRate": 0.00268329,
        "ln"    : 76.67984255,
        "lnRate": -0.27769418,
    },
    {
        "name"  : "EMBary",
        "a"     : 1.00000261,
        "aRate" : 0.00000562,
        "e"     : 0.01671123,
        "eRate" : -0.00004392,
        "i"     : -0.00001531,
        "iRate" : -0.01294668,
        "l"     : 100.46457166,
        "lRate" : 35999.37244981,
        "lp"    : 102.93768193,
        "lpRate": 0.32327364,
        "ln"    : 0.0,
        "lnRate": 0.0,
    },
    {
        "name"  : "Mars",
        "a"     : 1.52371034,
        "aRate" : 0.00001847,
        "e"     : 0.09339410,
        "eRate" : 0.00007882,
        "i"     : 1.84969142,
        "iRate" : -0.00813131,
        "l"     : -4.55343205,
        "lRate" : 19140.30268499,
        "lp"    : -23.94362959,
        "lpRate": 0.44441088,
        "ln"    : 49.55953891,
        "lnRate": -0.29257343,
    },
    {
        "name"  : "Jupiter",
        "a"     : 5.20288700,
        "aRate" : -0.00011607,
        "e"     : 0.04838624,
        "eRate" : -0.00013253,
        "i"     : 1.30439695,
        "iRate" : -0.00183714,
        "l"     : 34.39644051,
        "lRate" : 3034.74612775,
        "lp"    : 14.72847983,
        "lpRate": 0.21252668,
        "ln"    : 100.47390909,
        "lnRate": 0.20469106,
    },
    {
        "name"  : "Saturn",
        "a"     : 9.53667594,
        "aRate" : -0.00125060,
        "e"     : 0.05386179,
        "eRate" : -0.00050991,
        "i"     : 2.48599187,
        "iRate" : 0.00193609,
        "l"     : 49.95424423,
        "lRate" : 1222.49362201,
        "lp"    : 92.59887831,
        "lpRate": -0.41897216,
        "ln"    : 113.66242448,
        "lnRate": -0.28867794,
    },
    {
        "name"  : "Uranus",
        "a"     : 19.18916464,
        "aRate" : -0.00196176,
        "e"     : 0.04725744,
        "eRate" : -0.00004397,
        "i"     : 0.77263783,
        "iRate" : -0.00242939,
        "l"     : 313.23810451,
        "lRate" : 428.48202785,
        "lp"    : 170.95427630,
        "lpRate": 0.40805281,
        "ln"    : 74.01692503,
        "lnRate": 0.04240589,
    },
    {
        "name"  : "Neptune",
        "a"     : 30.06992276,
        "aRate" : 0.00026291,
        "e"     : 0.00859048,
        "eRate" : 0.00005105,
        "i"     : 1.77004347,
        "iRate" : 0.00035372,
        "l"     : -55.12002969,
        "lRate" : 218.45945325,
        "lp"    : 44.96476227,
        "lpRate": -0.32241464,
        "ln"    : 131.78422574,
        "lnRate": -0.00508664,
    }
];
let planets = [
    {
        "name"  : "Mercury",
        "x"     : 0,
        "y"     : 0,
        "z"     : 0,
        "longitude" : 0,
        "latitude"  : 0,
        "distance"  : 0,
        "a"     : 0,
        "e"     : 0,
        "i"     : 0,
        "l"     : 0,
        "lp"    : 0,
        "ln"    : 0
    },
    {
        "name"  : "Venus",
        "x"     : 0,
        "y"     : 0,
        "z"     : 0,
        "longitude" : 0,
        "latitude"  : 0,
        "distance"  : 0,
        "a"     : 0,
        "e"     : 0,
        "i"     : 0,
        "l"     : 0,
        "lp"    : 0,
        "ln"    : 0
    },
    {
        "name"  : "EMBary",
        "x"     : 0,
        "y"     : 0,
        "z"     : 0,
        "longitude" : 0,
        "latitude"  : 0,
        "distance"  : 0,
        "a"     : 0,
        "e"     : 0,
        "i"     : 0,
        "l"     : 0,
        "lp"    : 0,
        "ln"    : 0
    },
    {
        "name"  : "Mars",
        "x"     : 0,
        "y"     : 0,
        "z"     : 0,
        "longitude" : 0,
        "latitude"  : 0,
        "distance"  : 0,
        "a"     : 0,
        "e"     : 0,
        "i"     : 0,
        "l"     : 0,
        "lp"    : 0,
        "ln"    : 0
    },
    {
        "name"  : "Jupiter",
        "x"     : 0,
        "y"     : 0,
        "z"     : 0,
        "longitude" : 0,
        "latitude"  : 0,
        "distance"  : 0,
        "a"     : 0,
        "e"     : 0,
        "i"     : 0,
        "l"     : 0,
        "lp"    : 0,
        "ln"    : 0
    },
    {
        "name"  : "Saturn",
        "x"     : 0,
        "y"     : 0,
        "z"     : 0,
        "longitude" : 0,
        "latitude"  : 0,
        "distance"  : 0,
        "a"     : 0,
        "e"     : 0,
        "i"     : 0,
        "l"     : 0,
        "lp"    : 0,
        "ln"    : 0
    },
    {
        "name"  : "Uranus",
        "x"     : 0,
        "y"     : 0,
        "z"     : 0,
        "longitude" : 0,
        "latitude"  : 0,
        "distance"  : 0,
        "a"     : 0,
        "e"     : 0,
        "i"     : 0,
        "l"     : 0,
        "lp"    : 0,
        "ln"    : 0
    },
    {
        "name"  : "Neptune",
        "x"     : 0,
        "y"     : 0,
        "z"     : 0,
        "longitude" : 0,
        "latitude"  : 0,
        "distance"  : 0,
        "a"     : 0,
        "e"     : 0,
        "i"     : 0,
        "l"     : 0,
        "lp"    : 0,
        "ln"    : 0
    }
];
let zeroTime = new Date("2000-01-01T12:00:00.00Z");

function keplerianCompute(){                //from https://ssd.jpl.nasa.gov/planets/approx_pos.html
    //time
    let t = (date.getTime() - zeroTime.getTime()) / (36525 * 24 * 60 * 60 * 1000);

    //compute
    let numberOmega = 0;
    let numberM = 0;
    let numberE = 0;
    let xx = 0;
    let yy = 0;
    let xECL = 0;
    let yECL = 0;
    let zECL = 0;
    const numberEpsilon = 23.43928;
    for (let i = 0; i < 8; i++) {
        //KeplerianElements
        planets[i].a = JPLKeplerianElements[i].a + JPLKeplerianElements[i].aRate * t;
        planets[i].e = JPLKeplerianElements[i].e + JPLKeplerianElements[i].eRate * t;
        planets[i].i = JPLKeplerianElements[i].i + JPLKeplerianElements[i].iRate * t;
        planets[i].l = JPLKeplerianElements[i].l + JPLKeplerianElements[i].lRate * t;
        planets[i].lp = JPLKeplerianElements[i].lp + JPLKeplerianElements[i].lpRate * t;
        planets[i].ln = JPLKeplerianElements[i].ln + JPLKeplerianElements[i].lnRate * t;

        numberOmega = planets[i].lp - planets[i].ln;
        numberM = planets[i].l - planets[i].lp;

        if(numberM > -180) numberM = (numberM + 180) % 360 -180;
        else numberM = (numberM - 180) % 360 + 180;

        numberE = soluteKeplerEquation(numberM, planets[i].e);

        //position
        xx = planets[i].a * (dcos(numberE) - planets[i].e);
        yy = planets[i].a * Math.sqrt(1 - planets[i].e * planets[i].e) * dsin(numberE);

        xECL = (dcos(numberOmega) * dcos(planets[i].ln) - dsin(numberOmega) * dsin(planets[i].ln) * dcos(planets[i].i)) * xx + (-1 * dsin(numberOmega) * dcos(planets[i].ln) - dcos(numberOmega) * dsin(planets[i].ln) * dcos(planets[i].i)) * yy;
        yECL = (dcos(numberOmega) * dsin(planets[i].ln) + dsin(numberOmega) * dcos(planets[i].ln) * dcos(planets[i].i)) * xx + (-1 * dsin(numberOmega) * dsin(planets[i].ln) + dcos(numberOmega) * dcos(planets[i].ln) * dcos(planets[i].i)) * yy;
        zECL = dsin(numberOmega) * dsin(planets[i].i) * xx + dcos(numberOmega) * dsin(planets[i].i) * yy;
        planets[i].x = xECL;
        planets[i].y = dcos(numberEpsilon) * yECL - dsin(numberEpsilon) * zECL;
        planets[i].z = dsin(numberEpsilon) * yECL + dcos(numberEpsilon) * zECL;

        //equatorial spherical coordinate, EMBary center
        if(planets[i].name == "EMBary")
        {
            planets[i].distance = 0;
            planets[i].longitude = 0;
            planets[i].latitude = 0;
        }
        else
        {
            planets[i].distance = Math.sqrt((planets[i].x - planets[2].x) * (planets[i].x - planets[2].x) + (planets[i].y - planets[2].y) * (planets[i].y - planets[2].y) + (planets[i].z - planets[2].z) * (planets[i].z - planets[2].z));
            planets[i].longitude = Math.atan2(planets[i].y - planets[2].y, planets[i].x - planets[2].x) * 180 / Math.PI;
            planets[i].latitude = Math.asin((planets[i].z - planets[2].z) / planets[i].distance) * 180 / Math.PI;

            planets[i].longitude = (planets[i].longitude + 360) % 360;
        }
    }

    updateTable();
}

function soluteKeplerEquation(M, e){
    let E = 0;
    let lastE = 0;
    const ee = 180 / Math.PI * e;

    E = M + ee * dsin(M);

    for(let counter = 0; counter < 100; counter++)
    {
        lastE = E;
        E = E + (M - E + ee * dsin(E))/(1 - e * dcos(E));

        if(E - lastE <= 1e-6 && lastE - E <= 1e-6)
            return E;
    }
    return 0;
}

function dsin(x){return Math.sin(x * Math.PI / 180);}
function dcos(x){return Math.cos(x * Math.PI / 180);}

//time input
let inputDate = document.querySelector("#inputDate");
let inputTime = document.querySelector("#inputTime");
let selectTimezone = document.querySelector("#selectTimezone");
let checkboxNow = document.querySelector("#checkboxNow");
let spanUTC = document.querySelector("#spanUTC");
let date = new Date();
let timerID = 0;

checkboxNow.checked = false;
setToNow();

inputDate.addEventListener("change", inputTimeCallback);
inputTime.addEventListener("change", inputTimeCallback);
selectTimezone.addEventListener("change", inputTimeCallback);
checkboxNow.addEventListener("change", checkboxNowCallback);

function setToNow(){
    date.setTime(Date.now());
    date.setTime(date.getTime() - date.getTime() % 1000);
    inputDate.valueAsNumber = date.getTimezoneOffset() * (-60 * 1000) + date.getTime() - date.getTime() % (24 * 60 * 60 * 1000);
    inputTime.valueAsNumber = (date.getTimezoneOffset() * (-60 * 1000) + date.getTime()) % (24 * 60 * 60 * 1000);
    selectTimezone.value = date.getTimezoneOffset() / -60;
    spanUTCUpdate();

    keplerianCompute();
}

function inputTimeCallback(){
    date.setTime(inputDate.valueAsNumber + inputTime.valueAsNumber - selectTimezone.value * (60 * 60 * 1000));
    spanUTCUpdate();

    keplerianCompute();
}

function checkboxNowCallback(){
    if(checkboxNow.checked){
        inputDate.disabled = true;
        inputTime.disabled = true;
        selectTimezone.disabled = true;

        setToNow();
        timerID = setInterval(setToNow, 1000);
    }
    else{
        inputDate.disabled = false;
        inputTime.disabled = false;
        selectTimezone.disabled = false;

        clearInterval(timerID);
    }
}

function spanUTCUpdate(){
    spanUTC.textContent = date.toUTCString();
}

//display table
function updateTable(){
    for (let i = 0; i < 8; i++) {
        let accuracyLambda = 0;
        let accuracyPhi = 0;
        let accuracyRho = 0;

        document.querySelector("#td" + planets[i].name + "X").textContent = planets[i].x.toFixed(10);
        document.querySelector("#td" + planets[i].name + "Y").textContent = planets[i].y.toFixed(10);
        document.querySelector("#td" + planets[i].name + "Z").textContent = planets[i].z.toFixed(10);

        switch (planets[i].name) {
            case "Mercury": accuracyLambda = 2; accuracyPhi = 3; accuracyRho = 5; break;
            case "Venus":   accuracyLambda = 2; accuracyPhi = 3; accuracyRho = 4; break;
            case "EMBary":  accuracyLambda = 0; accuracyPhi = 0; accuracyRho = 0; break;
            case "Mars":    accuracyLambda = 1; accuracyPhi = 3; accuracyRho = 3; break;
            case "Jupiter": accuracyLambda = 0; accuracyPhi = 2; accuracyRho = 2; break;
            case "Saturn":  accuracyLambda = 0; accuracyPhi = 2; accuracyRho = 2; break;
            case "Uranus":  accuracyLambda = 1; accuracyPhi = 3; accuracyRho = 2; break;
            case "Neptune": accuracyLambda = 2; accuracyPhi = 3; accuracyRho = 2; break;
            default:
        }

        document.querySelector("#td" + planets[i].name + "Lambda").textContent = planets[i].longitude.toFixed(accuracyLambda);
        document.querySelector("#td" + planets[i].name + "Phi").textContent = planets[i].latitude.toFixed(accuracyPhi);
        document.querySelector("#td" + planets[i].name + "Rho").textContent = planets[i].distance.toFixed(accuracyRho);
    }
}
