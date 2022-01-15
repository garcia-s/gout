abstract class EmailAddress {
  static isValid(str: string): boolean {
    const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    return regex.test(str);
  }
}
export default EmailAddress;
