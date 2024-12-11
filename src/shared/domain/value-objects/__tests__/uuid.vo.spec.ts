import { validate as uuidValidate } from 'uuid'
import { InvalidUuidError, Uuid } from "../uuid.vo"

describe('Uuid Unit Tests', () => {
  const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate')

  test('should throw error when uuid is invalid', () => {
    expect(() => {
      new Uuid('invalid-uuid')
    }).toThrow(new InvalidUuidError())
    expect(validateSpy).toHaveBeenCalled()
  })

  test('should create a uuid with default value', () => {
    const uuid = new Uuid()

    expect(uuid.id).toBeDefined()
    expect(uuidValidate(uuid.id)).toBeTruthy()
    expect(validateSpy).toHaveBeenCalled()
  })

  test('should create a uuid with value', () => {
    const uuid = 'a8f4e3c6-6e7f-4c7e-8b5e-3b9c2f7d2b4a'
    const output = new Uuid(uuid)

    expect(output.id).toBe(uuid)
    expect(validateSpy).toHaveBeenCalled()
  })
})
