import React, { useState, useEffect } from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Store } from './AdminDashboard';

interface StoreFormProps {
  store?: Store | null;
  onSubmit: (storeData: Omit<Store, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onCancel: () => void;
}

export const StoreForm: React.FC<StoreFormProps> = ({ store, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    country: '',
    phoneNumber: '',
    emailAddress: '',
    location: '' // Add location field
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (store) {
      setFormData({
        name: store.name,
        city: store.city,
        country: store.country,
        phoneNumber: store.phoneNumber,
        emailAddress: store.emailAddress,
        location: store.location || '' // Add location field
      });
    }
  }, [store]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Store name is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^[+]?[0-9\s-()]+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email address';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Map location URL is required';
    } else if (!formData.location.includes('google.com/maps/embed')) {
      newErrors.location = 'Please enter a valid Google Maps embed URL';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-50 to-white shadow-2xl border-0">
        <CardHeader className="bg-gradient-to-r from-[#212c2d] to-[#2a3738] text-white rounded-t-lg">
          <CardTitle className="text-xl font-bold">
            {store ? 'Edit Store' : 'Add New Store'}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="bg-gray-50 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Store Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Store Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#212c2d] focus:border-transparent bg-white ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter store name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City *
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleChange('city', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#212c2d] focus:border-transparent bg-white ${
                  errors.city ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter city"
              />
              {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country *
              </label>
              <input
                type="text"
                value={formData.country}
                onChange={(e) => handleChange('country', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#212c2d] focus:border-transparent bg-white ${
                  errors.country ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter country"
              />
              {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => handleChange('phoneNumber', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#212c2d] focus:border-transparent bg-white ${
                  errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter phone number"
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.emailAddress}
                onChange={(e) => handleChange('emailAddress', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#212c2d] focus:border-transparent bg-white ${
                  errors.emailAddress ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter email address"
              />
              {errors.emailAddress && <p className="text-red-500 text-sm mt-1">{errors.emailAddress}</p>}
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Map Location (Google Maps Embed URL) *
              </label>
              <textarea
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#212c2d] focus:border-transparent bg-white h-24 resize-none ${
                  errors.location ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Paste Google Maps embed URL here (e.g., https://www.google.com/maps/embed?pb=...)"
              />
              {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
              <p className="text-xs text-gray-500 mt-1">
                To get the embed URL: Go to Google Maps → Share → Embed a map → Copy HTML → Extract the src URL
              </p>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-4 pt-4">
              <Button
                type="button"
                onClick={onCancel}
                variant="outline"
                className="px-6 py-2 bg-white hover:bg-gray-50"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-[#212c2d] hover:bg-[#2a3738] text-white px-6 py-2"
              >
                {store ? 'Update Store' : 'Add Store'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};