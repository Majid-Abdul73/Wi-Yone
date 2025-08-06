import React from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Store } from './AdminDashboard';

interface StoreListProps {
  stores: Store[];
  onEdit: (store: Store) => void;
  onDelete: (id: string) => void;
}

export const StoreList: React.FC<StoreListProps> = ({ stores, onEdit, onDelete }) => {
  if (stores.length === 0) {
    return (
      <Card>
        <CardContent className="text-center py-12">
          <div className="text-gray-500">
            <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No stores found</h3>
            <p className="text-gray-500">Get started by adding your first store location.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {stores.map((store) => (
        <Card key={store.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#212c2d] mb-1">{store.name}</h3>
                    <p className="text-gray-600">
                      <span className="inline-flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {store.city}, {store.country}
                      </span>
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <p className="text-gray-700">
                      <span className="inline-flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {store.phoneNumber}
                      </span>
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="text-gray-700">
                      <span className="inline-flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {store.emailAddress}
                      </span>
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 text-xs text-gray-500">
                  <span>Created: {new Date(store.createdAt).toLocaleDateString()}</span>
                  {store.updatedAt && store.updatedAt !== store.createdAt && (
                    <span className="ml-4">Updated: {new Date(store.updatedAt).toLocaleDateString()}</span>
                  )}
                </div>
              </div>
              
              <div className="flex space-x-2 ml-4">
                <Button
                  onClick={() => onEdit(store)}
                  variant="outline"
                  size="sm"
                  className="text-[#212c2d] border-[#212c2d] hover:bg-[#212c2d] hover:text-white"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => onDelete(store.id)}
                  variant="outline"
                  size="sm"
                  className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                >
                  Delete
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};