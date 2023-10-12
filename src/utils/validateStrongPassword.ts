const regExp = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
const capReg = /[A-Z]/;
const lowReg = /[a-z]/;
const numReg = /\d/;
const specReg = /[^a-zA-Z0-9\s]/;

/**
 *  Validates password strength
 *  - The password length must be greater than or equal to 8
 *  - The password must contain one or more uppercase characters
 *  - The password must contain one or more lowercase characters
 *  - The password must contain one or more numeric values
 *  - The password must contain one or more special characters
 * 
 * @param password string password
 * @returns {boolean} boolean
 */
export const validateStrongPassword = (password: string): boolean => regExp.test(password);

export const hasUppercase = (password: string): boolean => capReg.test(password);

export const hasLowercase = (password: string): boolean => lowReg.test(password);

export const hasNumeric = (password: string): boolean => numReg.test(password);

export const hasSpecial = (password: string): boolean => specReg.test(password);
