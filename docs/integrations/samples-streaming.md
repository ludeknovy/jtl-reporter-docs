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

This request will return you an `itemId` and `dataId`


## 3. Upload your test samples
Now you can start uploading the samples from your performance test

```
method=POST
url=http://IP_ADDRESS:6000/api/v1/test-run/log-samples
body={
    "dataId": "<dataId>" // the one from the previous step
    "samples: [{
            "timeStamp": 1618578081000,
            "elapsed": 13,
            "label": "endpoint name",
            "responseCode": 200,
            "responseMessage": "ok",
            "success": true,
            "bytes": 1233,
            "grpThreads": 100,
            "allThreads": 100,
            "Latency": 3,
            "Connect": 10,
            "Hostname": "hostname"
    }]
},
headers={
    "x-access-token": "<jwt_token>" // from step 1
    }
```

:::note
`api/v1/test-run/log-samples` accepts max 500 items in the array.
:::

## 4. Stop the test run
Once your performance test finishes you need to stop it in the application to start the samples processing in order to generate the performance report

```
method=POST
url=http://IP_ADDRESS:5000/api/projects/<project_name>/scenarios/<scenario_name>/items/<item_id>/stop-async
headers={
    "x-access-token": "<api_token>"
}
```
