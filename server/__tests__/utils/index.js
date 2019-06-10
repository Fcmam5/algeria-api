const { supportedLanguages } = require('../../utils/constants');
const { isLanguageSupported, getWilayasNames } = require('../../utils');

describe('Test language support suite', () => {
  it('should return true if language is supported', () => {
    const langues = [...supportedLanguages];
    langues.forEach((lg) => {
      expect(isLanguageSupported(lg)).toBeTruthy();
    });
  });

  it('should return false if language is not supported', () => {
    const lg = 'notALanguage';
    expect(isLanguageSupported(lg)).toBeFalsy();
  });

  it('should throw an error if language code parameter is not provided', () => {
    expect(() => isLanguageSupported()).toThrow();
  });
});

describe('Test getWilayasNames() function', () => {
  it('should return arabic names the provided wilayas', () => {
    const arNames = ['وهران', 'سطيف', 'الجزائر'];
    expect(getWilayasNames([31, 16, 19], 'ar')).toContain(...arNames);
  });

  it('should return French names the provided wilayas', () => {
    const arNames = ['Oran', 'Sétif', 'Alger'];
    expect(getWilayasNames([31, 16, 19], 'fr')).toContain(...arNames);
  });

  it('should return arabic names the provided wilayas', () => {
    const arNames = ['Oran', 'Setif', 'Algiers'];
    expect(getWilayasNames([31, 16, 19], 'en')).toContain(...arNames);
  });

  it('should', () => {
    const mockWilayasResponse = [
      {
        mattricule: 31, name: 'Oran', name_ar: 'وهران', name_en: 'Oran',
      }, {
        mattricule: 16, name: 'Alger', name_ar: 'الجزائر', name_en: 'Algiers',
      }, {
        mattricule: 19, name: 'Sétif', name_ar: 'سطيف', name_en: 'Setif',
      },
    ];

    const result = getWilayasNames([31, 16, 19]);

    expect(result[0]).toEqual(mockWilayasResponse[0]);
    expect(result[1]).toEqual(mockWilayasResponse[1]);
    expect(result[2]).toEqual(mockWilayasResponse[2]);
  });

  it('should throw an error if the mattricules parameter is not an array', () => {
    expect(() => getWilayasNames(0)).toThrow();
    expect(() => getWilayasNames()).toThrow();
    expect(() => getWilayasNames('')).toThrow();
    expect(() => getWilayasNames({})).toThrow();
    expect(() => getWilayasNames(null)).toThrow();
    expect(() => getWilayasNames(undefined)).toThrow();
  });

  it('should return an empty array if an empty arry is passed', () => {
    const rsArr = getWilayasNames([]);
    expect(rsArr).toEqual([]);
  });
});
