# screenshot-native
Screenshots for NodeJS, blazingly fast and easy to use

Installing
```
yarn add sceenshot-native
or
npm i screenshot-native
```

Usage
```js
import { screenshot, getRegion, screenSize, encode, toURL } from 'screenshot-native'
or
const { screenshot, getRegion, screenSize, encode, toURL } = require('screenshot-native')
```
Get a region of the screen
```js
let screenshot = getRegion(0,0,100,100) //Will return raw screenshot data
let encoded = encode(screenshot,'png')
let base64 = toURL(encoded); // you can use this in browser
```

Get full screenshot
```js
let screenshot = screenshot() //Will return raw screenshot data
let encoded = encode(screenshot,'png')
let base64 = toURL(encoded); // you can use this in browser
```
