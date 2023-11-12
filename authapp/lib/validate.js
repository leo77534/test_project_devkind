/**
 * Validates login form input.
 * @param {Object} values - An object containing login form field values.
 * @returns {Object} - An object with validation errors.
 */
export default function login_vaildate(values) {
  const errors = {};

  // Validation for email
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  //validation for password
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Password must be between 8 and 20 characters";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid password";
  }

  return errors;
}

/**
 * Validates registration form input.
 * @param {Object} values - An object containing registration form field values.
 * @returns {Object} - An object with validation errors.
 */
export function register_vaildate(values) {
  const errors = {};

  // Validation for username
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.includes(" ")) {
    errors.username = "Invalid username";
  }

  // Validation for email
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  //validation for password
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Password must be between 8 and 20 characters";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid password";
  }

  //validation for confirm password
  if (!values.cpassword) {
    errors.cpassword = "Required";
  } else if (values.password !== values.cpassword) {
    errors.cpassword = "Password do not match";
  } else if (values.cpassword.includes(" ")) {
    errors.cpassword = "Invalid Confirm Password";
  }

  return errors;
}
