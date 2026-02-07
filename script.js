async function run(e) {
    e.value = "Submitting...";
    e.disabled = true;
    const url = "https://script.google.com/macros/s/AKfycbzWSSTg-Wd-XQOmMNFHQ9LYU5gMCUJW-cjhvRqopQjvNWb49ae5ggYS0nWGOMuEggF7/exec"; // Please set your Web Apps URL here.
    const obj = await ParseFormObjectForGAS(e.parentNode, null, null, true);
    fetch(url, { method: "POST", body: JSON.stringify(obj) })
        .then((res) => res.json())
        .then((res) => console.log(res));
   

    // On completion, reset as needed
    e.value = "Submitted!";
    e.disabled = true;
    }

//Collapsable sections
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    
    // Check if it's currently expanded (has a max-height value set)
    if (content.style.maxHeight && content.style.maxHeight !== "0px") {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}