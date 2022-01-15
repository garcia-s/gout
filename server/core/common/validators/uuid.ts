abstract class Uuid {
  static isValid(str: string): boolean {
    const regex = RegExp(
      /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
    );
    return regex.test(str);
  }
}

export default Uuid;
