/*
function saveTabs() {
    browser.tabs.query({
        currentWindow: true,
        active: true
    }).then(sendSave).catch(onError);
}

function loadTabs() {
    window.alert("loading!");
}



function sendSave(tabs) {
    for (let tab of tabs) {
        browser.tabs.sendMessage(
            tab.id,
            {greeting: "saving!"}
        ).catch(onError);
    }
}


function onError(error) {
    console.error(`Error: ${error}`);
  }
*/
document.getElementById("save").addEventListener("click", saveTabs);
document.getElementById("restore").addEventListener("click", loadTabs());

function saveTabs(){
    console.log("S A V I N G");
}
function loadTabs(){
    console.log("L O A D I N G");
}