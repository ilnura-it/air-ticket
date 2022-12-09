const calculateBtn = document.querySelector('#calculateBtn');
const baggageBtn = document.querySelector('#baggageBtn');

const timeDuration =['55 min', '40min', '1h 20min', '1h 10min', '2h 05min', '1h 30min', '30min', '1h 15min', '1h 25min', '45min', '2h 15min', '50min', '35min', '35min', '1h 40min'];

const timeOfTheFlight = ['08:00AM', '08:20AM', '09:00AM', '09:30AM', '10:00AM', '02:00PM', '04:00PM', '05:15PM', '06:45AM', '02:30AM', '01:45AM', '03:35AM', '11:25AM', '11:55PM', '07:45PM' ];

baggageBtn.addEventListener('click', showBaggageOptions);


function roundTripCheck(){
if (roundTrip.checked === true){
   document.querySelector('.roundTripCheck').style.display = "block";
} else if(oneWay.checked === true){
   document.querySelector('.roundTripCheck').style.display = "none";
}
else{
   document.querySelector('.roundTripCheck').style.display = "none";
}
}

roundTrip.addEventListener('click', roundTripCheck);
oneWay.addEventListener('click', roundTripCheck);

function showBaggageOptions(e){
   e.preventDefault();
   baggage.style.display = "block";
}

calculateBtn.addEventListener('click', calculateprice);

