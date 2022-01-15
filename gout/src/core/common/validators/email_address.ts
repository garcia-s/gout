abstract class EmailAddress {
  static validate(str: string): boolean {
    const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    return regex.test(str)
  }
}
export default EmailAddress
