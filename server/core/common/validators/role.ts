abstract class Role {
    static isValid(value: any): boolean {
      return (
        typeof value === "number" &&
        Number.isInteger(value) &&
        value >= 0 &&
        value <= 2
      )
    }
  }
  
  export default Role