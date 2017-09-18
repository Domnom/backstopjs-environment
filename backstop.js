var backstopDataDir = __dirname + "/backstop_data/";

console.log('***** backstopDataDir', backstopDataDir);

module.exports = {
  "id": "backstop_default",
  "viewports": [
    {
      "label": "phone",
      "width": 320,
      "height": 480
    },
    {
      "label": "tablet",
      "width": 1024,
      "height": 768
    }
  ],
  "onBeforeScript": "casper/onBefore.js",
  "onReadyScript": "casper/onReady.js",
  "scenarios": [
    {
      "label": "BackstopJS Homepage",
      "cookiePath": "backstop_data/engine_scripts/cookies.json",
      "url": "https://garris.github.io/BackstopJS/",
      "referenceUrl": "",
      "readyEvent": "",
      "readySelector": "",
      "delay": 0,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "",
      "postInteractionWait": "",
      "selectors": [],
      "selectorExpansion": true,
      "misMatchThreshold" : 0.1,
      "requireSameDimensions": true
    }
  ],
  "paths": {
    "bitmaps_reference": backstopDataDir + "bitmaps_reference",
    "bitmaps_test": backstopDataDir + "bitmaps_test",
    "engine_scripts": backstopDataDir + "engine_scripts",
    "html_report": backstopDataDir + "html_report",
    "ci_report": backstopDataDir + "ci_report"
  },
  "report": ["browser"],
  "engine": "phantomjs",
  "casperFlags": [],
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 50,
  "debug": true,
  "debugWindow": false
}
