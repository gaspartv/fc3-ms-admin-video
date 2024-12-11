import { Category } from "../category.entity"

describe('Category Unit Tests', () => {
  describe('constructor', () => {
    test('should create a category with default values', () => {
      const data = { name: 'Movie' }

      const category = Category.create(data)

      expect(category.category_id).toBeUndefined()
      expect(category.name).toBe('Movie')
      expect(category.description).toBeNull()
      expect(category.is_active).toBeTruthy()
      expect(category.created_at).toBeInstanceOf(Date)
    })

    test('should create a category with all values', () => {
      const created_at = new Date()
      const category = Category.create({
        name: 'Movie',
        description: 'Movies category',
        is_active: false,
        created_at
      })

      expect(category.category_id).toBeUndefined()
      expect(category.name).toBe('Movie')
      expect(category.description).toBe('Movies category')
      expect(category.is_active).toBeFalsy()
      expect(category.created_at).toBe(created_at)
    })

    test('should create a category with description value', () => {
      const category = Category.create({
        name: 'Movie',
        description: 'Movies category',
      })

      expect(category.category_id).toBeUndefined()
      expect(category.name).toBe('Movie')
      expect(category.description).toBe('Movies category')
      expect(category.is_active).toBeTruthy()
      expect(category.created_at).toBeInstanceOf(Date)
    })
  })

  test('should change name', () => {
    const category = Category.create({ name: 'Movie' })

    category.changeName('Books')

    expect(category.name).toBe('Books')
  })

  test('should change description', () => {
    const category = Category.create({ name: 'Movie' })

    category.changeDescription('Movies and series')

    expect(category.description).toBe('Movies and series')
  })

  test('should activate category', () => {
    const category = Category.create({ name: 'Movie', is_active: false })

    category.activate()

    expect(category.is_active).toBeTruthy()
  })

  test('should deactivate category', () => {
    const category = Category.create({ name: 'Movie' })

    category.deactivate()

    expect(category.is_active).toBeFalsy()
  })
})
