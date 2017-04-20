// @flow
import {
  handleResult,
  sendRequest,
} from './util';

export default function species(): Object {
  return {

    fetch: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!options.hasOwnProperty('page')) {
          return reject(new Error('The page option is required.'));
        }
        return sendRequest(
          options.hasOwnProperty('region') ?
            `/species/region/${options.region}/page/${options.page}` :
            `/species/page/${options.page}`,
            resolve,
            reject,
            handleResult
        );
      }),

    count: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed =>
        sendRequest(
          options.hasOwnProperty('region') ?
            `/speciescount/region/${options.region}` :
            '/speciescount',
            resolve,
            reject,
            handleResult
        )
      ),

    citation: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!options.hasOwnProperty('name') && !options.hasOwnProperty('id')) {
          return reject(new Error('You must provide either a name or an id'));
        }
        let endpoint;
        if (options.hasOwnProperty('region')) {
          endpoint = options.hasOwnProperty('id') ?
            `/species/citation/id/${options.id}/region/${options.region}` :
            `/species/citation/${options.name}/region/${options.region}`;
        } else {
          endpoint = options.hasOwnProperty('id') ?
            `/species/citation/id/${options.id}` :
            `/species/citation/${options.name}`;
        }
        return sendRequest(
          endpoint,
          resolve,
          reject,
          handleResult
        );
      }),

    byCategory: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!options.hasOwnProperty('category')) {
          return reject(new Error('The category option is required.'));
        }
        return sendRequest(
          `/species/category/${options.category}`,
          resolve,
          reject,
          handleResult
        );
      }),

    find: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!options.hasOwnProperty('name') && !options.hasOwnProperty('id')) {
          return reject(new Error('You must provide either a name or an id'));
        }
        let endpoint;
        if (options.hasOwnProperty('region')) {
          endpoint = options.hasOwnProperty('id') ?
            `/species/id/${options.id}/region/${options.region}` :
            `/species/${options.name}/region/${options.region}`;
        } else {
          endpoint = options.hasOwnProperty('id') ?
            `/species/id/${options.id}` :
            `/species/${options.name}`;
        }
        return sendRequest(
          endpoint,
          resolve,
          reject,
          handleResult
        );
      }),

    narrative: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!options.hasOwnProperty('name') && !options.hasOwnProperty('id')) {
          return reject(new Error('You must provide either a name or an id'));
        }
        let endpoint;
        if (options.hasOwnProperty('region')) {
          endpoint = options.hasOwnProperty('id') ?
            `/species/narrative/${options.id}/region/${options.region}` :
            `/species/narrative/${options.name}/region/${options.region}`;
        } else {
          endpoint = options.hasOwnProperty('id') ?
            `/species/narrative/${options.id}` :
            `/species/narrative/${options.name}`;
        }
        return sendRequest(
          endpoint,
          resolve,
          reject,
          handleResult
        );
      }),

    synonym: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!options.hasOwnProperty('name')) {
          return reject(new Error('The name option is required.'));
        }
        return sendRequest(
          `/species/synonym/${options.name}`,
          resolve,
          reject,
          handleResult
        );
      }),

    commonNames: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!options.hasOwnProperty('name')) {
          return reject(new Error('The name option is required.'));
        }
        return sendRequest(
          `/species/common_names/${options.name}`,
          resolve,
          reject,
          handleResult
        );
      }),

    countries: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!options.hasOwnProperty('name') && !options.hasOwnProperty('id')) {
          return reject(new Error('You must provide either a name or an id'));
        }
        let endpoint;
        if (options.hasOwnProperty('region')) {
          endpoint = options.hasOwnProperty('id') ?
            `/species/countries/id/${options.id}/region/${options.region}` :
            `/species/countries/name/${options.name}/region/${options.region}`;
        } else {
          endpoint = options.hasOwnProperty('id') ?
            `/species/countries/id/${options.id}` :
            `/species/countries/name/${options.name}`;
        }
        return sendRequest(
          endpoint,
          resolve,
          reject,
          handleResult
        );
      }),

    historical: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!options.hasOwnProperty('name') && !options.hasOwnProperty('id')) {
          return reject(new Error('You must provide either a name or an id'));
        }
        let endpoint;
        if (options.hasOwnProperty('region')) {
          endpoint = options.hasOwnProperty('id') ?
            `/species/history/id/${options.id}/region/${options.region}` :
            `/species/history/name/${options.name}/region/${options.region}`;
        } else {
          endpoint = options.hasOwnProperty('id') ?
            `/species/history/id/${options.id}` :
            `/species/history/name/${options.name}`;
        }
        return sendRequest(
          endpoint,
          resolve,
          reject,
          handleResult
        );
      }),

  };
}
