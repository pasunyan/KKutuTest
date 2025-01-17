/**
 * Rule the words! KKuTu Online
 * Copyright (C) 2017 JJoriping(op@jjo.kr)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

// 모듈 호출
const { Logging } = require('@google-cloud/logging');
const keyFilename = 'lib/sub/logging.json';
const logging = new Logging({ keyFilename });

const logName = 'kkutu';
const log = logging.log(logName);

//var colors = require('colors');

function callLog(text, severity) {
  var date = new Date();
  var o = {
    year: 1900 + date.getYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  }; //,i;

  for (var i in o) {
    if (o[i] < 10) o[i] = '0' + o[i];
    else o[i] = o[i].toString();
  }

  const logText = `[${o.year}-${o.month}-${o.date} ${o.hour}:${o.minute}:${o.second}] ${text}`;

  // Google Cloud Logging에 로그 기록
  const entry = log.entry({ severity: severity }, logText);
  log.write(entry, (err, apiResponse) => {
    if (err) {
      console.error('Error writing log entry:', err);
    } else {
      console.log(text);
    }
  });

  // 콘솔에 로그 출력
  console.log(logText);
}

exports.log = function (text) {
  callLog(text, 'DEBUG');
};

exports.info = function (text) {
  callLog(text, 'INFO');
};

exports.success = function (text) {
  callLog(text, 'NOTICE');
};

exports.alert = function (text) {
  callLog(text, 'NOTICE');
};

exports.warn = function (text) {
  callLog(text, 'WARNING');
};

exports.error = function (text) {
  callLog(text, 'CRITICAL');
};

/**
 * Rule the words! KKuTu Online
 * Copyright (C) 2017 JJoriping(op@jjo.kr)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

// 모듈 호출

// var colors = require('colors');

// function callLog(text){
// 	var date = new Date();
// 	var o = {
// 		year: 1900 + date.getYear(),
// 		month: date.getMonth() + 1,
// 		date: date.getDate(),
// 		hour: date.getHours(),
// 		minute: date.getMinutes(),
// 		second: date.getSeconds()
// 	}, i;
	
// 	for(i in o){
// 		if(o[i] < 10) o[i] = "0"+o[i];
// 		else o[i] = o[i].toString();
// 	}
// 	console.log("["+o.year+"-"+o.month+"-"+o.date+" "+o.hour+":"+o.minute+":"+o.second+"] "+text);
// }
// exports.log = function(text){
// 	callLog(text);
// };
// exports.info = function(text){
// 	callLog(text.cyan);
// };
// exports.success = function(text){
// 	callLog(text.green);
// };
// exports.alert = function(text){
// 	callLog(text.yellow);
// };
// exports.warn = function(text){
// 	callLog(text.black.bgYellow);
// };
// exports.error = function(text){
// 	callLog(text.bgRed);
// };