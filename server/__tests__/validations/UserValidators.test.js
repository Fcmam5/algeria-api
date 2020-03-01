const { UserValidators } = require('../../validations');


describe('user parameters validation', () => {
  const exampleEmailAddress = 'mhajeb@bled.dz';
  describe('validate login data', () => {
    it('should return valid login credentials', () => {
      const validLoginParameters = {
        email: exampleEmailAddress,
        password: '7arin7arinyajedek',
      };

      const { error, value } = UserValidators.validateLoginCredentials(validLoginParameters);

      expect(value).toStrictEqual(validLoginParameters);
      expect(error).toBeUndefined();
    });

    it('should return non-empty error object if parameters are not porvided', () => {
      const invalidParams = {
        email: '',
        password: '',
      };

      const { error } = UserValidators.validateLoginCredentials(invalidParams);

      expect(error.message).toStrictEqual('"email" is not allowed to be empty');
    });
  });

  describe('validate registration data', () => {
    it('should return valid registration parameters', () => {
      const validLoginParameters = {
        name: 'Mahjouba',
        email: exampleEmailAddress,
        password: '7arin7arinyajedek',
      };

      const { error, value } = UserValidators.validateSignupBody(validLoginParameters);

      expect(value).toStrictEqual(validLoginParameters);
      expect(error).toBeUndefined();
    });


    it('should return non-empty error array if parameters are not porvided', () => {
      const invalidParams = {
        name: 'Mahjouba',
        email: exampleEmailAddress,
        password: '',
      };

      const { error } = UserValidators.validateLoginCredentials(invalidParams);
      expect(error.message).toStrictEqual('"password" is not allowed to be empty');
    });
  });
});
