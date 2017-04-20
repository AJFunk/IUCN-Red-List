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
  Species,
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

## Country - Country information
* [Country.all()](#country-all)
* [Country.species()](#country-species)

## Region - Region information
* [Region.all()](#region-all)

## Species - Published species on the Red List
* [species.fetch()](#species-fetch)
* [species.count()](#species-count)
* [species.citation()](#species-citation)
* [species.byCategory()](#species-byCategory)
* [species.find()](#species-find)
* [species.narrative()](#species-narrative)
* [species.synonym()](#species-synonym)
* [species.commonNames()](#species-commonNames)
* [species.countries()](#species-countries)
* [species.historical()](#species-historical)

## Threat - Species threat information
* [Threat.fetch()](#threat-fetch)

<h3 id='country-all'>Country.all()</h3>

Retrieves a list of countries

```javascript
Country
  .all()
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

<h3 id='country-species'>Country.species(options)</h3>

Retrieves a list of species by country

##### `options` (required) - **[Object]**
* `country` (required) - **[String]** ISO-code of the country for which you want the list of species

```javascript
Country
  .species({ country: 'AZ' })
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

<h3 id='region-all'>Region.all()</h3>

Retrieves a list of regions

```javascript
Region
  .all()
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

<h3 id='species-fetch'>Species.fetch(options)</h3>

Retrieves a list of species in a paginated list of 10,000 species per page.

##### `options` (required) - **[Object]**
* `page` (required) - **[Number]** Page number to retrieve. First page is `0`
* `region` (optional) - **[String]** If provided, this option will return a regional assessment of the available species. Must be a valid region (see [Region.all()](#region-all))

```javascript
Species
  .fetch({ page: 2, region: 'europe' })
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

<h3 id='species-count'>Species.count(options)</h3>

Retrieves a count of species globally or by region.

##### `options` (required) - **[Object]**
* `region` - **[String]** Region to filter species count by. Must be a valid region (see [Region.all()](#region-all))

```javascript
Species
  .count({ region: 'europe' })
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

<h3 id='species-citation'>Species.citation(options)</h3>

Retrieves a citation for a given species

##### `options` (required) - **[Object]**
* `name` (required) - **[String]** Name of species. If `name` is not provided, `id` must be provided
* `id` (required) - **[String/Number]** ID of species. If `id` is not provided, `name` must be provided. If both `id` and `name` are provided, `id` will take precedent and `name` will be ignored
* `region` - **[String]** If provided, this option will return a regional assessment of the species. Must be a valid region (see [Region.all()](#region-all))

```javascript
Species
  .citation({ name: 'Loxodonta Africana' })
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

<h3 id='species-byCategory'>Species.byCategory(options)</h3>

Retrieves a list of species by category

##### `options` (required) - **[Object]**
* `category` (required) - **[String]** Valid categories are `DD`, `LC`, `NT`, `VU`, `EN`, `CR`, `EW`, `EX`, `LR/lc`, `LR/nt`, `LR/cd`.

```javascript
Species
  .category({ category: 'VU' })
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

<h3 id='species-find'>Species.find(options)</h3>

Retrieve information about a specific species

##### `options` (required) - **[Object]**
* `name` (required) - **[String]** Name of species. If `name` is not provided, `id` must be provided
* `id` (required) - **[String/Number]** ID of species. If `id` is not provided, `name` must be provided. If both `id` and `name` are provided, `id` will take precedent and `name` will be ignored
* `region` - **[String]** If provided, this option will return a regional assessment of the species. Must be a valid region (see [Region.all()](#region-all))

```javascript
Species
  .find({ id: '22694927' })
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

<h3 id='species-narrative'>Species.narrative(options)</h3>

Retrieve narrative information about a specific species

##### `options` (required) - **[Object]**
* `name` (required) - **[String]** Name of species. If `name` is not provided, `id` must be provided
* `id` (required) - **[String/Number]** ID of species. If `id` is not provided, `name` must be provided. If both `id` and `name` are provided, `id` will take precedent and `name` will be ignored
* `region` - **[String]** If provided, this option will return a regional assessment of the species. Must be a valid region (see [Region.all()](#region-all))

```javascript
Species
  .narrative({ name: 'Fratercula artica', region: 'europe' })
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

<h3 id='species-synonym'>Species.synonym(options)</h3>

Retrieve information about synonyms via an accepted species name, or vice versa i.e. this call tells you if there are synonyms for the species name, or whether it's a synonym of an accepted name

##### `options` (required) - **[Object]**
* `name` (required) - **[String]** Name (or synonym) of species.

```javascript
Species
  .synonym({ name: 'Loxodonta Africana' })
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

<h3 id='species-commonNames'>Species.commonNames(options)</h3>

Retrieve list of common names in various languages for a species

##### `options` (required) - **[Object]**
* `name` (required) - **[String]** Name of species.

```javascript
Species
  .commonNames({ name: 'Loxodonta Africana' })
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

<h3 id='species-countries'>Species.countries(options)</h3>

Retrieve a list of countries of occurrence by species name

##### `options` (required) - **[Object]**
* `name` (required) - **[String]** Name of species. If `name` is not provided, `id` must be provided
* `id` (required) - **[String/Number]** ID of species. If `id` is not provided, `name` must be provided. If both `id` and `name` are provided, `id` will take precedent and `name` will be ignored
* `region` - **[String]** If provided, this option will return a regional assessment of the species. Must be a valid region (see [Region.all()](#region-all))

```javascript
Species
  .narrative({ name: 'Ursus maritimus', region: 'europe' })
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

<h3 id='species-historical'>Species.historical(options)</h3>

Retrieve a list of historical assessments by species name (including the current listing)

##### `options` (required) - **[Object]**
* `name` (required) - **[String]** Name of species. If `name` is not provided, `id` must be provided
* `id` (required) - **[String/Number]** ID of species. If `id` is not provided, `name` must be provided. If both `id` and `name` are provided, `id` will take precedent and `name` will be ignored
* `region` - **[String]** If provided, this option will return a regional assessment of the species. Must be a valid region (see [Region.all()](#region-all))

```javascript
Species
  .narrative({ name: 'Ursus maritimus', region: 'europe' })
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

<h3 id='threat-fetch'>Threat.fetch(options)</h3>

Retrieves a list of threats by species

##### `options` (required) - **[Object]**
* `name` (required) - **[String]** Name of species. If `name` is not provided, `id` must be provided
* `id` (required) - **[String/Number]** ID of species. If `id` is not provided, `name` must be provided. If both `id` and `name` are provided, `id` will take precedent and `name` will be ignored
* `region` (optional) - **[String]** If provided, this option will return a regional assessment of the threats. Must be a valid region (see [Region.all()](#region-all))

```javascript
Threat
  .fetch({ name: 'Fratercula arctica', region: 'europe' })
  .then(data => console.log(data))
  .catch(err => console.log(err));
```
