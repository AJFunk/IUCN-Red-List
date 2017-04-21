import { Measure } from 'index';

describe('Measure.fetch()', () => {
  it('returns object with result array', () =>
    Measure.fetch({ name: 'Loxodonta africana' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    Measure.fetch({ name: 'Fratercula arctica', region: 'europe' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    Measure.fetch({ id: '12392' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    Measure.fetch({ id: '2467', region: 'europe' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns error message', () =>
    Measure.fetch().catch(data => expect(data).to.be.an('error'))
  );

  it('returns error message', () =>
    Measure.fetch({ region: 'europe' }).catch(data => expect(data).to.be.an('error'))
  );
});
