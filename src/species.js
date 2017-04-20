// @flow
import { sendRequest } from './util';

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
          (err: Error | null, data?: Object): void => {
            if (err) return reject(new Error(err));
            return data ? resolve(data) : reject(new Error('No data found'));
          }
        );
      }),

    count: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed =>
        sendRequest(
          options.hasOwnProperty('region') ?
            `/speciescount/region/${options.region}` :
            '/speciescount',
          (err: Error | null, data?: Object): void => {
            if (err) return reject(new Error(err));
            return data ? resolve(data) : reject(new Error('No data found'));
          }
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
          (err: Error | null, data?: Object): void => {
            if (err) return reject(new Error(err));
            return data ? resolve(data) : reject(new Error('No data found'));
          }
        );
      }),

    byCategory: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!options.hasOwnProperty('category')) {
          return reject(new Error('The category option is required.'));
        }
        return sendRequest(
          `/species/category/${options.category}`,
          (err: Error | null, data?: Object): void => {
            if (err) return reject(new Error(err));
            return data ? resolve(data) : reject(new Error('No data found'));
          }
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
          (err: Error | null, data?: Object): void => {
            if (err) return reject(new Error(err));
            return data ? resolve(data) : reject(new Error('No data found'));
          }
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
          (err: Error | null, data?: Object): void => {
            if (err) return reject(new Error(err));
            return data ? resolve(data) : reject(new Error('No data found'));
          }
        );
      }),

    synonym: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!options.hasOwnProperty('name')) {
          return reject(new Error('The name option is required.'));
        }
        return sendRequest(
          `/species/synonym/${options.name}`,
          (err: Error | null, data?: Object): void => {
            if (err) return reject(new Error(err));
            return data ? resolve(data) : reject(new Error('No data found'));
          }
        );
      }),

    commonNames: (options: Object = {}): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed => {
        if (!options.hasOwnProperty('name')) {
          return reject(new Error('The name option is required.'));
        }
        return sendRequest(
          `/species/common_names/${options.name}`,
          (err: Error | null, data?: Object): void => {
            if (err) return reject(new Error(err));
            return data ? resolve(data) : reject(new Error('No data found'));
          }
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
          (err: Error | null, data?: Object): void => {
            if (err) return reject(new Error(err));
            return data ? resolve(data) : reject(new Error('No data found'));
          }
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
          (err: Error | null, data?: Object): void => {
            if (err) return reject(new Error(err));
            return data ? resolve(data) : reject(new Error('No data found'));
          }
        );
      }),

  };
}
