import { ValueObject } from "../value-objec";

class StringValueObject extends ValueObject {
  constructor(readonly value: string) {
    super();
  }
}

class ComplexValueObject extends ValueObject {
  constructor(
    readonly prop1: string,
    readonly prop2: number,
  ) {
    super();
  }
}

describe("ValueObject Unit Test", () => {
  test("should be equals", () => {
    const value = "test";
    const vo1 = new StringValueObject(value);
    const vo2 = new StringValueObject(value);

    expect(vo1.equals(vo2)).toBeTruthy();
  });

  test("should not be equals", () => {
    const vo1 = new StringValueObject("test");
    const vo2 = new StringValueObject("test2");

    expect(vo1.equals(vo2)).toBeFalsy();
  });

  test("should be equals", () => {
    const vo1 = new ComplexValueObject("test", 1);
    const vo2 = new ComplexValueObject("test", 1);

    expect(vo1.equals(vo2)).toBeTruthy();
  });

  test("should not be equals", () => {
    const vo1 = new ComplexValueObject("test", 1);
    const vo2 = new ComplexValueObject("test", 2);

    expect(vo1.equals(vo2)).toBeFalsy();
  });
});
