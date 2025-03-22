//init the interstitial 

var iAd;
cpmstarAPI(function (api) {
    //console.log("Setting iAD")
    iAd = new api.game.InterstitialView("interstitial");
    iAd.load();
    iAd.addEventListener("ad_opened", function (e) {
        iAdPause(); //Pause the game when ad is open 
    });

    iAd.addEventListener("ad_closed", function (e) {
        setTimeout(function () {
            iAdUnpause(); //Unpause when ad closed.  
        }, 700);
        iAd.load(); //Preload another ad. 
    });
});

function iAdPause() {

}
function iAdUnpause() {
    unityAdFinishedCallback()
}


function requestNewAd() {

}

// This function calls Unity to tell the ad finished
function unityAdFinishedCallback() {
    try {
        if (gameInstance)
            gameInstance.SendMessage('MainMenuManagers', 'OnWebCallback');
    }
    catch (error) {
        console.log(error);
    }
}