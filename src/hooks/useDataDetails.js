import useFetchData from "./useFetchData";

const getEndpoint = (dataId) => `https://characters-db.pockethost.io/api/collections/characters/records/${dataId}`;

export default function useDataDetails(dataId) {
  return useFetchData(getEndpoint(dataId));
}
