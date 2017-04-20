// @flow
import {
  handleResult,
  sendRequest,
} from './util';

export default function region(): Object {
  return {

    all: (): Promise<any> =>
      new Promise((resolve: (data: Object) => void, reject: (reason: Error) => void): mixed =>
        sendRequest(
          '/region/list',
          resolve,
          reject,
          handleResult
        )
      ),

  };
}
