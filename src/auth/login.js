// Login module

function login(email, password, rememberMe = false) {
  if (!email || !password) {
    throw new Error('Email and password are required');
  }
  return { 
    success: true, 
    user: { email },
    sessionExpiry: rememberMe ? '30d' : '1d'
  };
}

module.exports = { login };

