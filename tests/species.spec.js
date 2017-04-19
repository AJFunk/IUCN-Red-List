import { Species } from 'index';

describe('Species.fetch()', () => {
  it('returns object with result array', () =>
    Species.fetch({ page: 0 }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    Species.fetch({ page: 0, region: 'europe' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns error message', () =>
    Species.fetch().catch(err => expect(err).to.be.an('error'))
  );

  it('returns error message', () =>
    Species.fetch({ region: 'europe' }).catch(err => expect(err).to.be.an('error'))
  );
});

describe('Species.count()', () => {
  it('returns object with count value', () =>
    Species.count().then(data => {
      expect(data).to.be.instanceof(Object);
      return expect(data.count).to.exist;
    })
  );

  it('returns object with count value', () =>
    Species.count({ region: 'europe' }).then(data => {
      expect(data).to.be.instanceof(Object);
      return expect(data.count).to.exist;
    })
  );
});

describe('Species.citation()', () => {
  it('returns object with result array', () =>
    Species.citation({ name: 'loxodonta africana' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    Species.citation({
      name: 'Balaena mysticetus',
      region: 'europe',
    }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    Species.citation({ id: '12392' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    Species.citation({
      id: '2467',
      region: 'europe',
    }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns error message', () =>
    Species.citation().catch(err => expect(err).to.be.an('error'))
  );
});

describe('Species.byCategory()', () => {
  it('returns object with result array', () =>
    Species.byCategory({ category: 'VU' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns error message', () =>
    Species.byCategory().catch(err => expect(err).to.be.an('error'))
  );
});

describe('Species.find()', () => {
  it('returns object with result array', () =>
    Species.find({ name: 'loxodonta africana' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    Species.find({
      name: 'Fratercula arctica',
      region: 'europe',
    }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    Species.find({ id: '12392' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    Species.find({
      id: '22694927',
      region: 'europe',
    }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns error message', () =>
    Species.find().catch(err => expect(err).to.be.an('error'))
  );
});

describe('Species.narrative()', () => {
  it('returns object with result array', () =>
    Species.narrative({ name: 'loxodonta africana' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    Species.narrative({
      name: 'Fratercula arctica',
      region: 'europe',
    }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    Species.narrative({ id: '12392' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    Species.narrative({
      id: '22694927',
      region: 'europe',
    }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns error message', () =>
    Species.narrative().catch(err => expect(err).to.be.an('error'))
  );
});

describe('Species.synonym()', () => {
  it('returns object with result array', () =>
    Species.synonym({ name: 'loxodonta africana' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns error message', () =>
    Species.synonym().catch(err => expect(err).to.be.an('error'))
  );
});

describe('Species.commonNames()', () => {
  it('returns object with result array', () =>
    Species.commonNames({ name: 'loxodonta africana' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns error message', () =>
    Species.commonNames().catch(err => expect(err).to.be.an('error'))
  );
});

describe('Species.countries()', () => {
  it('returns object with result array', () =>
    Species.countries({ name: 'loxodonta africana' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    Species.countries({
      name: 'Ursus maritimus',
      region: 'europe',
    }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    Species.countries({ id: '12392' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    Species.countries({
      id: '22823',
      region: 'europe',
    }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns error message', () =>
    Species.countries().catch(err => expect(err).to.be.an('error'))
  );
});

describe('Species.historical()', () => {
  it('returns object with result array', () =>
    Species.historical({ name: 'loxodonta africana' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    Species.historical({
      name: 'Ursus maritimus',
      region: 'europe',
    }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    Species.historical({ id: '12392' }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns object with result array', () =>
    Species.historical({
      id: '22823',
      region: 'europe',
    }).then(data => {
      expect(data).to.be.instanceof(Object);
      expect(data.result).to.be.instanceof(Array);
    })
  );

  it('returns error message', () =>
    Species.historical().catch(err => expect(err).to.be.an('error'))
  );
});
