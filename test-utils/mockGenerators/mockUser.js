import faker from 'faker';
import mockPassword from './mockPassword';

/**
 * @description generate a mocked user object for registration tests
 *
 * @export
 * @param {string} [desiredEmail=''] User will be created with this email, if passed
 * @returns {Object.<string, string>}
 */
export default function mockUser(desiredEmail = '') {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = desiredEmail || faker.internet.email(firstName, lastName, 'operationcode.org');
  const password = mockPassword();
  const zipcode = faker.address.zipCode();

  const user = {
    email,
    'confirm-email': email,
    password,
    'confirm-password': password,
    firstName,
    lastName,
    zipcode,
  };

  return user;
}
