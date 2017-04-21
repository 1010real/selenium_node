// firefoxTest.js
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('firefox')
.build();

driver.get('https://www.google.co.jp').then(function(){
  driver.quit();
})
