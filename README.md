# 05 Third-Party APIs: Work Day Scheduler

> Repository URL: https://github.com/ptrcao/05-Third-Party-APIs-02-Challenge.git

> Web app URL: https://ptrcao.github.io/05-Third-Party-APIs-02-Challenge/

## Project Description

A day scheduler powered by jQuery and Javascript.  Features include:
* A live day.js clock, which uses `setInterval`
* The app attempts to guess the user's local time, using `dayjs.tz.guess()`
* Allows the user to edit the daily schedule, and retains changes in localStorage until overriden
* A Bootstrap loading spinner, which is based on fixed CSS positioning and confirms the save action
* Colour-coding of the time slots based on past hours, current and future
* Includes a fallback contingency, in case day.js doesn't work, the app will fall back on JS-native Date() and getHours() functions


## Screenshot (animated GIF)

The following animation demonstrates the application functionality.
Note that the time was artificially set to 11am for the purposes of the demonstration, which was recorded after work hours, to show the color-coding.
A user clicks on slots on the color-coded calendar and edits the events.
<img style="display:block;" src="./Assets/Work Schedule_ Dec 15, 2022 11_39 PM.gif" alt="GIF demonstration">


## Acceptance Criteria


> GIVEN I am using a daily planner to create a schedule
> WHEN I open the planner
> THEN the current day is displayed at the top of the calendar

Implemented.

> WHEN I scroll down
> THEN I am presented with timeblocks for standard business hours

Implemented.

> WHEN I view the timeblocks for that day
> THEN each timeblock is color coded to indicate whether it is in the past, present, or future

Implemented.

> WHEN I click into a timeblock
> THEN I can enter an event

Implemented.

> WHEN I click the save button for that timeblock
> THEN the text for that event is saved in local storage

Implemented.

> WHEN I refresh the page
> THEN the saved events persist

Implemented.

> Uses a date utility library to work with date and time

Implemented, using `day.js` and associated libraries:

```
    <script src="https://cdn.jsdelivr.net/npm/dayjs@1.11.7/dayjs.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/dayjs@1.11.7/plugin/utc.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/dayjs@1.11.7/plugin/timezone.js"></script>

```