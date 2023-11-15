import * as bcrypt from "bcrypt";

/**
 * @returns Secured User Password
 */
const generateHashPassword = async (password: string) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    return { hashedPassword, isError: false };
  } catch (error) {
    return { hashedPassword: "", isError: true };
  }
};

/**
 * @returns Matched Password
 */
const decodeHashPassword = async (password: string, hashedPassword: string) => {
  try {
    const isMatched = await bcrypt.compare(password, hashedPassword);
    return isMatched;
  } catch (error) {
    return false;
  }
};

export default {
  generateHashPassword,
  decodeHashPassword,
};
