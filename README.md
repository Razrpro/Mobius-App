
# Mobius Dance App
Application for pupils of the dance studio "Mobius" by Natalia Tomashevskaya.

###  Release version of apps here:
https://apps.apple.com/ru/app/mobius-dance/id1543002599
https://play.google.com/store/apps/details?id=com.mobius.dance

###  Main features of the application:
- View the schedule
- getting a QR-code for attending classes
- learn important information about the activities in your group
- up-to-date information about the studio's achievements


#### Install steps

    npm i
	cd ios/ && pod install
    
Run for ios by opening Mobius.xcworkspace file and `Play`
Run for android devices:

    react-native run-android

For Release build:

    cd android
	./gradlew assembleRelease
	
#### Overview and Screenshots
<div style="display:flex;">
	<img src="https://mobius-dance.ru/appimg/1.png" height="400"/>
	<img src="https://mobius-dance.ru/appimg/2.png" height="400" style="margin-left: 10px;"/>
	<img src="https://mobius-dance.ru/appimg/3.png" height="400" style="margin-left: 10px;"/>
	<img src="https://mobius-dance.ru/appimg/4.png" height="400" style="margin-left: 10px;"/>
</div>