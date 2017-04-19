## IUCN Red List
IUCN Red List API wrapper for Node.js

[![Build Status](https://travis-ci.org/AJFunk/IUCN-Red-List.svg?branch=master)](https://travis-ci.org/AJFunk/IUCN-Red-List.svg?branch=master)

This project has **no dependencies!** and uses modern ES2016+ syntax, which means you can use promises (as shown in the documentation) or async/await.

### Installation
```sh
npm install --save iucn-red-list
```
### Usage
```javascript
import {
  Species
} from 'iucn-red-list';
```
Only import the modules you need. For example, if you only need the `Species` and `Habitats` modules:
```javascript
import {
  Species,
  Habitats,
} from 'iucn-red-list';
```
To set your API Key, set the environment variable `RED_LIST_TOKEN`. Alternatively, you can set the configuration manually:
```javascript
import { setRedListToken } from 'iucn-red-list';
setRedListToken('<your-token>')
```

Be sure to reference the [Red List API docs](http://apiv3.iucnredlist.org/api/v3/docs)
