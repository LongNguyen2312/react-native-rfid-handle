/**
 * @format
 */

import {NativeModules} from 'react-native';

var RNrfidRFIDHandle = {
  // Scan devices bluetooth
  ScanBLE: function() {
    NativeModules.RfidAndroidNative.ScanBLE();
  },
  // Stop scan devices bludtooth
  stopScanBLE: function() {
    NativeModules.RfidAndroidNative.stopScanBLE();
  },
  // Start read RFID
  startScanRFID: function() {
    NativeModules.RfidAndroidNative.startScanRFID();
  },
  // Stop read RFID
  stop: function() {
    NativeModules.RfidAndroidNative.startScstopanRFID();
  },
  // Clear read RFID
  clearData: function() {
    NativeModules.RfidAndroidNative.clearData();
  },
};

export default RNrfidRFIDHandle;