function calculateprice(e){
e.preventDefault();

const cityF = document.querySelector('#cityFrom');
const cityT = document.querySelector('#cityTo');
const cityFrom =document.querySelector('#cityFrom').value;
const cityTo =document.querySelector('#cityTo').value;
const classOfTheTrip = document.querySelector('#class').value;
const howManyPeople = document.querySelector('#howManyPeople').value;
const addBags = document.querySelector('#baggage');
const baggage = document.querySelector('#baggage').value;

const oneWay = document.querySelector('#oneWay');
const roundTrip = document.querySelector('#roundTrip');

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1;
if (mm < 10){mm = "0" + mm;
}
if (dd < 10){dd = "0" + dd;
}
let yyyy = today.getFullYear();
today = yyyy+'-'+mm+'-'+dd;

console.log(today);
let flightDate = document.querySelector('.oneWayDate').value;
let backFlightDate = document.querySelector('.roundWayDate').value;
console.log(flightDate);

//Conditions for SearchSection
if(cityFrom === cityTo){
   Swal.fire({
      icon: '',
      text: 'Please enter correct city!',
      customClass: "Custom_Cancel",
      confirmButtonColor: "#944F7A"
       })
   
}
else if (flightDate < today){
   Swal.fire({
      icon: '',
      text: 'Please enter correct flight dates!',
      customClass: "Custom_Cancel",
      confirmButtonColor: "#944F7A"
       })
}

else if(oneWay.checked === false && roundTrip.checked === false){
   Swal.fire({
      icon: '',
      text: 'Please select one way or round trip!',
      customClass: "Custom_Cancel",
      confirmButtonColor: "#944F7A"
       })
   }
   
else if(oneWay.checked === true && flightDate === ''){
   Swal.fire({
      icon: '',
      text: 'Please enter date!',
      customClass: "Custom_Cancel",
      confirmButtonColor: "#944F7A"
       })
       backFlightDate === "";
   }
else if((roundTrip.checked === true &&  backFlightDate === "" ) ||(roundTrip.checked === true && flightDate === '')){
   Swal.fire({
      icon: '',
      text: `Couldn't find flights without dates !`,
      customClass: "Custom_Cancel",
      confirmButtonColor: "#944F7A"
       })
}
else if (roundTrip.checked === true && backFlightDate < flightDate) {
   Swal.fire({
      icon: '',
      text: 'Please enter correct dates!',
      customClass: "Custom_Cancel",
      confirmButtonColor: "#944F7A"
       }) 
}
else if (howManyPeople === "" || howManyPeople <1) {
   Swal.fire({
      icon: '',
      text: 'Please enter number of people!',
      customClass: "Custom_Cancel",
      confirmButtonColor: "#944F7A"
       })
}

else{
   
//Formulas
amountCityDirection = parseInt(cityFrom) + parseInt(cityTo);
amountClassOfTheTrip = amountCityDirection * classOfTheTrip;
amountForPassengers = amountClassOfTheTrip * howManyPeople;
amountWithBaggage = amountForPassengers + parseInt(baggage);
amountPerPerson = amountWithBaggage/howManyPeople;

// toFixed
amountWithBaggage = amountWithBaggage.toFixed(2);
amountPerPerson = amountPerPerson.toFixed(2);

//Display Price
document.querySelector('.priceSection').style.display = "block";
document.querySelector('#price').textContent = amountWithBaggage;
document.querySelector('#pricePerPerson').textContent = amountPerPerson;

//Display flightDate
let d = moment (flightDate);
document.querySelector('.dateOfTheFlight').textContent = d.format('YYYY, MMMM DD');

//Display cities
let n = cityF.options.selectedIndex;
let displayCityFrom = cityF.options[n].text;
document.querySelector('.cityFromDisplay').textContent = displayCityFrom;

let b = cityT.options.selectedIndex;
let displayCityTo = cityT.options[b].text;
document.querySelector('.cityToDisplay').textContent = displayCityTo;

//Display fligh duration
if ((n === 1 && b === 2) || (n===2 && b===1)){
   document.querySelector('#duration').textContent = timeDuration[0];
   document.querySelector('#time').textContent = timeOfTheFlight[0];
   document.querySelector('#timeBack').textContent = timeOfTheFlight[14];
} else if ((n === 1 && b === 3) || (n===3 && b===1)){
   document.querySelector('#duration').textContent = timeDuration[1];
   document.querySelector('#time').textContent = timeOfTheFlight[1];
   document.querySelector('#timeBack').textContent = timeOfTheFlight[13];}
  else if ((n === 1 && b === 4) || (n===4 && b===1)){
     document.querySelector('#duration').textContent = timeDuration[2];
     document.querySelector('#time').textContent = timeOfTheFlight[2];
     document.querySelector('#timeBack').textContent = timeOfTheFlight[12];}
     else if ((n === 1 && b === 5) || (n===5 && b===1)){
        document.querySelector('#duration').textContent = timeDuration[3];
        document.querySelector('#time').textContent = timeOfTheFlight[3];
        document.querySelector('#timeBack').textContent = timeOfTheFlight[11];}
        else if ((n === 1 && b === 6) || (n===6 && b===1)){
           document.querySelector('#duration').textContent = timeDuration[4];
           document.querySelector('#time').textContent = timeOfTheFlight[4];
           document.querySelector('#timeBack').textContent = timeOfTheFlight[10];}
           else if ((n === 2 && b === 3)||(n===3 && b===2)){
              document.querySelector('#duration').textContent = timeDuration[5];
              document.querySelector('#time').textContent = timeOfTheFlight[5];
              document.querySelector('#timeBack').textContent = timeOfTheFlight[9];}
              else if ((n === 2 && b === 4) || (n===4 && b===2)){
              document.querySelector('#duration').textContent = timeDuration[6];
              document.querySelector('#time').textContent = timeOfTheFlight[6];
              document.querySelector('#timeBack').textContent = timeOfTheFlight[8];}
              else if ((n === 2 && b === 5) || (n===5 && b===2)){
                 document.querySelector('#duration').textContent = timeDuration[7];
                 document.querySelector('#time').textContent = timeOfTheFlight[7];
                 document.querySelector('#timeBack').textContent = timeOfTheFlight[6];}
                 else if ((n === 2 && b === 6) || (n===6 && b===2)){
                    document.querySelector('#duration').textContent = timeDuration[8];
                    document.querySelector('#time').textContent = timeOfTheFlight[8];
                    document.querySelector('#timeBack').textContent = timeOfTheFlight[7];}
                    else if ((n === 3 && b === 4) || (n===4 && b===3)){
                       document.querySelector('#duration').textContent = timeDuration[9];
                       document.querySelector('#time').textContent = timeOfTheFlight[9];
                       document.querySelector('#timeBack').textContent = timeOfTheFlight[5];}
                       else if ((n === 3 && b === 5) || (n===5 && b===3)){
                          document.querySelector('#duration').textContent = timeDuration[10];
                          document.querySelector('#time').textContent = timeOfTheFlight[10];
                          document.querySelector('#timeBack').textContent = timeOfTheFlight[4];}
                          else if ((n === 3 && b === 6) || (n===6 && b===3)){
                             document.querySelector('#duration').textContent = timeDuration[11];
                             document.querySelector('#time').textContent = timeOfTheFlight[11];
                             document.querySelector('#timeBack').textContent = timeOfTheFlight[2];}
                             else if ((n === 4 && b === 5) || (n===5 && b===4)){
                                document.querySelector('#duration').textContent = timeDuration[12];
                                document.querySelector('#time').textContent = timeOfTheFlight[12];
                                document.querySelector('#timeBack').textContent = timeOfTheFlight[2];}
                                else if ((n === 4 && b === 6) || (n===6 && b===4)){
                                   document.querySelector('#duration').textContent = timeDuration[13];
                                   document.querySelector('#time').textContent = timeOfTheFlight[13];
                                   document.querySelector('#timeBack').textContent = timeOfTheFlight[1];}
                                   else{
                                      document.querySelector('#duration').textContent = timeDuration[14];}

//Display bags
let c = addBags.options.selectedIndex;
let displayBaggage = addBags.options[c].text;
document.querySelector('#addBags').textContent = displayBaggage;

                                      
//Back Flight Info display
if (roundTrip.checked === true){
   document.querySelector('.backFlightInfo').style.display = "block";

   let a = moment (backFlightDate);
document.querySelector('.dateOfTheBackFlight').textContent = a.format('YYYY, MMMM DD');

document.querySelector('.cityBackFromDisplay').textContent = displayCityTo;
document.querySelector('.cityBackToDisplay').textContent = displayCityFrom;
}

}

}

