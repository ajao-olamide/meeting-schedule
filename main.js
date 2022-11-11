function jobDetails() {
  let time = prompt("What is the time the meeting is scheduled for?");
  let person = prompt("Who are you having the meeting with?");
  let place = prompt("where is the meeting gonna take place?");
  let h1 = document.createElement("h1");
  let textAnswer = document.createTextNode(
    "You have a meeting by " +
      time +
      " with " +
      person +
      " which will take place at " +
      place + '.'
  );
  h1.setAttribute("id", "jobDetails");
  h1.appendChild(textAnswer);
  document.getElementById("text-div").appendChild(h1);
}
function anotherJobDetails() {
    let time = prompt("What is the time the meeting is scheduled for?");
    let person = prompt("Who are you having the meeting with?");
    let place = prompt("where is the meeting gonna take place?");
    let h1 = document.createElement("h1");
    let textAnswer = document.createTextNode(
      "You have another meeting by " +
        time +
        " with " +
        person +
        " which will take place at " +
        place + '.'
    );
    h1.setAttribute("id", "jobDetails");
    h1.appendChild(textAnswer);
    document.getElementById("text-div").appendChild(h1);
  }
function deleteSchedule() {
  document.getElementById("jobDetails", "anotherJobDetails").remove();
}
