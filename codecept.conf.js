const config = {
  tests: 'exampleTests/*_test.js',
  output: './output',
  helpers: {
		WebDriver: {
			url: 'https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login',
			browser: "chrome",
			windowSize: "maximize",
			host: "192.168.48.129",
			desiredCapabilities: {
				"selenoidOptions": {
					enableVNC: true,
					enableVideo: false,
				}
			}
		}
	},
	plugins: {
		// This plugin sets the video filename to <browser>_<testname>
		"selenoid_videoname": {
			require: "./plugins/selenoid_videoname",
			enabled: true
		}
	},
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
	name: 'CodeceptJSDemo',

	// Parallell execution with Chrome and Firefox
	multiple: {
		basic: {
			browsers: [
				{
					browser: "chrome",
					desiredCapabilities: {
						"selenoidOptions": {
							name: "Chrome Tests",
							enableVideo: true,
						}
					}
				},
				{
					browser: "firefox",
					desiredCapabilities: {
						"selenoidOptions": {
							name: "Firefox Tests",
							enableVideo: true,
						},
						"moz:firefoxOptions": {
							"args": ["--width=1920", "--height=1080"],
							"prefs": {
								"intl.accept_languages": "en-US,en"
							}
						},
					}
				}
			]
		}
	}
}


exports.config = config;