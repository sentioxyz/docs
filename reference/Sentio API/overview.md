---
title: Overview
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
  pages:
    - type: endpoint
      slug: data
      title: Data
    - type: endpoint
      slug: debug-and-simulation
      title: Debug and Simulation
    - type: endpoint
      slug: web
      title: Web
---
Many of Sentio's features are available through API.

To get started, you should have an API key, refer [API Key](api-key "mention") to create one. To authorize the API calls, you could choose either of the following:
- Pass it by the header `api-key`, 
- Pass it by the query parameter `api-key`, e.g.  `http://app.sentio.xyz/v1/api/service/query?api-key=<your-api-key>`