// Reset Password module

function requestPasswordReset(email) {
  if (!email) {
    throw new Error('Email is required');
  }
  return { success: true, message: 'Reset link sent to ' + email };
}

function resetPassword(token, newPassword) {
  if (!token || !newPassword) {
    throw new Error('Token and new password are required');
  }
  if (newPassword.length < 8) {
    throw new Error('Password must be at least 8 characters');
  }
  return { success: true, message: 'Password reset successfully' };
}

module.exports = { requestPasswordReset, resetPassword };
