"use strict";
var InfluxDB = require('@influxdata/influxdb-client').InfluxDB;
var token = 'AeDOfpLlCicWAhcFfEWTZ5QaAZ080J0QEg0QZwJjyPRwFSe75xuy_6_J-qEuqTNZZ-5UJhpR-6QJ8WT4yJnTLA==';
var org = 'test';
var bucket = 'test';
var client = new InfluxDB({ url: 'http://localhost:8086', token: token });
var Point = require('@influxdata/influxdb-client').Point;
var writeApi = client.getWriteApi(org, bucket);
writeApi.useDefaultTags({ host: 'host1' });
var point = new Point('mem')
    .floatField('used_percent344', 23.43234543);
writeApi.writePoint(point);
writeApi
    .close()
    .then(function () {
    console.log('FINISHED');
})
    .catch(function (e) {
    console.error(e);
    console.log('\\nFinished ERROR');
});
