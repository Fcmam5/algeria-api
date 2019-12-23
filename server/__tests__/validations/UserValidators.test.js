const { UserValidators } = require('../../validations');

describe('user parameters validation', () => {
  describe('validate login data', () => {
    it('should return valid login credentials', () => {
      const validLoginParameters = {
        email: 'mhajeb@bled.dz',
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
        email: 'mhajeb@bled.dz',
        password: '7arin7arinyajedek',
      };

      const { error, value } = UserValidators.validateSignupBody(validLoginParameters);

      expect(value).toStrictEqual(validLoginParameters);
      expect(error).toBeUndefined();
    });


    it('should return non-empty error array if parameters are not porvided', () => {
      const invalidParams = {
        name: 'Mahjouba',
        email: 'mhajeb@bled.dz',
        password: '',
      };

      const { error } = UserValidators.validateLoginCredentials(invalidParams);
      // TODO Verify that both errors are thrown
      expect(error).toStrictEqual('"email" must be a valid email');
    });
  });
});
