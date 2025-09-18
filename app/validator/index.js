
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidContact(number) {
    const no = String(number)
    return /^\d{10}$/.test(no)
}

// Export all validators
module.exports = {
    isValidEmail, isValidContact
};
