---
title: Upload CSV via API
---

### Prerequisites
* You have generated [API token in administration section](/docs/guides/administration/api-token).
* Existing project and scenario

### REST API

Upload CSV data using REST API:

```
method=POST
url=http://<IP_ADDRESS>:5000/api/projects/<project_name>/scenarios/<scenario_name>/items
headers={
    'x-access-token': <api_token>
}
formData={
    kpi: <file.csv>
    environment: "environment"
    note: "my note"
    hostname: "my hostname"
    resourcesLink: "my personal external link"
    status: 10
}
```

Only *kpi* and *environment* in the form data body are required.
*Status* can have following values: 
```
   10 = None
   0 = Passed
   1 = Error
   2 = Terminated
```

## Curl example
```
curl -X POST 'http://<ip_address>:5000/api/projects/<project_name>/scenarios/<scenario_name>/items' \
  -H 'x-access-token: <auth_token>' \
  -F 'kpi=@"/<path_to_file>/result.jtl"' \
  -F 'environment="testenv"' \
  -F 'note="testnote"' \
  -F 'hostname="testhostname"' \
  -F 'resourcesLink="my personal external link" \
  -F 'status="10"'
```

## Python example

```
import requests

files = dict(
            kpi=open('path/filename.csv', 'rb'),
            environment=(None, 'environment name'),
            status=(None, 10))
url = '%s:5000/api/projects/%s/scenarios/%s/items' % (
           "<http://IP_ADDRESS>", "project_name", "scenario_name")
requests.post(url, files=files, headers={
                                 'x-access-token': "<api_token>"})
```

## Powershell example

```
$headers = @{
    'x-access-token' = "<api_token>"
}

$url = "http://<IP_ADDRESS>:5000)
$project = "<project_name>"
$environment = "test environment"
$scenario = "<scenario_name>"
$externalLink = "my personal external link"
$note = "my note"

$uri = "$url/api/projects/$project/scenarios/$scenario/items"

$form = @{
    kpi = Get-Item -Path "result.jtl" -Force
    environment = $environment
    resourcesLink = $externalLink
    note = $note
}

Invoke-RestMethod -Uri $uri -Method Post -Headers $headers -Form $form
```
