## IUCN Red List
IUCN Red List API wrapper for Node.js

[![Build Status](https://travis-ci.org/AJFunk/IUCN-Red-List.svg?branch=master)](https://travis-ci.org/AJFunk/IUCN-Red-List)

This project has **no dependencies!** and uses modern ES2016+ syntax, which means you can use promises (as shown in the documentation) or async/await.

### Installation
```sh
npm install --save iucn-red-list
```
### Usage
```javascript
import {
  Country,
  Region,
  Threat
} from 'iucn-red-list';
```
Only import the modules you need. For example, if you only need the `Country` and `Threat` modules:
```javascript
import {
  Country,
  Threat,
} from 'iucn-red-list';
```
To set your API Key, set the environment variable `RED_LIST_TOKEN`. Alternatively, you can set the configuration manually:
```javascript
import { setRedListToken } from 'iucn-red-list';
setRedListToken('<your-token>')
```

Be sure to reference the [Red List API docs](http://apiv3.iucnredlist.org/api/v3/docs)

## Threat - Species threat information
* [Threat.fetch()](#threat-fetch)

<h3 id='threat-fetch'>Threat.fetch(options)</h3>

Retrieves a list of threats by species

##### `options` (required) - **[Object]**
* `name` (required) - **[String]** Name of species to filter threats by. If `name` is not provide, `id` must be provided
* `id` (required) - **[String]** Id of species to filter threats by. If `id` is not provided, `name` must be provided. If both `id` and `name` are provided, `id` will take precedent and `name` will be ignored
* `region` (optional) - **[String]** Region of species to filter threats by

```javascript
Threat
  .fetch({ name: 'Fratercula arctica', region: 'europe' })
  .then(data => console.log(data))
  .catch(err => console.log(err));
```
