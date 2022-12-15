// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
 
  // Intl.DateTimeFormat().resolvedOptions().timeZone;

  // https://github.com/iamkun/dayjs/issues/1284
  dayjs.extend(dayjs_plugin_utc)
  dayjs.extend(dayjs_plugin_timezone)

  var guessedTimezone = dayjs.tz.guess()

  var defaultTimezone = 'Australia/Sydney'
  dayjs.tz.setDefault(defaultTimezone)

  var currentTime = dayjs().format("HH");
  // console.log(currentTime);
  // var currentTime = 11

  var dateTimeContainer = document.getElementById("currentDay");

  // jQuery
  var saveDivs = $("#time-block-container");
  console.log(saveDivs);

  // Colour-coding the time blocks based on past, present and future

  var timeSlots = document.getElementsByClassName("time-block");

  for (var i = 0; i < timeSlots.length; i++) {
    // console.log(currentTime);
    // console.log(typeof currentTime);
    if (timeSlots[i].getAttribute("data-24hr") < currentTime) {
      timeSlots[i].classList.add("past");
    } else if (timeSlots[i].getAttribute("data-24hr") > currentTime) {
      timeSlots[i].classList.add("future");
    } else if (timeSlots[i].getAttribute("data-24hr") == currentTime) {
      timeSlots[i].classList.add("present");
    }
  }
 
  // Intl.DateTimeFormat().resolvedOptions().timeZone;

  setInterval( function(){
    // dateTimeContainer.textContent = dayjs.tz.guess();
    dateTimeContainer.textContent = dayjs().tz(guessedTimezone).local().format(`dddd, D MMMM YYYY HH:mm:ss (ZZ)`)
    dateTimeContainer.textContent += ' '.concat(guessedTimezone)
  }, 1000);

  // document.getElementById("time-block-container")
  // you would have to use if() and limit to child elements of interest???
  // https://www.youtube.com/watch?v=pKzf80F3O0U&ab_channel=dcode
  // target.matches("")


  saveDivs.on("click", ".saveBtn", function (event) {
    activeTimeSlot = $(this).parent().attr("id");
    console.log(activeTimeSlot);

    // activeTextArea = document.querySelector(`div[data-24hr="${activeTimeSlot}"]>textarea`)
    var activeTextArea = $(this).siblings(".description").val();
    // https://stackoverflow.com/a/62872204/9095603
    console.log(activeTextArea);

    localStorage.setItem(activeTimeSlot, activeTextArea);

    // https://stackoverflow.com/a/59835127/9095603

    // Show save notification

    const myTimeout = setTimeout(showSaveNotification, 1000);
    saveNotfication.style.setProperty("display", "block");
    function showSaveNotification() {
      saveNotfication.style.setProperty("display", "none");
    }
  });

  $("#hour-9 .description").val(localStorage.getItem("09"));
  for (var i = 0; i < 17; i++) {
    $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i));
  }

  // DEFINE GUI SAVING SPINNER

  var saveNotfication = document.createElement("div");

  saveNotfication.setAttribute("id", "spinner-border text-light");
  saveNotfication.setAttribute("class", "save-notification");
  saveNotfication.style.setProperty("width", "200px");
  saveNotfication.style.setProperty("height", "75px");
  saveNotfication.style.setProperty("position", "fixed");
  saveNotfication.style.setProperty("top", "20px");
  saveNotfication.style.setProperty("right", "20px");
  saveNotfication.style.setProperty("background", "rgba(255,255,255)");
  saveNotfication.style.setProperty("display", "none");
  saveNotfication.textContent = "Saving...";
  document.getElementsByTagName("header")[0].appendChild(saveNotfication);
  saveNotfication.innerHTML = `
<div class="spinner-border text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="row">
<strong>Saving...</strong>
</div>
`;
});
