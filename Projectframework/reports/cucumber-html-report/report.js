$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/Testcase.feature");
formatter.feature({
  "line": 2,
  "name": "Jainbook Website",
  "description": "",
  "id": "jainbook-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@jainbookagency"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "",
  "description": "Login to the jainbookagency",
  "id": "jainbook-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TC01_Jainbook"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user open the jainbookagency Home page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user login using username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on the login button user nagivate to the next page",
  "keyword": "Then "
});
formatter.match({
  "location": "Jainbook_Login.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 15408374385,
  "status": "passed"
});
formatter.match({
  "location": "Jainbook_Login.the_user_open_the_jainbookagency_Home_page()"
});
formatter.result({
  "duration": 6060114747,
  "status": "passed"
});
formatter.match({
  "location": "Jainbook_Login.the_user_login_using_username_and_password()"
});
formatter.result({
  "duration": 71440974794,
  "status": "passed"
});
formatter.match({
  "location": "Jainbook_Login.click_on_the_login_button_user_nagivate_to_the_next_page()"
});
formatter.result({
  "duration": 3143736252,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027TRIVENI\u0027, ip: \u0027192.168.1.35\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\triveni\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:52558}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: cb87f984937101b0bb3773d770ea1e90\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"form1\"]/div[3]/header/div[2]/div/div[1]/div/ul/li/a/span[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.pages.Jainbook_Loginpage.submit(Jainbook_Loginpage.java:56)\r\n\tat com.Stepdefinition.Jainbook_Login.click_on_the_login_button_user_nagivate_to_the_next_page(Jainbook_Login.java:41)\r\n\tat ✽.Then click on the login button user nagivate to the next page(src/main/resources/feature/Testcase.feature:9)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "",
  "description": "Login and  Search book",
  "id": "jainbook-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@TC02_Jainbook"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user clicks advanced search",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the user fills the form",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks the search button then the user gets the searched book",
  "keyword": "Then "
});
formatter.match({
  "location": "Jainbook_Advancesearch.user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 12203327691,
  "status": "passed"
});
formatter.match({
  "location": "Jainbook_Advancesearch.the_user_clicks_advanced_search()"
});
formatter.result({
  "duration": 2452892157,
  "status": "passed"
});
formatter.match({
  "location": "Jainbook_Advancesearch.the_user_fills_the_form()"
});
formatter.result({
  "duration": 8127238650,
  "status": "passed"
});
formatter.match({
  "location": "Jainbook_Advancesearch.user_clicks_the_search_button_then_the_user_gets_the_searched_book()"
});
formatter.result({
  "duration": 3565566056,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "",
  "description": "Login and Add to cart",
  "id": "jainbook-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@TC03_Jainbook"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "the user clicks add to cart",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the user gets the cart details",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Jainbook_Addtocart.launch_the_chrome_application()"
});
formatter.result({
  "duration": 27831704203,
  "status": "passed"
});
formatter.match({
  "location": "Jainbook_Addtocart.the_user_clicks_add_to_cart()"
});
formatter.result({
  "duration": 10160495509,
  "status": "passed"
});
formatter.match({
  "location": "Jainbook_Addtocart.the_user_gets_the_cart_details()"
});
formatter.result({
  "duration": 8723996087,
  "status": "passed"
});
formatter.match({
  "location": "Jainbook_Addtocart.close_the_browser()"
});
formatter.result({
  "duration": 53119645528,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027TRIVENI\u0027, ip: \u0027192.168.1.35\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\triveni\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:52686}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 965d96313f9b6187492ef07ca6a2a101\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.pages.Jainbook_Addtocartpage.close_search(Jainbook_Addtocartpage.java:73)\r\n\tat com.Stepdefinition.Jainbook_Addtocart.close_the_browser(Jainbook_Addtocart.java:28)\r\n\tat ✽.Then Close the browser(src/main/resources/feature/Testcase.feature:25)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 27,
  "name": "",
  "description": "Login and click category",
  "id": "jainbook-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@TC04_Jainbook"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "launch chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the user clicks the categories",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "the user moves to any one element",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "the user click on add to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Jainbook_Categories.launch_chrome_application()"
});
formatter.result({
  "duration": 26268459112,
  "status": "passed"
});
formatter.match({
  "location": "Jainbook_Categories.the_user_clicks_the_categories()"
});
formatter.result({
  "duration": 1952161940,
  "status": "passed"
});
formatter.match({
  "location": "Jainbook_Categories.the_user_moves_to_any_one_element()"
});
formatter.result({
  "duration": 214620475,
  "error_message": "org.openqa.selenium.JavascriptException: javascript error: Failed to execute \u0027elementsFromPoint\u0027 on \u0027Document\u0027: The provided double value is non-finite.\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027TRIVENI\u0027, ip: \u0027192.168.1.35\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\triveni\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:52875}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5e4d4a3f9a185e660acaf15a5980300b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\tat com.pages.Jainbook_Categoriespages.category_cart(Jainbook_Categoriespages.java:58)\r\n\tat com.Stepdefinition.Jainbook_Categories.the_user_moves_to_any_one_element(Jainbook_Categories.java:27)\r\n\tat ✽.Then the user moves to any one element(src/main/resources/feature/Testcase.feature:31)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Jainbook_Categories.the_user_click_on_add_to_cart()"
});
formatter.result({
  "status": "skipped"
});
});