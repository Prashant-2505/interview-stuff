#include <bits/stdc++.h>
using namespace std;

class LRUCache
{
private:
    int capacity;
    list<pair<int, int>> lruList; // Stores (key, value) in LRU order
    unordered_map<int, list<pair<int, int>>::iterator> cache; // Maps key to list iterator

public:
    LRUCache(int capacity)
    {
        this->capacity = capacity;
    }

    int get(int key)
    {
        if (cache.find(key) == cache.end())
            return -1; // Key not found

        // Move accessed node to front (most recently used)
        auto it = cache[key];
        int value = it->second;
        lruList.erase(it); // Remove from current position
        lruList.push_front({key, value}); // Move to front
        cache[key] = lruList.begin(); // Update map reference

        return value;
    }

    void put(int key, int value)
    {
        if (cache.find(key) != cache.end())
        {
            // Key already exists, update value and move to front
            auto it = cache[key];
            lruList.erase(it);
        }
        else if (lruList.size() == capacity)
        {
            // Remove least recently used element (last element in list)
            auto lru = lruList.back();
            cache.erase(lru.first);
            lruList.pop_back();
        }

        // Insert new key-value pair at the front (most recently used)
        lruList.push_front({key, value});
        cache[key] = lruList.begin();
    }
};

int main()
{
    LRUCache cache(4);

    cache.put(2, 6);
    cache.put(4, 7);
    cache.put(8, 11);
    cache.put(7, 10);
    
    cout << cache.get(2) << endl; // Expected: 6 (2 is recently used)
    cout << cache.get(8) << endl; // Expected: 11

    cache.put(5, 6); // LRU element (4,7) is removed

    cout << cache.get(7) << endl; // Expected: 10
    cache.put(5, 7); // Update value of 5

    cout << cache.get(5) << endl; // Expected: 7

    return 0;
}
