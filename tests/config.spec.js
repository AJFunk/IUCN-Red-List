import {
  redListToken,
  setRedListToken,
  redListVersion,
} from 'config';

describe('setRedListToken()', () => {
  it('sets redListToken', () => {
    const oldToken = redListToken;
    setRedListToken('1234');
    expect(redListToken).to.be.equal('1234');
    return setRedListToken(oldToken);
  });
});

describe('redListVersion()', () => {
  it('returns object', () =>
    redListVersion().then(data => expect(data).to.be.instanceof(Object))
  );
});
