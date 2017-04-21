var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
// var firefox = require('selenium-webdriver/firefox');

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(/* ... */)
    .build();

driver.get('https://www.google.co.jp').then(function(){
  driver.quit();
});
