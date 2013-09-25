/**
 * @author Robert Chatfield, Josh Newman
 * Settings > main window
 * View
 */

var platformWidth = Ti.Platform.displayCaps.platformWidth;
var platformHeight = Ti.Platform.displayCaps.platformHeight;


// BOTTON TO SHOW SETTINGS
var showSettingsButton = Ti.UI.createButton({title: "Settings"});


/**
 * BUILD CONTAINER
 * COUNTAINER (MODAL: SHOW AND HIDE THIS)
 *   > NAVGROUP
 *     > EACH VIEW
 */

var settingsContainer = Ti.UI.createWindow({
	navBarHidden: true,
			 top: 0
});

var settingsMain = Ti.UI.createWindow({
	title: "Settings",
});

var settingsDoneButton = Ti.UI.createButton({systemButton:Titanium.UI.iPhone.SystemButton.DONE});
settingsMain.leftNavButton = settingsDoneButton;

/**
 * BUILD SETTING ROWS
 */
var settingMainRows = [];

var settingsRowSound = Ti.UI.createTableViewRow({
	   title: "Sound",
	hasChild: true
});
settingMainRows.push(settingsRowSound);

var settingsRowText = Ti.UI.createTableViewRow({
	   title: "Text",
	hasChild: true
});
settingMainRows.push(settingsRowText);

var settingsRowWeb = Ti.UI.createTableViewRow({
	   title: "Developer",
	hasChild: true
});
settingMainRows.push(settingsRowWeb);

var settingsTable = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	 data: settingMainRows
});
settingsMain.add(settingsTable);

/**
 * ADD GRAPHIC
 */

var logo = Ti.UI.createView({
	backgroundImage: 'images/settings_logo.png',
	center: {
		x: platformWidth / 2
	},
	bottom: 50,
	width: 100,
	height: 44
});
settingsMain.add(logo);

/**
 * BUILD WINDOWS + NAV>WINDOW
 */
var settingsNavGroup = Ti.UI.iPhone.createNavigationGroup({
	window: settingsMain,
	   top: 20
});
settingsContainer.add(settingsNavGroup);

var needsUpdate = false;

