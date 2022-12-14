---
title: Delivering alerts to external systems
---

import DocCardList from "@theme/DocCardList";


Matano integrates with external systems to deliver alerts. A detection can be configured to route alerts to one or multiple destinations based on a static configuration or dynamically based on the content of the triggering event.

**Example static destination list in detection.yml**
```yml
alert:
  destinations:
  - my_slack_team
  - main_jira
```

For a full guide on on setting up alert destination integrations and the routing logic for alerts from a detection, read [Alert destinations](/docs/integrations/destinations).

