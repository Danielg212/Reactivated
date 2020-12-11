// * * * * *
// Developer: Ben Elferink
// https://github.com/belferink1996
// * * * * *
// How to use these functions:
// 1) import { getStorage, setStorage } from './localStorage.js';
//
// To generate data on mount:
// 2) let anyVariableOrState = getStorage( 'key', value )  <-- 'key' is a string, used for load & save to localStorage,
//                                      - OR -                  value is anything you want it to be, it's used if storage item doesn't exist (first time setup)
//    let anyVariableOrState = getStorage( 'key , 'API', 'https://api.github.com' )  <-- pass 'API' as default value, and the API link is the 3rd paramater,
//                                                                                       it'll fetch the API only if storage doesn't exist (great for APIs with limited calls, and require caching)
// To save data when it changes do:
// 3) React.useEffect(() => {
//      setStorage( 'key', anyVariableOrState )
//    }, [anyVariableOrState])

export function getStorage(key, defaultValue, apiUrl) {
  let storage = JSON.parse(window.localStorage.getItem(key)), // get storage item
    data; // undefined

  if (storage == null) {
    // if storage item is empty

    if (defaultValue === 'API') {
      // if 2nd parameter is 'API'
      const doFetch = async (url) => {
        // JavaScript function responsible for fetching and handling the data from the API
        try {
          const response = await fetch(url);
          const data = await response.json();
          console.log(`✅ -FETCHED- : ${url}`, data);
          return data;
        } catch (error) {
          // fetching error
          console.warn(`❌ -FAILED- : ${url}`, error);
          return null;
        }
      };

      data = doFetch(apiUrl); // data is fetch from API link (or 'null' if fetch failed)
    } else {
      data = defaultValue; // data is generated by given default value
      console.log('💡 -GENERATED-', data);
    }
  } else {
    // storage has data

    data = storage; // data to return is taken from storage

    console.log(`⤴️ -LOADED- localStorage: ${key}`, data);
  }

  if (typeof data === 'function') {
    // defaultValue can be a return function
    return data(); // call function -> return it's variable
  } else {
    return data; // return either sotrage data or generated data
  }
}

export function setStorage(key, data) {
  window.localStorage.setItem(key, JSON.stringify(data)); // save storage item
  console.log(`⤵️ -SAVED- localStorage: ${key}`, data);
}
