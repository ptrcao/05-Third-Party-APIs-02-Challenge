// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


var currentTime = dayjs().format('HH')
console.log(currentTime)
// currentTime = 16

// currentDay = dayjs().format()
// console.log(currentDay)

timeSlots = document.getElementsByClassName("time-block")

for(var i = 0; i < timeSlots.length; i++){
  console.log(currentTime)
  console.log(typeof(currentTime))
  if (timeSlots[i].getAttribute('data-24hr') < currentTime){
    timeSlots[i].classList.add("past")
  }
  else if(timeSlots[i].getAttribute('data-24hr') > currentTime){
    timeSlots[i].classList.add("future")
  }
  else if(timeSlots[i].getAttribute('data-24hr') == currentTime){
    timeSlots[i].classList.add("present")
}
}

Intl.DateTimeFormat().resolvedOptions().timeZone;

var dateTimeContainer = document.getElementById("currentDay")
dateTimeContainer.textContent = dayjs().format("dddd, DD MMMM YYYY");


// document.getElementById("time-block-container")
// you would have to use if() and limit to child elements of interest???
// https://www.youtube.com/watch?v=pKzf80F3O0U&ab_channel=dcode
// target.matches("")


// Javascript
// var saveButtons = document.getElementsByClassName("fa-save")
// console.log(saveButtons)

// for(var i = 0; i < saveButtons.length; i++){
//   console.log(saveButtons[i])
//  saveButtons[i].addEventListener("click",function(event){

//   console.log(event)
//  })
// }

// jQuery
var saveDivs = $("#time-block-container")
console.log(saveDivs)





// var oldStorageValue = [];
saveDivs.on(
    "click",
    ".saveBtn",
    function(event) {

      // activeTimeSlot = event.target.parentElement.getAttribute("data-24hr")
      activeTimeSlot = $(this).parent().attr("id")
      // data-24hr
      console.log(activeTimeSlot)

      // activeTextArea = document.querySelector(`div[data-24hr="${activeTimeSlot}"]>textarea`)
      var activeTextArea = $(this).siblings(".description").val()
      // https://stackoverflow.com/a/62872204/9095603
      console.log(activeTextArea)
      
      
      
      // Get any previously stored tasks
      // oldStorageValue = JSON.parse(localStorage.getItem("dayschedule")) || []
      // Or this:
      // oldStorageValue = JSON.parse(localStorage.getItem("dayschedule") || []) 

      // https://reactgo.com/javascript-fix-unexpected-token-error/

      // https://stackoverflow.com/a/43762443/9095603

      // console.log('oldStorageValue: ' + oldStorageValue)

      // console.log('oldStorageValue: ' + typeof(oldStorageValue))
   
      
      // const index = array.indexOf(5);

      // You need to replace the equivalent old value, if it already exists - i.e. overwrite

      // oldStorageValue = JSON.parse(localStorage.getItem("dayschedule")) || []
      // if null, then return an empty array instead

      // How can I remove a specific item from an array?
      // https://stackoverflow.com/a/5767357/9095603
      
      // oldStorageValue.forEach(function(item,index,object) {
      //   if(item["timeslot"] = activeTimeSlot){
      //       object.splice(index,1);
      //   }
      // });
 // https://stackoverflow.com/a/24813338/9095603
     

      // oldStorageValue.push({ "timeslot" : activeTimeSlot, "savedtask" : activeTextArea.value})

      // oldStorageValue.timeslot = activeTimeSlot
      // , "savedtask" : activeTextArea.value})

      // newStorageValue = oldStorageValue
      // newStorageValue = JSON.stringify(newStorageValue)

      // localStorage.setItem("dayschedule",newStorageValue)
      localStorage.setItem(activeTimeSlot,activeTextArea)


      // https://stackoverflow.com/a/59835127/9095603
    }
  )

   $('#hour-9 .description').val(localStorage.getItem('09'))
 for(var i = 0; i < 17; i++){

    $('#hour-' + i + " .description").val(localStorage.getItem('hour-'+i))
  }
setTimeout()
  
// array of objects

// [
//   {
//     timeslot : ;
//     savedtask : ;
//   },
//   {
//     timeslot : ;
//     savedtask : ;
//   }
// ]


// $("#time-block-container").on(
//   "click",
//   ".time-block",
//   function click_fn(event) {
//     console.log("click")
//     var dataAttribute24hr = event.target.getAttribute('data-24hr')
//     console.log(dataAttribute24hr)

//   })

// setInterval( function(){
//   
//   dateTimeContainer.textContent = dayjs();
  
// }, 1000);


