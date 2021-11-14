const {InfluxDB} = require('@influxdata/influxdb-client');

const token = 'AeDOfpLlCicWAhcFfEWTZ5QaAZ080J0QEg0QZwJjyPRwFSe75xuy_6_J-qEuqTNZZ-5UJhpR-6QJ8WT4yJnTLA==';
const org = 'test';
const bucket = 'test';

const client = new InfluxDB({url: 'http://localhost:8086', token: token});
const {Point} = require('@influxdata/influxdb-client');
const writeApi = client.getWriteApi(org, bucket);
writeApi.useDefaultTags({host: 'host1'});


    const point  = new Point('mem')
        .floatField('used_percent344', 23.43234543);
    writeApi.writePoint(point);
    writeApi
        .close()
        .then(() => {
            console.log('FINISHED')
        })
        .catch(e => {
            console.error(e);
            console.log('\\nFinished ERROR')
        });


