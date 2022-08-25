//Global validation....
const isValid = (value) => {
    if (typeof value === "undefined" || typeof value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
};

//Empty Body....
const isValidRequestBody = (body) => {
    if (Object.keys(body).length) {
        return true;
    }
};

//For Phone....
const isValidPhone = (phone) => {
    return /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/.test(phone);
};

//For Email....
const isValidEmail = (email) => {
    return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
};

//For Name....
const isValidName = (name) => {
    return /^[a-zA-Z ]{2,30}$/.test(name);
};

export {
    isValid,
    isValidRequestBody,
    isValidName,
    isValidPhone,
    isValidEmail
}