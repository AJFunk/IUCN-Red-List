import { GrowthForms } from 'index';

describe('GrowthForms.fetch()', () => {
  it('returns object with result array', () =>
    GrowthForms.fetch({ name: 'Mucuna bracteata' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    GrowthForms.fetch({ name: 'Quercus robur', region: 'europe' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    GrowthForms.fetch({ id: '19891625' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    GrowthForms.fetch({ id: '63532', region: 'europe' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns error message', () =>
    GrowthForms.fetch().catch(data => expect(data).to.be.an('error'))
  );

  it('returns error message', () =>
    GrowthForms.fetch({ region: 'europe' }).catch(data => expect(data).to.be.an('error'))
  );
});
