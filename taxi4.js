document.getElementById("header-main-1").style.display = "block"
document.getElementById("header-main-2").style.display = "none"
document.getElementById("header-main-3").style.display = "none"
document.getElementById("selecting-car-type").style.display = "block"
document.getElementById("hatchback-list").style.display = "none"
document.getElementById("sedan-list").style.display = "none"
document.getElementById("suv-list").style.display = "none"
document.getElementById("select-button").style.display="block"
document.getElementById("Booking").style.display = "block"
document.getElementById("error-message").style.display = "none"
document.getElementById("sucess-message").style.display = "none"
document.getElementById("bookedtable").style.display = "none"


//creating objects for cardata

const car = {
    hatch: {carname: ["Swift", "Tiago"], price: [100, 200]},
    sedan: {carname: ["Rapid", "Cruze"], price: [250, 350]},
    suv: {carname:["Innova", "Scorpio"], price: [500, 400]}
}

//selecting cartype slideshow

var slideIndex = 1;
showDivs(slideIndex)

function plusDivs(n)
{
  showDivs(slideIndex+=n)
}
function showDivs(n)
{
    var i;
    var images = document.getElementsByClassName("slideimage")
    if (n > images.length) {slideIndex = 1}
    if (n < 1){slideIndex = images.length}
    for (i = 0; i < images.length; i++)
    {
        images[i].style.display = "none"
    }
    images[slideIndex-1].style.display = "block"

}

function hatchSelect()
{
    document.getElementById("selecting-car-type").style.display = "block"
    document.getElementById("hatchback-list").style.display = "block"
    document.getElementById("header-main-2").style.display = "block"
    document.getElementById("header-main-1").style.display = "none"
    document.getElementById("header-main-3").style.display = "none"
    document.getElementById("sedan-list").style.display = "none"
    document.getElementById("suv-list").style.display = "none"
}
function sedanSelect()
{
    document.getElementById("selecting-car-type").style.display = "block"
    document.getElementById("sedan-list").style.display = "block"
    document.getElementById("header-main-2").style.display = "block"
    document.getElementById("header-main-1").style.display = "none"
    document.getElementById("header-main-3").style.display = "none"
    document.getElementById("hatchback-list").style.display = "none"
    document.getElementById("suv-list").style.display = "none"
}
function suvSelect()
{
    document.getElementById("selecting-car-type").style.display = "block"
    document.getElementById("suv-list").style.display = "block"
    document.getElementById("header-main-1").style.display = "none"
    document.getElementById("header-main-2").style.display = "block"
    document.getElementById("sedan-list").style.display = "none"
    document.getElementById("header-main-3").style.display = "display"
    document.getElementById("hatchback-list").style.display = "none"
}

//creating car name section in booking form

let carName = document.getElementById("nameField")
carName.value = ""

//selecting desired car
function swiftsel()
{
    document.getElementById("hatchback-2").style.border = "none"
    document.getElementById("hatchback-1").style.border = "2px solid blue"
    document.getElementById("select-button").style.display="block"
    carName.innerHTML = "Swift"
    carName.value = "Swift"

}
function tiagosel()
{
    document.getElementById("hatchback-1").style.border = "none"
    document.getElementById("hatchback-2").style.border = "2px solid blue"
    document.getElementById("select-button").style.display="block"

    carName.innerHTML = "Tiago"
    carName.value = "Tiago"
}
function rapidsel()
{
    document.getElementById("sedan-2").style.border = "none"
    document.getElementById("sedan-1").style.border = "2px solid blue"
    document.getElementById("select-button").style.display="block"
    carName.innerHTML = "Rapid"
    carName.value = "Rapid"
}
function chevysel()
{
    document.getElementById("sedan-1").style.border = "none"
    document.getElementById("sedan-2").style.border = "2px solid blue"
    document.getElementById("select-button").style.display="block"
    carName.innerHTML = "Cruze"
    carName.value = "Cruze"
}

