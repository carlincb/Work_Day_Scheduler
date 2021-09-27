// create a variable for the container div
// create a function to make a singular time block
    // create an html element each part of the time block
    // add saving and display of local storage to each time block
// write function to create a time block for each hour desired
// append that timeblock to the container div
function createTimeBlock(hour){
    var container = $(".container");
    var timeBlockDiv = $("<div>");
    var hoursDiv = $("<div>");
    var textArea = $("<textarea>");
    var saveBtn = $("<button>");
    var hourText = moment(hour.toString(), "h").format("hA");
    timeBlockDiv.addClass("row time-block");
    hoursDiv.addClass("hour col-md-1").append(hourText);
    textArea.addClass("description col-md-10").attr("id", hour);
    saveBtn.addClass("btn saveBtn col-md-1").append($("<i>").addClass("fas fa-save"));
    timeBlockDiv.append(hoursDiv).append(textArea).append(saveBtn);
    container.append(timeBlockDiv);
}