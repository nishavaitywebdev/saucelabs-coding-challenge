const initiate = (app) => {
    const plotPoints = [{
                    "start_time": "2017-10-29T04:56:12Z",
                    "status": "pass",
                    "duration": 126,
                }, {
                    "start_time": "2017-10-26T03:22:12Z",
                    "status": "error",
                    "duration": 205,
                }, {
                    "start_time": "2017-10-30T02:24:12Z",
                    "status": "fail",
                    "duration": 20,
                }, {
                    "start_time": "2017-10-31T02:24:12Z",
                    "status": "fail",
                    "duration": 20,
                }, {
                    "start_time": "2017-10-22T05:24:12Z",
                    "status": "pass",
                    "duration": 90,
                }, {
                    "start_time": "2017-10-23T06:24:12Z",
                    "status": "error",
                    "duration": 90,
                }, {
                    "start_time": "2017-10-24T03:22:12Z",
                    "status": "error",
                    "duration": 205,
                }, {
                    "start_time": "2017-10-25T02:24:12Z",
                    "status": "fail",
                    "duration": 20,
                },  {
                    "start_time": "2017-10-27T02:24:12Z",
                    "status": "fail",
                    "duration": 20,
                }, {
                    "start_time": "2017-11-27T05:24:12Z",
                    "status": "pass",
                    "duration": 90,
                }, {
                    "start_time": "2017-11-23T06:24:12Z",
                    "status": "error",
                    "duration": 90,
                }, {
                    "start_time": "2017-11-26T03:22:12Z",
                    "status": "error",
                    "duration": 205,
                }, {
                    "start_time": "2017-11-30T02:24:12Z",
                    "status": "fail",
                    "duration": 20,
                },  {
                    "start_time": "2017-11-21T02:24:12Z",
                    "status": "fail",
                    "duration": 20,
                }, {
                    "start_time": "2017-11-22T05:24:12Z",
                    "status": "pass",
                    "duration": 90,
                }, {
                    "start_time": "2017-11-20T06:24:12Z",
                    "status": "error",
                    "duration": 90,
                }, {
                    "start_time": "2017-11-28T14:12:12Z",
                    "status": "pass",
                    "duration": 200,
                }];
    app.get("/getPlotPoints",
        (req, res) => res.send({plotPoints: plotPoints})
    );
};

module.exports = {
  initiate,
};