function innovasel()
{
    document.getElementById("suv-2").style.border = "none"
    document.getElementById("suv-1").style.border = "2px solid blue"
    document.getElementById("select-button").style.display="block"
    carName.innerHTML = "Innova"
    carName.value = "Innova"
}
function scorpiosel()
{
    document.getElementById("suv-2").style.border = "2px solid blue"
    document.getElementById("suv-1").style.border="none"
    document.getElementById("select-button").style.display="block"
    carName.innerHTML = "Scorpio"
    carName.value = "Scorpio"
}

function carSelect() {
    document.getElementById("bookedtable").style.display = "block"
    document.getElementById("clear-button").style.display = "none"
    
}

//submitting function scripts

//  let bookedDetails = document.getElementById("booked-details")
//  let carNameBooked = document.createElement("span")
//  let cardepartureBooked = document.createElement("span")
//    let cararrivalBooked = document.createElement("span")
//    let linebreak = document.createElement("br")


//    bookedDetails.style.position = "absolute"
//    bookedDetails.style.left = "1100px"
//    cardepartureBooked.style.position = "relative"
//    cardepartureBooked.style.left = "10px"
//    cararrivalBooked.style.position = "relative"
//    cararrivalBooked.style.left = "20px"
   
//    bookedDetails.appendChild(carNameBooked)
//    bookedDetails.appendChild(cardepartureBooked)
//    bookedDetails.appendChild(cararrivalBooked)
//    bookedDetails.appendChild(linebreak)
  

 const bookingDetails = []
 
 const departure = document.querySelector(".date")
 const arrival = document.querySelector(".enddate")
 
let tableBody = document.getElementById("table_body")
let Row = document.createElement("tr")
tableBody.appendChild(Row)

 let bookedCararr = []

// using For loop and if else statement

//  function submit()
//  {
//     if((departure.value == arrival.value)|| (carName.value == "")||(departure.value == "")||(arrival.value == "")||(arrival.value < departure.value))
//     {
//         document.getElementById("selecting-car-type").style.display = "none"
//         document.getElementById("hatchback-list").style.display = "none"
//         document.getElementById("sedan-list").style.display = "none"
//         document.getElementById("suv-list").style.display = "none"
//         document.getElementById("select-button").style.display="none"
//         document.getElementById("Booking").style.display = "block"
//         document.getElementById("error-message").style.display = "block"
//         document.getElementById("sucess-message").style.display = "none"
//         document.getElementById("bookedtable").style.display = "none"
//     }
    
//     if (bookedCararr.length == 0)
//        { 
       
//        let  bookedCar =  { 
//             bookedCarName : carName.value,
//             bookedDepartureTime : departure.value,
//             bookedArrivalTime : arrival.value 
//         }

      
//         bookedCararr.push(bookedCar)

//         let array = []
//         array.push(bookedCar.bookedCarName)
//         array.push(bookedCar.bookedDepartureTime)
//         array.push(bookedCar.bookedArrivalTime)

//         for (i = 0; i < array.length; i++)
//         {
//         let Column = document.createElement("td")
//         Row.appendChild(Column)
//         Column.innerHTML += `${array[i]}`
//         }

        
//     }
//     else {
//         let carAlreadyBooked = false
      
//         for (let index = 0; index < bookedCararr.length; index++) {
//            if((bookedCararr[index].bookedCarName == carName.value)&&(bookedCararr[index].bookedDepartureTime == departure.value)&&(bookedCararr[index].bookedArrivalTime == arrival.value)||(((departure.value > bookedCararr[index].bookedDepartureTime)&&(departure.value < bookedCararr[index].bookedArrivalTime))||((arrival.value > bookedCararr[index].bookedDepartureTime)&&(arrival.value < bookedCararr[index].bookedArrivalTime))||((bookedCararr[index].bookedDepartureTime > departure.value)&&(bookedCararr[index].bookedDepartureTime < arrival.value))))
//             {
              
