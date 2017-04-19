import { Species } from 'index';

describe('Species.all()', () => {
  it('returns object with result array', () =>
    Species.all({ page: 0 }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns error message', () =>
    Species.all().catch(err => expect(err).to.be.an('error'))
  );
});

describe('Species.byRegion()', () => {
  it('returns object with result array', () =>
    Species.byRegion({ page: 0, region: 'europe' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns error message', () =>
    Species.byRegion().catch(err => expect(err).to.be.an('error'))
  );

  it('returns error message', () =>
    Species.byRegion({ page: 0 }).catch(err => expect(err).to.be.an('error'))
  );

  it('returns error message', () =>
    Species.byRegion({ region: 'europe' }).catch(err => expect(err).to.be.an('error'))
  );
});
