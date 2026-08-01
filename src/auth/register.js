function validateRegistration({ name, email, password, confirmPassword }) {
  const errors = {};

  if (!name?.trim()) errors.name = 'Name is required';
  if (!email?.trim()) errors.email = 'Email is required';
  if (!password?.trim()) errors.password = 'Password is required';

  if (email && (!email.includes('@') || email.split('@')[1]?.trim() === '')) {
    errors.email = 'Invalid email format';
  }

  if (password && password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }

  if (password && confirmPassword && confirmPassword !== password) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

module.exports = { validateRegistration };