//                 carAlreadyBooked = true;
//             }
//         }
       
//         if (carAlreadyBooked == true)
//            { 
//         document.getElementById("selecting-car-type").style.display = "none"
//         document.getElementById("hatchback-list").style.display = "none"
//         document.getElementById("sedan-list").style.display = "none"
//         document.getElementById("suv-list").style.display = "none"
//         document.getElementById("select-button").style.display="none"
//         document.getElementById("Booking").style.display = "block"
//         document.getElementById("error-message").style.display = "none"
//         document.getElementById("sucess-message").style.display = "block"
//         document.getElementById("bookedtable").style.display = "none"
//            }
//         else
       
//            {  let  bookedCar =  { 
//             bookedCarName : carName.value,
//             bookedDepartureTime : departure.value,
//             bookedArrivalTime : arrival.value 
            
//         }
//           bookedCararr.push(bookedCar)
        
//         let array = []
//         array.push(bookedCar.bookedCarName)
//         array.push(bookedCar.bookedDepartureTime)
//         array.push(bookedCar.bookedArrivalTime)

//         let Row1 = document.createElement("tr")
//         tableBody.appendChild(Row1)

//         for (i = 0; i < array.length; i++)
//         {
//         let Column = document.createElement("td")
//         Row1.appendChild(Column)
//         Column.innerHTML += `${array[i]}`
//         }
//             }

       
       
//     }


//  }

//Foreach Method 

// function submit()
// {
//     if((departure.value == arrival.value)|| (carName.value == "")||(departure.value == "")||(arrival.value == "")||(arrival.value < departure.value))
//     {
//         document.getElementById("selecting-car-type").style.display = "none"
//         document.getElementById("hatchback-list").style.display = "none"
//         document.getElementById("sedan-list").style.display = "none"
//         document.getElementById("suv-list").style.display = "none"
//         document.getElementById("select-button").style.display="none"
//         document.getElementById("Booking").style.display = "block"
//         document.getElementById("error-message").style.display = "block"
//         document.getElementById("sucess-message").style.display = "none"
//         document.getElementById("bookedtable").style.display = "none"
//     }

//     if (bookedCararr.length == 0 )
//     {

//     let bookedCar = {
//         bookedCarName: carName.value,
//         bookedDepartureTime: departure.value,
//         bookedArrivalTime: arrival.value
//     }
    
//     bookedCararr.push(bookedCar)

//     let array = []
//         array.push(bookedCar.bookedCarName)
//         array.push(bookedCar.bookedDepartureTime)
//         array.push(bookedCar.bookedArrivalTime)

//         for (i = 0; i < array.length; i++)
//         {
//         let Column = document.createElement("td")
//         Row.appendChild(Column)
//         Column.innerHTML += `${array[i]}`
//         }
//     } 
//     else {
//     let check = false
//     bookedCararr.forEach(checking)

//     function checking(item, index, arr)
//     {
//        if((item.bookedCarName == carName.value)&&(item.bookedDepartureTime == departure.value)&&(item.bookedArrivalTime==arrival.value)||(((departure.value > item.bookedDepartureTime)&&(departure.value < item.bookedArrivalTime))||((arrival.value > item.bookedDepartureTime)&&(arrival.value < item.bookedArrivalTime))||((item.bookedDepartureTime > departure.value)&&(item.bookedDepartureTime < arrival.value))))
//        {
//         check = true
//        }
//        if (check == true)
//        {
//         document.getElementById("selecting-car-type").style.display = "none"
//                 document.getElementById("hatchback-list").style.display = "none"
//                 document.getElementById("sedan-list").style.display = "none"
//                 document.getElementById("suv-list").style.display = "none"
//                 document.getElementById("select-button").style.display="none"
//                 document.getElementById("Booking").style.display = "block"
//                 document.getElementById("error-message").style.display = "none"
//                 document.getElementById("sucess-message").style.display = "block"
//                 document.getElementById("bookedtable").style.display = "none"
//        }      
//     }
//     if(check == false) 
//     {

