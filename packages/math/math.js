class CratesMath {
  static add(...operands) {
    return operands.reduce((prev, curr) => prev + curr, 0);
  }

  static multiply(...operands) {
    return operands.reduce((prev, curr) => prev * curr, 0);
  }
}
