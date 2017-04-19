import { Region } from 'index';

describe('Region.all()', () => {
  it('returns object with results array', () =>
    Region.all().then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.results).to.be.instanceof(Array);
    })
  );
});
