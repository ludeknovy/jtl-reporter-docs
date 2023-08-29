---
title: Anonymous report sharing
---
If you ever need to share a report with someone without the application credentials, you can create a special link to share the performance report with anyone without the need of having an account.

1. Open a report you want to share
2. Click on the hamburger icon in the top right corner of the page
3. Click **Share**
4. Click **Add new link**
5. Fill the description and click **Submit**

Now you can share the link with anyone. The link will be valid forever.
If you ever need to revoke the link, you can simply delete it from the list.


## Getting the share token via API

:::note
You can leverage this feature to share the report from you CI/CD pipeline automatically.
:::


The application also allows you to generate the share token automatically upon report processing.
But you need to enable it in the scenario settings first:
1. Navigate to scenario detail.
2. Open the context menu by click the hamburger icon in the top right corner of the page. And select Settings.
3. Click on General tab.
4. Enable **Generate share token automatically** and click Submit.

[Upon JTL/CSV file upload](/docs/guides/api-data-upload#rest-api) the API will return the following response:
```json
{
  "itemId": "f69821e2-aea4-424a-b98e-b1fd7e0fb37a",
  "shareToken": "3217f2664f07c18c738494bf1dc7e8416ff7d5c7d676136f433ce6125e757082a8e668edc942d873"
}
```

Use the token in the following template to generate the full link with anonymous access:
```
<baseUrl>/project/<project_name>/scenario/<scenario_name>/item/<itemId>?token=<shareToken>
```
