import { Country } from 'index';

describe('Country.all()', () => {
  it('returns object with results array', () =>
    Country.all().then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.results).to.be.instanceof(Array);
    })
  );
});

describe('Country.species()', () => {
  it('returns object with result array', () =>
    Country.species({ country: 'uz' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns error message', () =>
    Country.species().catch(err => expect(err).to.be.an('error'))
  );
});
