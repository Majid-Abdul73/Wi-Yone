import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { StoreForm } from './StoreForm';
import { StoreList } from './StoreList';
import { storeService } from '../../services/storeService';
import { Login } from './Login';

export interface Store {
  id: string;
  name: string;
  city: string;
  country: string;
  phoneNumber: string;
  emailAddress: string;
  location: string; // Add this field
  createdAt: Date;
  updatedAt: Date;
}

export const AdminDashboard: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const [stores, setStores] = useState<Store[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingStore, setEditingStore] = useState<Store | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Keep only this useEffect - it handles both cases properly
  useEffect(() => {
    if (currentUser) {
      loadStores();
    }
  }, [currentUser]);

  // If user is not authenticated, show login
  if (!currentUser) {
    return <Login />;
  }

  const loadStores = async () => {
    try {
      setLoading(true);
      const storesData = await storeService.getStores();
      setStores(storesData);
    } catch (error: any) {
      setError('Failed to load stores: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddStore = async (storeData: Omit<Store, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      await storeService.addStore(storeData);
      await loadStores(); // Refresh the list
      setIsFormOpen(false);
    } catch (error: any) {
      setError('Failed to add store: ' + error.message);
    }
  };

  const handleUpdateStore = async (storeData: Omit<Store, 'id' | 'createdAt' | 'updatedAt'>) => {
    if (!editingStore) return;
    
    try {
      await storeService.updateStore(editingStore.id, storeData);
      await loadStores(); // Refresh the list
      setEditingStore(null);
      setIsFormOpen(false);
    } catch (error: any) {
      setError('Failed to update store: ' + error.message);
    }
  };

  const handleDeleteStore = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this store?')) {
      try {
        await storeService.deleteStore(id);
        await loadStores(); // Refresh the list
      } catch (error: any) {
        setError('Failed to delete store: ' + error.message);
      }
    }
  };

  const handleEditStore = (store: Store) => {
    setEditingStore(store);
    setIsFormOpen(true);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error: any) {
      setError('Failed to logout: ' + error.message);
    }
  };

  const filteredStores = stores.filter(store =>
    store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    store.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    store.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="bg-[#fff8ea] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#212c2d] mx-auto mb-4"></div>
          <p className="text-[#212c2d]">Loading stores...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fff8ea] min-h-screen">
      <div className="bg-[#212c2d] py-4 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">Admin Panel</h1>
          <div className="flex items-center space-x-4">
            <span className="text-white text-sm">Welcome, {currentUser.email}</span>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-[#212c2d]"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
              <button 
                onClick={() => setError('')}
                className="float-right font-bold"
              >
                ×
              </button>
            </div>
          )}
          
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#212c2d] mb-2">Store Management</h2>
              <p className="text-gray-600">Manage store locations and contact information</p>
            </div>
            <Button
              onClick={() => {
                setEditingStore(null);
                setIsFormOpen(true);
              }}
              className="bg-[#212c2d] hover:bg-[#2a3738] text-white px-6 py-3 rounded-lg"
            >
              Add New Store
            </Button>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Total Stores</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#212c2d]">{stores.length}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Countries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#212c2d]">
                  {new Set(stores.map(store => store.country)).size}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Cities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#212c2d]">
                  {new Set(stores.map(store => store.city)).size}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search stores by name, city, or country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#212c2d] focus:border-transparent"
            />
          </div>

          {/* Store List */}
          <StoreList
            stores={filteredStores}
            onEdit={handleEditStore}
            onDelete={handleDeleteStore}
          />

          {/* Store Form Modal */}
          {isFormOpen && (
            <StoreForm
              store={editingStore}
              onSubmit={editingStore ? handleUpdateStore : handleAddStore}
              onCancel={() => {
                setIsFormOpen(false);
                setEditingStore(null);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};