//         let  bookedCar =  { 
//           bookedCarName : carName.value,
//           bookedDepartureTime : departure.value,
//           bookedArrivalTime : arrival.value 
//       }
//         bookedCararr.push(bookedCar)

//         let array = []
//       array.push(bookedCar.bookedCarName)
//       array.push(bookedCar.bookedDepartureTime)
//       array.push(bookedCar.bookedArrivalTime)

//       let Row1 = document.createElement("tr")
//       tableBody.appendChild(Row1)
//       for(item = 0; item < array.length; item++)
//       {
//       let Column = document.createElement("td")
//       Row1.appendChild(Column)
//       Column.innerHTML += `${array[item]}`
//      }
//     }

// }
// }

//using array filter method
// function submit()
// {
//     if((departure.value == arrival.value)|| (carName.value == "")||(departure.value == "")||(arrival.value == "")||(arrival.value < departure.value))
//         {
//             document.getElementById("selecting-car-type").style.display = "none"
//             document.getElementById("hatchback-list").style.display = "none"
//             document.getElementById("sedan-list").style.display = "none"
//             document.getElementById("suv-list").style.display = "none"
//             document.getElementById("select-button").style.display="none"
//             document.getElementById("Booking").style.display = "block"
//             document.getElementById("error-message").style.display = "block"
//             document.getElementById("sucess-message").style.display = "none"
//             document.getElementById("bookedtable").style.display = "none"
//         }

//     if(bookedCararr.length == 0)
//     {
//         let bookedCar = {
//             bookedCarName: carName.value,
//             bookedDepartureTime: departure.value,
//             bookedArrivalTime: arrival.value
//         }
//         bookedCararr.push(bookedCar)
//         let array = []
//         array.push(bookedCar.bookedCarName)
//         array.push(bookedCar.bookedDepartureTime)
//         array.push(bookedCar.bookedArrivalTime)

//         for (i = 0; i < array.length; i++)
//         {
//         let Column = document.createElement("td")
//         Row.appendChild(Column)
//         Column.innerHTML += `${array[i]}`
//         }
//     }
//     else
//     {
//       let check = false
//       bookedCararr.filter (car => {if((car.bookedCarName == carName.value)&&(car.bookedDepartureTime == departure.value)&&(car.bookedArrivalTime==arrival.value)||(((departure.value > car.bookedDepartureTime)&&(departure.value < car.bookedArrivalTime))||((arrival.value > car.bookedDepartureTime)&&(arrival.value < car.bookedArrivalTime))||((car.bookedDepartureTime > departure.value)&&(car.bookedDepartureTime < arrival.value)))) check = true })
//       if(check == true)
//       {
//         document.getElementById("selecting-car-type").style.display = "none"
//         document.getElementById("hatchback-list").style.display = "none"
//         document.getElementById("sedan-list").style.display = "none"
//         document.getElementById("suv-list").style.display = "none"
//         document.getElementById("select-button").style.display="none"
//         document.getElementById("Booking").style.display = "block"
//         document.getElementById("error-message").style.display = "none"
//         document.getElementById("sucess-message").style.display = "block"
//         document.getElementById("bookedtable").style.display = "none"
//       }
//       else {
//        let bookedCar = {
//         bookedCarName: carName.value,
//         bookedDepartureTime:departure.value,
//         bookedArrivalTime: arrival.value
//        }
//        bookedCararr.push(bookedCar)
//        let array = []
//              array.push(bookedCar.bookedCarName)
//              array.push(bookedCar.bookedDepartureTime)
//              array.push(bookedCar.bookedArrivalTime)
       
//              let Row1 = document.createElement("tr")
//              tableBody.appendChild(Row1)
//              for(item = 0; item < array.length; item++)
//              {
//              let Column = document.createElement("td")
//              Row1.appendChild(Column)
//              Column.innerHTML += `${array[item]}`
//             }
//       }
//     }

