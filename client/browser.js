const { detect } = require('detect-browser');
const browser = detect();

if(browser && browser.name === "ie"){
    console.log("Your browser is not supported!")
    location.href = "/ie.html"
}