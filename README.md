# react-native-rfid-handle
RFID component for react native, only works Android.
If you find this package useful hit the star with <3


## Installation
### Step 1 ###

```bash
yarn add https://github.com/LongNguyen2312/react-native-rfid-handle.git
```

### Step2 ###

Refers to your JS files
```javascript
  import rfidModule from 'react-native-rfid-handle';
```

## Usage and APIs ##

### Scan devices BLE ###

```javascript
  rfidModule.ScanBLE()
```

### Stop scan devices BLE ###

```javascript
  rfidModule..stopScanBLE()
```

### Connect devices BLE ###

```javascript
   rfidModule.connectAddress('address').then(res => {
     // res is divices infomation connected
    });
```

### Start read RFID ###

```javascript
  rfidModule..startScanRFID()
```

### Stop read RFID ###

```javascript
  rfidModule.stop()
```

### Clear RFID ###

```javascript
  rfidModule.clearData().then(res => {
    //res == true =>  done
    //res != true =>  fail
  })
```

## EVENT LISTENER ##

### Listen devices infomation BLE ##

```javascript
  DeviceEventEmitter.addListener('ScanBLEListenner', res => {
    // res is the information of a device when found
  })
```

### Listen RFID ##

```javascript
  DeviceEventEmitter.addListener('ReadRFIDListenner', res => {
    // res is the information of a RFID tag when found
  })
```
