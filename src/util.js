import http from 'http';
import { redListToken } from './config';

const sendRequest = (endpoint: string, cb: object): void => {
  const params = {
    host: 'apiv3.iucnredlist.org',
    path: `/api/v3${endpoint.replace(/\s/g, '%20')}?token=${redListToken}`,
    method: 'GET',
  };

  const req = http.request(params, (res: object): null => {
    if (res.statusCode < 200 || res.statusCode >= 300) {
      return cb(`statusCode=${res.statusCode}`);
    }
    const buf = [];
    res.on('data', (c: object): object => buf.push(c));
    res.on('end', (): object => cb(null, JSON.parse(Buffer.concat(buf))));
    return null;
  });
  req.on('error', (err: object): object => cb(err));
  req.end();
};

export {
  sendRequest,
};
