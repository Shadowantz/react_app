require('chromedriver');
const webDriver = require('selenium-webdriver');
const driver = new webDriver.Builder().forBrowser('chrome').build();
const url = 'https://shadowantz.github.io/react_app/index.html';

function searchForBugs() {
	driver.get(url).then(() => {
		driver.findElement(webDriver.By.css('input .MuiInputBase-input'));
	});
}

searchForBugs();
