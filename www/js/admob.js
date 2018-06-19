
function adSetter(){
    alert(navigator.userAgent+"1st");
	alert("22"+/(android)/i.test(navigator.userAgent));
var admobid = {};
// select the right Ad Id according to platform
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-3940256099942544/6300978111',
        //interstitial: 'ca-app-pub-3670000423095472/5303732548'
    };
} // else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  //  admobid = { // for iOS
  //      banner: 'ca-app-pub-3940256099942544/6300978111',
  //      interstitial: 'ca-app-pub-6869992474017983/7563979554'
    //};
//} 
else {}

if(AdMob) AdMob.createBanner( {
    adId:admobid.banner, 
    position:AdMob.AD_POSITION.BOTTOM_CENTER, 
    autoShow:true} );

  

}

function adAndroidSetter(){
    alert(navigator.userAgent);
	alert("11"+/(android)/i.test(navigator.userAgent));
var admobid = {};
// select the right Ad Id according to platform
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-3940256099942544/6300978111',
        //interstitial: 'ca-app-pub-3670000423095472/5303732548'
    };
} //else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  //  admobid = { // for iOS
  //      banner: 'ca-app-pub-3940256099942544/6300978111',
  //      interstitial: 'ca-app-pub-3670000423095472/5303732548'
  //  };
//} 
else {}

if(AdMob) AdMob.createBanner( {
    adId:admobid.banner, 
    position:AdMob.AD_POSITION.BOTTOM_CENTER, 
    autoShow:true} );

  

}

  function onDeviceReady(){
  alert("device ready");
      adSetter();
	  adAndroidSetter();
  }

function backCall(e){
// pormt when back button is pressed on home screen
  e.preventDefault();
  var action=confirm("Do you want to Exit");
  if(action){
      if(AdMob) AdMob.showInterstitial();
      navigator.app.exitApp();
  }
}


function domLoaded(){

 document.addEventListener("deviceready", onDeviceReady, false);
 document.addEventListener("backbutton", backCall, false);
}