export enum Category {
  NOKIA = 'Nokia Campaign',
  ACCESSORIES_WATCHES = 'Car Accessories & Watches',
  SOJY_TOOLS = 'Sojy & Tools',
  TOUCH_PHONES = 'Touch Phones',
  NEW_TESTING = 'New Testing',
  OPTIMIZATION = 'Optimization & Weak Items',
  UNCATEGORIZED = 'Uncategorized'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  stock: number;
  price: number;
  profit: number; // Added profit field
  performance: 'High' | 'Medium' | 'Low'; // AI analyzed or manually set
}

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  date: string; // ISO string
  category?: Category;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface DayPlan {
  dayIndex: number; // 0 (Sunday) to 6 (Saturday)
  theme: Category;
  description: string;
}
