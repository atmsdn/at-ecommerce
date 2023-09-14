import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getAllCategory() {
    return [
      {
        id: 1, categoryName: 'Vegetables & Fruit', isAcitve: true,
        subCategory: [
          {
            categoryTitle: 'Organic Vegetables',
            subCategoryList: [
              { id: 1, categoryName: 'Potato & Tomato', isAcitve: true },
              { id: 2, categoryName: 'Cucumber & Capsicum', isAcitve: true },
              { id: 3, categoryName: 'Leafy Vegetables', isAcitve: true },
              { id: 4, categoryName: 'Root Vegetables', isAcitve: true },
              { id: 5, categoryName: 'Beans & Okra', isAcitve: true },
              { id: 6, categoryName: 'Cabbage & Cauliflower', isAcitve: true },
              { id: 7, categoryName: 'Gourd & Drumstick', isAcitve: true },
            ]
          },
          {
            categoryTitle: 'Fresh Fruit',
            subCategoryList: [
              { id: 1, categoryName: 'Banana & Papaya', isAcitve: true },
              { id: 2, categoryName: 'Kiwi, Citrus Fruit', isAcitve: true },
              { id: 3, categoryName: 'Apples & Pomegranate', isAcitve: true },
              { id: 4, categoryName: 'Seasonal Fruits', isAcitve: true },
              { id: 5, categoryName: 'Mangoes', isAcitve: true }
            ]
          }
        ]
      },
      {
        id: 2, categoryName: 'Beverages', isAcitve: true,
        subCategory: [
          {
            categoryTitle: 'Energy & Soft Drinks',
            subCategoryList: [
              { id: 1, categoryName: 'Soda & Cocktail Mix', isAcitve: true },
              { id: 2, categoryName: 'Soda & Cocktail Mix', isAcitve: true },
              { id: 3, categoryName: 'Sports & Energy Drinks', isAcitve: true },
              { id: 4, categoryName: 'Spring Water', isAcitve: true },
            ]
          }
        ]
      },
      {
        id: 3, categoryName: 'Meats & Seafood', isAcitve: true,
        subCategory: [
          {
            categoryTitle: 'Meat',
            subCategoryList: [
              { id: 1, categoryName: 'Fresh Meat', isAcitve: true },
              { id: 2, categoryName: 'Frozen Meat', isAcitve: true },
              { id: 3, categoryName: 'Marinated Meat', isAcitve: true },
              { id: 4, categoryName: 'Fresh & Frozen Meat', isAcitve: true },
            ]
          },
          {
            categoryTitle: 'Seafood',
            subCategoryList: [
              { id: 1, categoryName: 'Fresh Water Fish', isAcitve: true },
              { id: 2, categoryName: 'Dry Fish', isAcitve: true },
              { id: 3, categoryName: 'Frozen Fish & Seafood', isAcitve: true },
              { id: 4, categoryName: 'Marine Water Fish', isAcitve: true },
              { id: 5, categoryName: 'Prawans & Shrimps', isAcitve: true },
            ]
          }
        ]
      },
      {
        id: 4, categoryName: 'Breakfast & Dairy', isAcitve: true,
        subCategory: [
          {
            categoryTitle: 'Breakfast Cereals',
            subCategoryList: [
              { id: 1, categoryName: 'Oats & Porridge', isAcitve: true },
              { id: 2, categoryName: 'Kids Cereal', isAcitve: true },
              { id: 3, categoryName: 'Muesli', isAcitve: true },
              { id: 4, categoryName: 'Instant Noodles', isAcitve: true },
            ]
          },
          {
            categoryTitle: 'Dairy',
            subCategoryList: [
              { id: 1, categoryName: 'Milk', isAcitve: true },
              { id: 2, categoryName: 'Curd', isAcitve: true },
              { id: 3, categoryName: 'Paneer, Tofu & Cream', isAcitve: true },
              { id: 4, categoryName: 'Buttermilk & Lassi', isAcitve: true },
              { id: 5, categoryName: 'Yogurt & Shrikhand', isAcitve: true },
            ]
          }
        ]
      },
      {
        id: 5, categoryName: 'Frozen Foods', isAcitve: true,
        subCategory: [
          {
            categoryTitle: 'Noodle, Pasta',
            subCategoryList: [
              { id: 1, categoryName: 'Instant Noodles', isAcitve: true },
              { id: 2, categoryName: 'Hakka Noodles', isAcitve: true },
              { id: 3, categoryName: 'Cup Noodles', isAcitve: true },
              { id: 4, categoryName: 'Instant Pasta', isAcitve: true },
            ]
          }
        ]
      },
      {
        id: 6, categoryName: 'Biscuits & Snacks', isAcitve: true,
        subCategory: [
          {
            categoryTitle: 'Biscuits & Cookies',
            subCategoryList: [
              { id: 1, categoryName: 'Salted Biscuits', isAcitve: true },
              { id: 2, categoryName: 'Marie, Health, Digestive', isAcitve: true },
              { id: 3, categoryName: 'Cream Biscuits & Wafers', isAcitve: true },
              { id: 4, categoryName: 'Glucose & Milk Biscuits', isAcitve: true },
            ]
          },
          {
            categoryTitle: 'Bakery Snacks',
            subCategoryList: [
              { id: 1, categoryName: 'Bread Sticks & Lavash', isAcitve: true },
              { id: 2, categoryName: 'Cheese & Garlic Bread', isAcitve: true },
              { id: 3, categoryName: 'Puffs, Patties, Sandwiches', isAcitve: true },
              { id: 4, categoryName: 'Breadcrumbs & Croutons', isAcitve: true },
            ]
          }
        ]
      },
      {
        id: 6, categoryName: 'Grocery & Staples', isAcitve: true,
        subCategory: [
          {
            categoryTitle: 'Grocery',
            subCategoryList: [
              { id: 1, categoryName: 'Lemon, Ginger & Garlic', isAcitve: true },
              { id: 2, categoryName: 'Indian & Exotic Herbs', isAcitve: true },
              { id: 3, categoryName: 'Organic Vegetables', isAcitve: true },
              { id: 4, categoryName: 'Organic Fruits', isAcitve: true },
            ]
          },
          {
            categoryTitle: 'Organic Staples',
            subCategoryList: [
              { id: 1, categoryName: 'Organic Dry Fruits', isAcitve: true },
              { id: 2, categoryName: 'Organic Dals & Pulses', isAcitve: true },
              { id: 3, categoryName: 'Organic Sugar, Jaggery', isAcitve: true },
              { id: 4, categoryName: 'Organic Masalas & Spices', isAcitve: true },
              { id: 5, categoryName: 'Organic Rice, Other Rice', isAcitve: true },
              { id: 6, categoryName: 'Organic Flours', isAcitve: true },
            ]
          }
        ]
      }
    ]
  }
}
