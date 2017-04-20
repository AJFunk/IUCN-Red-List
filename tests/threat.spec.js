import { Threat } from 'index';

describe('Threat.fetch()', () => {
  it('returns object with result array', () =>
    Threat.fetch({ name: 'Loxodonta africana' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    Threat.fetch({ name: 'Fratercula arctica', region: 'europe' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    Threat.fetch({ id: '12392' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    Threat.fetch({ id: '2467', region: 'europe' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns error message', () =>
    Threat.fetch().catch(data => expect(data).to.be.an('error'))
  );

  it('returns error message', () =>
    Threat.fetch({ region: 'europe' }).catch(data => expect(data).to.be.an('error'))
  );
});
