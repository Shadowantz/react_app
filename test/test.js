const webDriver = require('selenium-webdriver');

const driver = new webDriver.Builder().forBrowser('chrome').build();

function searchForBugs() {
	driver.get('https://shadowantz.github.io/react_app/index.html').then(() => {
		driver.findElement(webDriver.By.css('input .MuiInputBase-input'));
		// TODO: will move to jest and react test only because selenium-webdriver doesn't want to run in a CI environment...
	});
}

searchForBugs();
