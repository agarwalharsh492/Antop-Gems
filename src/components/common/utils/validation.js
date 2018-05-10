// Validating email
const isValidEmail = email => {
  const atpos = email.indexOf('@');
  const dotpos = email.lastIndexOf('.');
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    return false;
  }
  return email;
};

const monitorMobile = e => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < e.target.value.length; i += 1) {
    if (numbers.indexOf(parseInt(e.target.value[i], 10)) === -1) {
      return false;
    }
  }
  if (e.target.value.length > 10) {
    return false;
  }
  return true;
};

const isValidPhone = (phone, countryCode = '91') => {
  const mobileRegex = /^[1-9][0-9]+$/;
  if (
    phone &&
    parseInt(phone, 10) !== 0 &&
    phone.length > 0 &&
    ((countryCode === '91' && phone.length === 10) ||
      (countryCode !== '91' && phone.length >= 8))
  ) {
    if (phone.match(mobileRegex)) {
      return true;
    }
  }
  return false;
};

export default { isValidEmail, monitorMobile, isValidPhone };