// }
function submit()
{
    if((departure.value == arrival.value)|| (carName.value == "")||(departure.value == "")||(arrival.value == "")||(arrival.value < departure.value))
        {
            document.getElementById("selecting-car-type").style.display = "none"
            document.getElementById("hatchback-list").style.display = "none"
            document.getElementById("sedan-list").style.display = "none"
            document.getElementById("suv-list").style.display = "none"
            document.getElementById("select-button").style.display="none"
            document.getElementById("Booking").style.display = "block"
            document.getElementById("error-message").style.display = "block"
            document.getElementById("sucess-message").style.display = "none"
            document.getElementById("bookedtable").style.display = "none"
        }

    if(bookedCararr.length == 0)
    {
        let bookedCar = {
            bookedCarName: carName.value,
            bookedDepartureTime: departure.value,
            bookedArrivalTime: arrival.value
        }
        bookedCararr.push(bookedCar)
        let array = []
        array.push(bookedCar.bookedCarName)
        array.push(bookedCar.bookedDepartureTime)
        array.push(bookedCar.bookedArrivalTime)

        for (i = 0; i < array.length; i++)
        {
        let Column = document.createElement("td")
        Row.appendChild(Column)
        Column.innerHTML += `${array[i]}`
        }
    }
    else
    {
     let check = bookedCararr.some(car => ((car.bookedCarName == carName.value)&&(car.bookedDepartureTime == departure.value)&&(car.bookedArrivalTime==arrival.value)||(((departure.value > car.bookedDepartureTime)&&(departure.value < car.bookedArrivalTime))||((arrival.value > car.bookedDepartureTime)&&(arrival.value < car.bookedArrivalTime))||((car.bookedDepartureTime > departure.value)&&(car.bookedDepartureTime < arrival.value)))))
      if(check == true)
      {
        document.getElementById("selecting-car-type").style.display = "none"
        document.getElementById("hatchback-list").style.display = "none"
        document.getElementById("sedan-list").style.display = "none"
        document.getElementById("suv-list").style.display = "none"
        document.getElementById("select-button").style.display="none"
        document.getElementById("Booking").style.display = "block"
        document.getElementById("error-message").style.display = "none"
        document.getElementById("sucess-message").style.display = "block"
        document.getElementById("bookedtable").style.display = "none"
      }
      else {
       let bookedCar = {
        bookedCarName: carName.value,
        bookedDepartureTime:departure.value,
        bookedArrivalTime: arrival.value
       }
       bookedCararr.push(bookedCar)
       let array = []
             array.push(bookedCar.bookedCarName)
             array.push(bookedCar.bookedDepartureTime)
             array.push(bookedCar.bookedArrivalTime)
       
             let Row1 = document.createElement("tr")
             tableBody.appendChild(Row1)
             for(item = 0; item < array.length; item++)
             {
             let Column = document.createElement("td")
             Row1.appendChild(Column)
             Column.innerHTML += `${array[item]}`
            }
      }
    }

}
function error()
{
    document.getElementById("selecting-car-type").style.display = "block"
        document.getElementById("hatchback-list").style.display = "none"
        document.getElementById("sedan-list").style.display = "none"
        document.getElementById("suv-list").style.display = "none"
        document.getElementById("select-button").style.display="block"
        document.getElementById("Booking").style.display = "block"
        document.getElementById("error-message").style.display = "none"
        document.getElementById("sucess-message").style.display = "none"
}

function sucess()
{
    document.getElementById("selecting-car-type").style.display = "block"
        document.getElementById("hatchback-list").style.display = "none"
        document.getElementById("sedan-list").style.display = "none"
        document.getElementById("suv-list").style.display = "none"
        document.getElementById("select-button").style.display="block"
        document.getElementById("Booking").style.display = "block"
        document.getElementById("error-message").style.display = "none"
        document.getElementById("sucess-message").style.display = "none"
}






 