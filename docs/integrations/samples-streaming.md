---
title: Continuous data streaming
---

## Prerequisites
* You have generated [API token in administration section](/docs/guides/administration/api-token).
* Existing project and scenario

## 1. Get JWT token from the backend service
At first, you need to log in with API token.

```
method=POST
url=http://IP_ADDRESS:5000/api/auth/login-with-token
body={ 
     "token": "<api_token>"
}
```

This request will return you a JWT token you will need in step 3.

## 2. Start a new test run
To start a new test run you need to send a request

```
method=POST
url=http://IP_ADDRESS:5000/api/projects/<project_name>/scenarios/<scenario_name>/items/start-async
body={
    environment: "my-test-environment"
}
headers={
    "x-access-token": "<api_token>"
}
```

This request will return you an `itemId`


## 3. Upload your test samples
Now you can start uploading the samples from your performance test

```
method=POST
url=http://IP_ADDRESS:6000/api/v4/test-run/log-samples
body={
    "itemId": "<itemId>" // the one from the previous step
    "samples: [{
            "timeStamp": 1618578081000,
            "elapsed": 13,
            "label": "endpoint name",
            "responseCode": 200,
            "responseMessage": "ok",
            "threadName": "thread name",
            "success": true,
            "bytes": 1233,
            "sentBytes": 1235,
            "grpThreads": 100,
            "allThreads": 100,
            "latency": 3,
            "connect": 10,
            "hostname": "hostname"
            "failureMessage: "failure message"
    }],
    "monitor": [{
            "cpu": 30,
            "mem": 15,
            "name": "load generator",
            "timestamp": 1618578081000,
    }]
},
headers={
    "x-access-token": "<jwt_token>" // from step 1
    }
```

:::note
Information about the required fields of the schemas can be found at [jtl-listener-service repository](https://github.com/ludeknovy/jtl-reporter-listener-service/blob/main/src/jsonSchema/saveDataBodySchema.ts).
:::

## 4. Stop the test run
After your performance test finishes, you need to stop the test run within the application. This action initiates the sample processing required to generate the performance report.

```
method=POST
url=http://IP_ADDRESS:5000/api/projects/<project_name>/scenarios/<scenario_name>/items/<item_id>/stop-async
body={
    "status": "<status_value>"
}
headers={
    "x-access-token": "<api_token>"
}
```

The accepted `status` values are:
* `0` for `Passed`
* `1` for `Error`
* `2` for `Terminated`
* `3` for `Failed`
* `10` for `Not Set`

Note that the status field is optional. 
