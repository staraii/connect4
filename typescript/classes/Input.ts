import prompt from "../helpers/prompt.js";

export default class Input {
  static getValid(msg: string, errMsg: string, pattern: string): string {
    const regEx = new RegExp(pattern);
    let validInput = null;
    do {
      try {
        const userInput = prompt(msg);
        if (!regEx.test(userInput)) {
          throw new Error(errMsg)
        }
        validInput = userInput;
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message)
        }
      }
    } while (!validInput);

    return validInput;
  }
}

