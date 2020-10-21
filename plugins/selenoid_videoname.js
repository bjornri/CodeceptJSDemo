const event = require('codeceptjs').event;
const container = require('codeceptjs').container;
const recorder = require('codeceptjs').recorder;
const WebDriver = container.helpers('WebDriver');

// This plugin will set the video filename for Selenoid to
// the browser name plus name of the test being run
module.exports = function(config) {
  config = Object.assign({}, config);
	
	event.dispatcher.on(event.test.before, (test) => {
		const options = WebDriver.options;
		recorder.add('Settting selenoid capabilities', () => {
			options.capabilities["selenoid:options"].name = options.browser + ": " + test.title;
			options.capabilities["selenoid:options"].videoName = options.browser + "_" + test.title + '.mp4';
			WebDriver.options = options;
		});
	});
}