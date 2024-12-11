import { Category } from "../category.entity"

describe('Category Unit Tests', () => {
  describe('constructor', () => {
    test('should create a category with default values', () => {
      const data = { name: 'Movie' }

      const category = new Category(data)

      expect(category.category_id).toBeUndefined()
      expect(category.name).toBe('Movie')
      expect(category.description).toBeNull()
      expect(category.is_active).toBeTruthy()
      expect(category.created_at).toBeInstanceOf(Date)
    })

    test('should create a category with all values', () => {
      const created_at = new Date()
      const category = new Category({
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
      const category = new Category({
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
})
