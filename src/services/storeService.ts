import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, query, orderBy, Timestamp, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Store } from '../screens/admin/AdminDashboard';

const STORES_COLLECTION = 'stores';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

interface CacheEntry {
  data: Store[];
  timestamp: number;
}

let storesCache: CacheEntry | null = null;
let activeListeners: (() => void)[] = [];

export const storeService = {
  // Get all stores with caching
  async getStores(): Promise<Store[]> {
    try {
      // Check cache first
      if (storesCache && Date.now() - storesCache.timestamp < CACHE_DURATION) {
        return storesCache.data;
      }

      const q = query(collection(db, STORES_COLLECTION), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      const stores = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date()
      })) as Store[];

      // Update cache
      storesCache = {
        data: stores,
        timestamp: Date.now()
      };

      return stores;
    } catch (error) {
      console.error('Error fetching stores:', error);
      throw error;
    }
  },

  // Real-time listener for stores
  subscribeToStores(callback: (stores: Store[]) => void): () => void {
    const q = query(collection(db, STORES_COLLECTION), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const stores = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date()
      })) as Store[];

      // Update cache
      storesCache = {
        data: stores,
        timestamp: Date.now()
      };

      callback(stores);
    }, (error) => {
      console.error('Error in stores subscription:', error);
    });

    activeListeners.push(unsubscribe);
    return unsubscribe;
  },

  // Clear cache when data is modified
  clearCache() {
    storesCache = null;
  },

  // Add new store
  async addStore(storeData: Omit<Store, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, STORES_COLLECTION), {
        ...storeData,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      });
      
      this.clearCache(); // Clear cache after modification
      return docRef.id;
    } catch (error) {
      console.error('Error adding store:', error);
      throw error;
    }
  },

  // Update store
  async updateStore(id: string, storeData: Omit<Store, 'id' | 'createdAt' | 'updatedAt'>): Promise<void> {
    try {
      const storeRef = doc(db, STORES_COLLECTION, id);
      await updateDoc(storeRef, {
        ...storeData,
        updatedAt: Timestamp.now()
      });
      
      this.clearCache(); // Clear cache after modification
    } catch (error) {
      console.error('Error updating store:', error);
      throw error;
    }
  },

  // Delete store
  async deleteStore(id: string): Promise<void> {
    try {
      await deleteDoc(doc(db, STORES_COLLECTION, id));
      this.clearCache(); // Clear cache after modification
    } catch (error) {
      console.error('Error deleting store:', error);
      throw error;
    }
  },

  // Cleanup all listeners
  cleanup() {
    activeListeners.forEach(unsubscribe => unsubscribe());
    activeListeners = [];
    storesCache = null;
  }
};