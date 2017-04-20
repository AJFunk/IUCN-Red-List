import http from 'http';
import { redListToken } from './config';

const handleResult = (resolve: (data: Object) => void,
                      reject: (reason: Error) => void,
                      err: Error | null,
                      data?: Object): mixed => {
  if (err) return reject(err);
  return data ? resolve(data) : reject(new Error('No data found'));
};

const sendRequest = (endpoint: string,
                     resolve: (data: Object) => void,
                     reject: (reason: Error) => void,
                     cb: object): void => {
  const params = {
    host: 'apiv3.iucnredlist.org',
    path: `/api/v3${endpoint.replace(/\s/g, '%20')}?token=${redListToken}`,
    method: 'GET',
  };

  const req = http.request(params, (res: object): null => {
    if (res.statusCode < 200 || res.statusCode >= 300) {
      return cb(resolve, reject, `statusCode=${res.statusCode}`);
    }
    const buf = [];
    res.on('data', (c: object): object => buf.push(c));
    res.on('end', (): object => cb(resolve, reject, null, JSON.parse(Buffer.concat(buf))));
    return null;
  });
  req.on('error', (err: object): object => cb(resolve, reject, err));
  req.end();
};

export {
  handleResult,
  sendRequest,
};
