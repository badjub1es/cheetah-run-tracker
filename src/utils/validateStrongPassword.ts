const regExp = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g

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

