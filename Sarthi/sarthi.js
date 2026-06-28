document.addEventListener("DOMContentLoaded", function () {

  document.querySelector(".generate-plan").addEventListener("click", function (event) {
    let budget = document.querySelectorAll("input")[0].value;
    let guests = document.querySelectorAll("input")[1].value;
    let eventType = document.querySelectorAll("select")[0].value;
    let city = document.querySelectorAll("select")[1].value;
    let style = document.querySelectorAll("select")[2].value;
    if (!budget || !guests) {
      document.getElementById("resultBox").innerHTML =
        "⚠ Please enter budget and guest count";
      return;
    }
    let perPerson = budget / guests;
    let venue = budget * 0.4;
    let food = budget * 0.3;
    let decoration = budget * 0.2;
    let misc = budget * 0.1;
    document.getElementById("resultBox").innerHTML = `
      <h3>Event Plan</h3>
      <p><b>Event:</b> ${eventType}</p>
      <p><b>City:</b> ${city}</p>
      <p><b>Style:</b> ${style}</p>
      <hr>
      <p>Per Person Cost: ₹${perPerson}</p>
      <p>Venue: ₹${venue}</p>
      <p>Food: ₹${food}</p>
      <p>Decoration: ₹${decoration}</p>
      <p>Misc: ₹${misc}</p>
    `;
    document.getElementById("venueBar").style.width = "40%";
    document.getElementById("foodBar").style.width = "30%";
    document.getElementById("decorationBar").style.width = "20%";
    document.getElementById("miscBar").style.width = "10%";
    localStorage.setItem("budget", budget);
    localStorage.setItem("guests", guests);
    localStorage.setItem("city", city);
    localStorage.setItem("style", style);

  });

});
function goToPlanPage() {
    window.location.href = "plan.html";
}
function goToMainPlan() {
  window.location.href = "sarthi.html";
}