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
curl 'http://<IP_ADDRESS>:5000/api/projects/<project_name>/scenarios/<scenario_name>/items' \
  -H 'Connection: keep-alive' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'x-access-token: <api_token>' \
  -H 'Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryzrlQF8HbBdDOMTyb' \
  -H 'Referer: http://localhost:4200/' \
  -H 'Accept-Language: cs-CZ,cs;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,ja;q=0.5,nl;q=0.4,sk;q=0.3,cy;q=0.2,de;q=0.1,ro;q=0.1' \
  --data-raw $'------WebKitFormBoundaryzrlQF8HbBdDOMTyb\r\nContent-Disposition: form-data; name="kpi"; filename="<filename.csv>"\r\nContent-Type: text/csv\r\n\r\n\r\n------WebKitFormBoundaryzrlQF8HbBdDOMTyb\r\nContent-Disposition: form-data; name="environment"\r\n\r\ntest\r\n------WebKitFormBoundaryzrlQF8HbBdDOMTyb\r\nContent-Disposition: form-data; name="note"\r\n\r\n\r\n------WebKitFormBoundaryzrlQF8HbBdDOMTyb\r\nContent-Disposition: form-data; name="hostname"\r\n\r\n\r\n------WebKitFormBoundaryzrlQF8HbBdDOMTyb\r\nContent-Disposition: form-data; name="status"\r\n\r\n10\r\n------WebKitFormBoundaryzrlQF8HbBdDOMTyb--\r\n' \
  --compressed
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