import React, { useState } from 'react';
import { LayoutDashboard, Calendar, Package, MessageSquare, Menu, Settings, DollarSign } from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { DailyPlanner } from './components/DailyPlanner';
import { InventoryManager } from './components/InventoryManager';
import { AIAssistant } from './components/AIAssistant';
import { ProfitCenter } from './components/ProfitCenter';
import { INITIAL_PRODUCTS } from './constants';
import { Product, Task } from './types';
import { GeminiService } from './services/geminiService';

const geminiService = new GeminiService();

function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'planner' | 'inventory' | 'profit' | 'chat'>('planner');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // App State
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [tasks, setTasks] = useState<Task[]>([]);

  const NavItem = ({ id, icon: Icon, label }: any) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
        activeTab === id 
          ? 'bg-indigo-600 text-white shadow-md' 
          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
      }`}
    >
      <Icon size={20} />
      {isSidebarOpen && <span className="font-medium">{label}</span>}
    </button>
  );

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside 
        className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white transition-all duration-300 flex flex-col shadow-xl z-20`}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-800">
          {isSidebarOpen && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold">B</div>
              <span className="text-xl font-bold tracking-tight">BizMaster</span>
            </div>
          )}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-gray-800 rounded-lg">
            <Menu size={20} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <NavItem id="dashboard" icon={LayoutDashboard} label="Dashboard" />
          <NavItem id="planner" icon={Calendar} label="Daily Planner" />
          <NavItem id="profit" icon={DollarSign} label="Profit Center" />
          <NavItem id="inventory" icon={Package} label="Inventory" />
          <NavItem id="chat" icon={MessageSquare} label="AI Consultant" />
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button className="flex items-center gap-3 text-gray-400 hover:text-white transition px-2">
            <Settings size={20} />
            {isSidebarOpen && <span>Settings</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm px-8 py-4 sticky top-0 z-10 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 capitalize">
            {activeTab === 'chat' ? 'AI Business Consultant' : activeTab.replace('-', ' ')}
          </h1>
          <div className="flex items-center gap-4">
            <div className="text-sm text-right hidden sm:block">
              <p className="font-bold text-gray-800">My Business</p>
              <p className="text-xs text-gray-500">Online Store</p>
            </div>
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold">
              MB
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          {activeTab === 'dashboard' && <Dashboard products={products} tasks={tasks} />}
          {activeTab === 'planner' && <DailyPlanner products={products} tasks={tasks} setTasks={setTasks} geminiService={geminiService} />}
          {activeTab === 'inventory' && <InventoryManager products={products} setProducts={setProducts} />}
          {activeTab === 'profit' && <ProfitCenter products={products} setProducts={setProducts} />}
          {activeTab === 'chat' && (
            <AIAssistant 
              geminiService={geminiService} 
              products={products} 
              setProducts={setProducts} 
              setTasks={setTasks} 
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
