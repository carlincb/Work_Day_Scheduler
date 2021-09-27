// Creating elements in the html and adding functionality to page.
function createTimeBlock(hour){
    // Creating variables to add elements to html file.
    var container = $(".container");
    var timeBlockDiv = $("<div>");
    var hoursDiv = $("<div>");
    var textArea = $("<textarea>");
    var saveBtn = $("<button>");

    // Using Moment.js to change the variable hour into a string of the time associated with that number.
    var hourText = moment(hour.toString(), "h").format("hA");

    // Using Bootstrap to format new content.
    timeBlockDiv.addClass("row time-block");
    hoursDiv.addClass("hour col-md-1").append(hourText);
    textArea.addClass("description col-md-10").attr("id", hour);
    saveBtn.addClass("btn saveBtn col-md-1").append($("<i>").addClass("fas fa-save"));
    timeBlockDiv.append(hoursDiv).append(textArea).append(saveBtn);
    container.append(timeBlockDiv);

    // Linking formatting for past, present, and future 
    if(parseInt(moment().format("H"))===hour){
        textArea.addClass("present");
    } else if(parseInt(moment().format("H"))>hour){
        textArea.addClass("past");
    } else {
        textArea.addClass("future");
    }
};

// Creating time block for each hour in the work day.
function init(){
    for(let i=8; i<=17; i++){
        // Excluding lunch time!
        if (i!=12){
            createTimeBlock(i); 
        };
    };

// Getting id of text area and value of text area and saving to local storage
$(".saveBtn").on("click", function(){
    var id = $(this).siblings("textarea").attr("id");
    var events = $(this).siblings("textarea").val();
    localStorage.setItem(id, events);
    console.log(id);
    console.log(events);
    console.log("connected");
});

// Getting values from local storage and populating text areas on page load.
$(".description").each(function(){
    var id = $(this).attr("id");
    var storedEvent = localStorage.getItem(id);
    $(this).val(storedEvent);
});
};

// Calling init function when page has fully loaded.
$(document).ready(init());