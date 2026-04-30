// Login module
function login(email, password) {
    if (!email || !password) {
        throw new Error('Email and password are required');
    }
    return { success: true, user: { email } };
}

module.exports = { login };
