---
title: Uploading large CSV files
---

:::caution
This manual is obsolete for v4 of the application as MongoDB is no longer used.
:::

If you plan to upload large CSV file, you need to change mongodb settings:

```
let newLimit = 1000 * 1024 * 1024;
db.adminCommand({setParameter: 1, internalQueryMaxPushBytes: newLimit});
```

Otherwise, mongo will throw error following error:

```
MongoError: $push used too much memory and cannot spill to disk. Memory limit: 104857600 bytes"
```
