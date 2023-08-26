import useFetchData from './useFetchData';

const endpoint = `https://characters-db.pockethost.io/api/collections/characters/records`;

function useDataList() {
  return useFetchData(endpoint);
}

export default useDataList;