import { Category, Product, DayPlan } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  // 1. Nokia Campaign
  { id: '1', name: 'نوكيا 8210', category: Category.NOKIA, stock: 50, price: 65000, profit: 15000, performance: 'High' },
  { id: '2', name: 'نوكيا 6300 اصلي', category: Category.NOKIA, stock: 40, price: 50000, profit: 12000, performance: 'Medium' },
  { id: '3', name: 'نوكيا 5310', category: Category.NOKIA, stock: 35, price: 55000, profit: 13500, performance: 'Medium' },
  { id: '4', name: 'نوكيا 2720 فلب اصلي', category: Category.NOKIA, stock: 20, price: 90000, profit: 22500, performance: 'High' },
  { id: '5', name: 'نوكيا 235 اصلي', category: Category.NOKIA, stock: 30, price: 45000, profit: 7500, performance: 'Low' },
  { id: '6', name: 'نوكيا 230', category: Category.NOKIA, stock: 25, price: 80000, profit: 18000, performance: 'High' },
  { id: '7', name: 'نوكيا 150 الفيتنامي', category: Category.NOKIA, stock: 60, price: 35000, profit: 9000, performance: 'High' },
  { id: '8', name: 'نوكيا 800 مدرع', category: Category.NOKIA, stock: 15, price: 120000, profit: 30000, performance: 'Medium' },
  { id: '9', name: 'نوكيا 5710 اصلي', category: Category.NOKIA, stock: 10, price: 100000, profit: 22500, performance: 'Low' },
  { id: '10', name: 'نوكيا مغير الاصوات ماد', category: Category.NOKIA, stock: 100, price: 20000, profit: 6000, performance: 'Medium' },
  { id: '11', name: 'سامسونج B310E', category: Category.NOKIA, stock: 50, price: 30000, profit: 7500, performance: 'High' },

  // 2. Cars & Watches
  { id: '12', name: 'شاحنة سيارة اصلي', category: Category.ACCESSORIES_WATCHES, stock: 100, price: 15000, profit: 4500, performance: 'High' },
  { id: '13', name: 'ستاند كوب', category: Category.ACCESSORIES_WATCHES, stock: 80, price: 18000, profit: 6000, performance: 'Medium' },
  { id: '14', name: 'ساعة بكج كبير اصلي', category: Category.ACCESSORIES_WATCHES, stock: 30, price: 60000, profit: 15000, performance: 'High' },
  { id: '15', name: 'ساعة 7 سير', category: Category.ACCESSORIES_WATCHES, stock: 200, price: 7500, profit: 3000, performance: 'High' },
  { id: '16', name: 'ساعة سماعة اصلي', category: Category.ACCESSORIES_WATCHES, stock: 40, price: 50000, profit: 12000, performance: 'Medium' },
  { id: '17', name: 'ساعة 3 سير', category: Category.ACCESSORIES_WATCHES, stock: 50, price: 35000, profit: 7500, performance: 'Medium' },
  { id: '18', name: 'سبيكر دبل مايك اصلي', category: Category.ACCESSORIES_WATCHES, stock: 20, price: 65000, profit: 15000, performance: 'High' },
  { id: '19', name: 'سماعة سبيكر 3 انج اصلي', category: Category.ACCESSORIES_WATCHES, stock: 30, price: 22500, profit: 7500, performance: 'Medium' },
  { id: '20', name: 'سماعة سبيكر 8 انج', category: Category.ACCESSORIES_WATCHES, stock: 15, price: 90000, profit: 22500, performance: 'High' },
  { id: '21', name: 'سماعة شاشة اصلي', category: Category.ACCESSORIES_WATCHES, stock: 10, price: 75000, profit: 15000, performance: 'Low' },
  { id: '22', name: 'سماعة عزل صوت', category: Category.ACCESSORIES_WATCHES, stock: 60, price: 45000, profit: 12000, performance: 'High' },
  { id: '23', name: 'ستاند سيارة اصلي 360 درجة', category: Category.ACCESSORIES_WATCHES, stock: 90, price: 22500, profit: 7500, performance: 'High' },
  { id: '24', name: 'ستاند حديدي ULTRA', category: Category.ACCESSORIES_WATCHES, stock: 70, price: 25000, profit: 9000, performance: 'Medium' },
  { id: '25', name: 'ساعة 5 برو', category: Category.ACCESSORIES_WATCHES, stock: 45, price: 80000, profit: 22500, performance: 'High' },
  { id: '26', name: 'بور بانك', category: Category.ACCESSORIES_WATCHES, stock: 55, price: 35000, profit: 10000, performance: 'High' },
  { id: '27', name: 'ستاند شفط حديد', category: Category.ACCESSORIES_WATCHES, stock: 65, price: 20000, profit: 6000, performance: 'Medium' },

  // 3. Sojy & Tools
  { id: '28', name: 'منعمة القدم اصلي', category: Category.SOJY_TOOLS, stock: 40, price: 12000, profit: 4500, performance: 'Medium' },
  { id: '29', name: 'مكينة ليزر', category: Category.SOJY_TOOLS, stock: 10, price: 180000, profit: 45000, performance: 'Low' },
  { id: '30', name: 'فارة غسل السيارة', category: Category.SOJY_TOOLS, stock: 25, price: 50000, profit: 15000, performance: 'High' },
  { id: '31', name: 'بلور اصلي', category: Category.SOJY_TOOLS, stock: 20, price: 35000, profit: 12000, performance: 'Medium' },
  { id: '32', name: 'ليزر اخضر', category: Category.SOJY_TOOLS, stock: 50, price: 20000, profit: 7500, performance: 'High' },
  { id: '33', name: 'مكينة حلاقة', category: Category.SOJY_TOOLS, stock: 45, price: 30000, profit: 9000, performance: 'High' },
  { id: '34', name: 'داتا شو', category: Category.SOJY_TOOLS, stock: 5, price: 300000, profit: 60000, performance: 'Low' },
  { id: '35', name: 'جنطة الظهر', category: Category.SOJY_TOOLS, stock: 60, price: 30000, profit: 7500, performance: 'Medium' },

  // 4. Touch Phones
  { id: '36', name: 'Samsung S25 Ultra', category: Category.TOUCH_PHONES, stock: 5, price: 1800000, profit: 150000, performance: 'High' },
  { id: '37', name: 'Note 50 Pro / Plus', category: Category.TOUCH_PHONES, stock: 15, price: 270000, profit: 35000, performance: 'Medium' },
  { id: '38', name: 'Redmi 14C', category: Category.TOUCH_PHONES, stock: 20, price: 225000, profit: 30000, performance: 'High' },
  { id: '39', name: 'POVA 5', category: Category.TOUCH_PHONES, stock: 18, price: 250000, profit: 33000, performance: 'Medium' },
  { id: '40', name: 'Camon 40 Premier', category: Category.TOUCH_PHONES, stock: 12, price: 450000, profit: 60000, performance: 'Medium' },
  { id: '41', name: 'iPhone 16 Pro Max', category: Category.TOUCH_PHONES, stock: 8, price: 2100000, profit: 180000, performance: 'High' },
];

export const WEEKLY_SCHEDULE: DayPlan[] = [
  { dayIndex: 1, theme: Category.NOKIA, description: 'Focus on all Nokia/Button phones.' },
  { dayIndex: 2, theme: Category.ACCESSORIES_WATCHES, description: 'Car accessories, GT5 Pro, and Watches.' },
  { dayIndex: 3, theme: Category.SOJY_TOOLS, description: 'Sojy items: Lasers, tools, personal care.' },
  { dayIndex: 4, theme: Category.TOUCH_PHONES, description: 'Smartphones and Touch devices.' },
  { dayIndex: 5, theme: Category.NEW_TESTING, description: 'Test new items and add them to categories.' },
  { dayIndex: 6, theme: Category.OPTIMIZATION, description: 'Strengthen weak items and clear stock.' },
  { dayIndex: 0, theme: Category.OPTIMIZATION, description: 'Sunday Review & Planning.' }, // Defaulting Sunday
];
