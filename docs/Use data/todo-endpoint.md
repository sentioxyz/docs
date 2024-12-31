---
title: 🖥️ Endpoint
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

1. Save the SQL Query

You can do this by clicking on the `Save Query` button on the SQL editor page. You will be prompted to enter a name for the query. Once you have entered the name, click on the `Save` button.

![](https://files.readme.io/af026b39457442d82561dd7a4edb25ebec4d02c906de0bb53fdcd4a3ecf557c6-image.png)

The saved query will now appear in the `Saved Queries` section of the SQL editor page.

2. Add parameters to the query

You may want to add parameters to the query so that users can pass in values when they make a request to the endpoint. To do this, click on the `Parameter` button under the editor. This will open the `Edit Parameters` dialog. The parameters you added here will be inserted into the sql query as placeholders `${parameter_name}`. For example, if you want to add a parameter called `limit`, you can add it to the query like this:

```sql
select * from table limit ${limit}
```

![](https://files.readme.io/7fc688c214237599b590e3d6549a8dd3141fe40718fa9f7cdea16f20b1610e72-image.png)

3. Turn the Saved SQL query into an endpoint

By clicking on the `+ Endpoint` button, you can turn the saved query into an endpoint. The endpoint needs to have a name and a path. The path is unique to the current project and will be used to access the endpoint. You can also set the permission option for this endpoint. Once you have entered the required information, click on the `Create Endpoint` button.

![](https://files.readme.io/527a1eeb34c79ac34a88260cb491f7923e1b715ff46224ff113585972910e6b3-image.png)

All of the parameters you added to the query will be converted into body parameters for the endpoint.

4. Access the endpoint

Switch to the `Docs` tab to see the details of the endpoint you created. You can see the path of the endpoint, the URL, and the parameters that the endpoint accepts. You can also test the endpoint by clicking on the `Try it ` button. This will send a request to the endpoint and display the response in the `Response` section.

![](https://files.readme.io/ec72c9c5f530ce9b64f216b46715212f7e6fc56bdce84d10a38cd237854d51e1-image.png)