export class UserRole {
  static validate(num: number): boolean {
    return Number.isInteger(num) && num >= 0 && num <= 1
  }
}
