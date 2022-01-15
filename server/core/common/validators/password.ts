abstract class Password {
  static isValid(str: string): boolean {
    return str.length >= 8 && str.length <= 16;
  }
}

export default Password;
