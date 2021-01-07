# bbcnews-ssb-epichrome
Instructions for using epichrome to create a site-specific browser for BBC News live video.

---

Creating a 'BBC News' live video browser app. (As at 2020-09-10 - subject to change as BBC updates their DOM of their webpages)

These instructions are for macOS - and has been tested on Catalina

This will allow you to create a site-specific browser app using an application called ```epichrome``` that opens right at the BBC News live video webpage, and begins playback. Thus allowing you to have the 'BBC News' app (or whatever you call it) be present on your desktop without interfering with your main web browser. It's as simple as opening the app to watch it, and closing it when you don't want to. 

* Check out the instructions for epichrome, and download the installation. - https://github.com/dmarmor/epichrome
* Install epichrome and run the installed epichrome app choosing the following options as you go...
  * "Click ok to select the name and location for the app." [OK]
  * In the file browser, you can put this application anywhere, I suggest just putting it in your Applications folder. I named mine as 'BBC News' but you can call it whatever you want.
  * The next request is to give your app a name - this appears in the title bar, so I just called it 'BBC News'. [OK]
  * "Choose app style" - so you should pick 'App Window' here. [App Window]
  * You then get to pick the URL - you'll want to put "https://www.bbc.co.uk/iplayer/live/bbcnews" here, but note that the more recent versions of epichrome won't immediately set that as the home page for the resulting app - and you'll need to set that up once the app is created. Don't worry about it at this point, just type that URL in and hit [OK]
  * "Register as a browser" - No. (you don't really want this app to accept URLs from other services)
  * "Do you want to provide a custom icon" - sure, you can if you want. I have a 'BBC News' icon here in this repo that you could use for that purpose. (BBC_News_2019.icns)
  * "Use built-in app engine...?" Yes - use the built-in 'Brave' option here, it works better for integration with mac OS in this case. It's almost an equivalent to Chrome, so it allows for Chrome Extensions. [Built-in (Brave)]
  * "Ready to create!" Check you've done everything you expected, and then let it build the app - click [Create].
  * Once the app has been created you'll be asked if you want to "Launch now" - do so (if you don't want to do it now, you can do it later).
* The new app launches (or launch it from where you created it if you didn't say 'Launch now' on the last step in epichrome) - now you'll want to configure the site-specific browser (SSB) app you've created. The steps to follow are:
  * When the app runs for the first time it's likely you'll get two browser tabs or two browser windows - epichrome will encourage you to install the 'epichrome helper' extension for chrome - for this case it's not really useful, but you can install it if you like.
  * In the other window/tab you may or may not have been taken to the original URL you gave above (https://www.bbc.co.uk/iplayer/live/bbcnews). If you did, then that's good as it's likely it's set as the default 'home' for the browser. Either way - I'd check the 'Preferences' (App Menu e.g. 'BBC News'... under which you'll see 'About Brave' and then 'Preferences'). Look under the 'Get Started' section - and the 'On Start-up' sub-section. I'd select 'Open a specific page or set of pages' - and then add a new page for the URL: "https://www.bbc.co.uk/iplayer/live/bbcnews". That way, the app should always open with the correct page.
  * Top tip: since this is a browser engine - it's using Brave (as I recommended), but it's similar if you used Chrome for this, you may want to consider disabling use "Hardware acceleration" on this application - you can find that in Preferences, look for 'Use hardware acceleration when available'. Basically - this could use more power and if you are using a portable Mac then that could be undesireable - and we're really not doing much here... decoding and presenting video is fine on the built in Intel Integrated Graphics units.
  * At this point. I'd close any extra tabs/windows leaving one open... then quit the app.
  * Wait until it's quit, then open it again and see if it visits the page you expect - https://www.bbc.co.uk/iplayer/live/bbcnews
  * Now you'll want to follow the next steps.
* In the app - you'll want to install two Chrome Extensions - "Stylus" and "Tampermonkey". In the app you'll want to open a new window, and browse to https://chrome.google.com/webstore/category/extensions - at time of writing the extensions were here:
  * Stylus - https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne
  * Tampermonkey - https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
  * Once you've installed these, you'll want to access their preference/dashboards and add a new 'Style' override for www.bbc.co.uk and a new userscript for Tampermonkey to apply on the same url.
  * The Stylus script is [styuls_bbcnews.css](styuls_bbcnews.css) - and this should be set to apply on www.bbc.co.uk
  * The Tampermonkey script is [tampermonkey_bbcnews.js](tampermonkey_bbcnews.js), and you can copy that into a new script in tampermonkey. When you create a new empty script in tampermonkey and paste this in, and File>Save, it should correctly set the name of the script and make it apply to the location https://www.bbc.co.uk/*
* Now close the extra window you opened, leaving the https://www.bbc.co.uk/iplayer/live/bbcnews window open. If you haven't already it's likely you need to sign-in or sign-up for a BBC Account to get the allow this to work automatically. Once you've signed in once, you can then resize the window a bit... then quit the app.
* The test! Now open the app - and you should correctly automatically visit the BBC News page, and the video should start after a few moments, and the video now fills the frame of the window that it's open in. So you can resize the window as you need.
* Another tip: you can use 'Picture-in-Picture' on there - the Brave browser engine supports that, so if you have the BBC News video playing, you can ask for it to do 'Picture-in-Picture'. So what? Well - if you do that then the video will hover over any other windows you might have open.