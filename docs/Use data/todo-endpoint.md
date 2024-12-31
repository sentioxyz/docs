---
title: Endpoint
excerpt: Turn SQL or GraphQL into restful api endpoints
deprecated: false
hidden: true
metadata:
  robots: index
---
Sentio Endpoint is a feature of Sentio that users can turn their SQL or GraphQL queries into  restful APIs. This feature is useful for users who want to share their query with others or use it in their application.

<br />

## Endpoint for SQL Query

To create an endpoint for a SQL query, you first need to create a Saved SQL Query.

### 1. Save the SQL Query

You can do this by clicking on the `Save Query` button on the SQL editor page. You will be prompted to enter a name for the query. Once you have entered the name, click on the `Save` button.

![](https://files.readme.io/af026b39457442d82561dd7a4edb25ebec4d02c906de0bb53fdcd4a3ecf557c6-image.png)

The saved query will now appear in the `Saved Queries` section of the SQL editor page.

### 2. Add parameters to the query

You may want to add parameters to the query so that users can pass in values when they make a request to the endpoint. To do this, click on the `Parameter` button under the editor. This will open the `Edit Parameters` dialog. The parameters you added here will be inserted into the sql query as placeholders `${parameter_name}`. For example, if you want to add a parameter called `limit`, you can add it to the query like this:

```sql
select * from table limit ${limit}
```

```
```

![](https://files.readme.io/7fc688c214237599b590e3d6549a8dd3141fe40718fa9f7cdea16f20b1610e72-image.png)