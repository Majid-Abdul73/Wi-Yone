
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { StoreCard, StoreInfo } from "../components/StoreCard";
import { StoreFilter } from "../components/StoreFilter";
import { StoreModal } from "../components/StoreModal";
import { useState, useEffect, useMemo, useCallback } from "react";
import { storeService } from '../services/storeService';
import { Store } from './admin/AdminDashboard';

export const Stores = (): JSX.Element => {
  const [selectedStore, setSelectedStore] = useState<StoreInfo | null>(null);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Load stores with real-time updates
  useEffect(() => {
    let unsubscribe: (() => void) | null = null;

    const setupStoreSubscription = async () => {
      try {
        // First, try to get cached data for immediate display
        const cachedStores = await storeService.getStores();
        setStores(cachedStores);
        setLoading(false);
        setError('');

        // Then set up real-time subscription for live updates
        unsubscribe = storeService.subscribeToStores((updatedStores) => {
          setStores(updatedStores);
          setLoading(false);
          setError('');
        });
      } catch (err) {
        console.error('Error setting up store subscription:', err);
        setError('Failed to load stores. Please try again later.');
        setLoading(false);
      }
    };

    setupStoreSubscription();

    // Cleanup subscription on unmount
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  // Convert Firebase Store to StoreInfo format for compatibility (memoized)
  const convertToStoreInfo = useCallback((store: Store): StoreInfo => ({
    id: (parseInt(store.id) || Math.random()).toString(),
    name: store.name,
    city: store.city,
    country: store.country,
    phoneNumber: store.phoneNumber,
    emailAddress: store.emailAddress,
    location: store.location || '' // Add this field
  }), []);

  // Memoize converted stores to avoid unnecessary re-renders
  const storeInfoList: StoreInfo[] = useMemo(() => 
    stores.map(convertToStoreInfo), [stores, convertToStoreInfo]
  );

  // Memoize unique countries for filter
  const countries = useMemo(() => {
    const uniqueCountries = Array.from(new Set(storeInfoList.map(store => store.country)));
    return uniqueCountries.sort();
  }, [storeInfoList]);

  // Memoize filtered stores for better performance
  const filteredStores = useMemo(() => {
    return storeInfoList.filter(store => {
      const matchesCountry = !selectedCountry || store.country === selectedCountry;
      const matchesSearch = !searchQuery || 
        store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.country.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCountry && matchesSearch;
    });
  }, [storeInfoList, selectedCountry, searchQuery]);

  // Memoized event handlers
  const handleViewDetails = useCallback((store: StoreInfo) => {
    setSelectedStore(store);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedStore(null);
  }, []);

  const handleReset = useCallback(() => {
    setSelectedCountry("");
    setSearchQuery("");
  }, []);

  const handleRetry = useCallback(() => {
    setLoading(true);
    setError('');
    // Force refresh by clearing cache and reloading
    storeService.clearCache();
    window.location.reload();
  }, []);

  return (
    <div className="bg-[#fff8ea] min-h-screen">
      <div className="relative">        
        <div className="relative z-10">
          <div className="w-full h-[500px] bg-[#212c2d] bg-[url('/coalsArtboard.svg')] bg-no-repeat bg-cover overflow-hidden">
            <Header title="STORES" />
          </div>
          
          <div className="container mx-auto px-4 py-4 sm:py-6 md:py-8">
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              
              {/* Card 1 - Store Listings Section */}
              <div className="order-1 lg:order-none lg:col-span-2 bg-[#FFFEFC] -mt-40 sm:-mt-50 md:-mt-60 rounded-[20px] p-4 sm:p-6">
                {loading && stores.length === 0 ? (
                  <div className="flex justify-center items-center py-8 sm:py-12">
                    <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-[#212c2d]"></div>
                    <p className="ml-3 sm:ml-4 text-gray-600 text-sm sm:text-base">Loading stores...</p>
                  </div>
                ) : error ? (
                  <div className="text-center py-8 sm:py-12">
                    <p className="text-red-600 text-base sm:text-lg mb-4">{error}</p>
                    <button 
                      onClick={handleRetry}
                      className="bg-[#212c2d] text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-[#2a3738] transition-colors text-sm sm:text-base"
                    >
                      Retry
                    </button>
                  </div>
                ) : (
                  <>
                    <StoreFilter
                      countries={countries}
                      selectedCountry={selectedCountry}
                      onCountryChange={setSelectedCountry}
                      searchQuery={searchQuery}
                      onSearchChange={setSearchQuery}
                      onReset={handleReset}
                    />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                      {filteredStores.map((store) => (
                        <StoreCard
                          key={store.id}
                          store={store}
                          onClick={handleViewDetails}
                        />
                      ))}
                    </div>
                    
                    {filteredStores.length === 0 && (
                      <div className="text-center py-8 sm:py-12">
                        <p className="text-gray-600 text-base sm:text-lg">
                          {searchQuery || selectedCountry 
                            ? "No stores found matching your criteria." 
                            : "No stores available at the moment."}
                        </p>
                      </div>
                    )}
                    
                    {/* Real-time update indicator */}
                    {loading && stores.length > 0 && (
                      <div className="fixed bottom-4 right-4 bg-green-500 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-lg shadow-lg flex items-center">
                        <div className="animate-pulse w-2 h-2 bg-white rounded-full mr-2"></div>
                        <span className="text-xs sm:text-sm">Syncing...</span>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Card 2 - Statistics and Display Section */}
              <div className="order-2 lg:order-none lg:col-span-1 -mt-0 lg:-mt-40 lg:sm:-mt-50 lg:md:-mt-60">
                <div className="bg-gradient-to-b from-[#e15822] to-[#d14812] rounded-[20px] shadow-lg p-4 sm:p-6 md:p-8 text-white lg:sticky lg:top-8 max-w-xs mx-auto">
                  {/* Tent Display Image */}
                  <div className="mb-6 sm:mb-8 -mt-8 lg:-mt-20 lg:sm:-mt-24 lg:md:-mt-32">
                    <img 
                      src="/Display_Tent.svg" 
                      alt="Wi Yone Display Tent" 
                      className="w-full h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] mx-auto"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Dynamic Statistics */}
                  <div className="text-start space-y-4 sm:space-y-6">
                    <div className="border-b">
                      <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2" style={{ fontFamily: 'BigNoodleTitling, sans-serif' }}>
                        {loading && stores.length === 0 ? (
                          <div className="animate-pulse bg-white/20 h-12 sm:h-14 md:h-16 w-12 sm:w-14 md:w-16 rounded"></div>
                        ) : (
                          stores.length
                        )}
                      </div>
                      <div className="text-base sm:text-lg opacity-90" style={{ fontFamily: 'BigNoodleTitling, sans-serif' }}>Locations</div>
                      <div className="w-12 sm:w-16 h-0.5 bg-white mx-auto mt-2"></div>
                    </div>
                    
                    <div>
                      <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2" style={{ fontFamily: 'BigNoodleTitling, sans-serif' }}>
                        {loading && stores.length === 0 ? (
                          <div className="animate-pulse bg-white/20 h-12 sm:h-14 md:h-16 w-12 sm:w-14 md:w-16 rounded"></div>
                        ) : (
                          countries.length
                        )}
                      </div>
                      <div className="text-base sm:text-lg opacity-90" style={{ fontFamily: 'BigNoodleTitling, sans-serif' }}>Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <Footer />
          </div>
        </div>
      </div>
      
      {/* Store Details Modal */}
      {selectedStore && (
        <StoreModal
          store={selectedStore}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};
