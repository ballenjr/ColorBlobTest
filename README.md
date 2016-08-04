# ColorBlobTest
This app is simply for testing the cordova-plugin-colorblobselector. It will serve as the baseline/demonstration for using the plugin in the future as well.

### Prerequisites
- Java 1.7+
- Android SDK/Build Tools
- NodeJS
 - npm globals:
  - bower
  - gulp
  - cordova 6.1+
- 

### To get started:
- Clone the repos
```
git clone https://github.com/ballenjr/ColorBlobTest.git;
git clone https://github.com/ballenjr/cordova-plugin-colorblobselector.git;
cd ColorBlobTest;
```
- For now you will need to edit the config.xml file to direct the plugin reference to the absolute or relative path that you just put it in. Right now it is set to my relative path(../../git/ColorBlobPlugin), but soon it will point to the github repo and I will change these instructions to match.
```
<plugin name="cordova-plugin-colorblobselector" spec="[Your Path Here]" />
```
- Init cordova and source files
```
gulp build;
cordova prepare;
cp build-extras.gradle platforms/android/build-extras.gradle
cordova run;
```

