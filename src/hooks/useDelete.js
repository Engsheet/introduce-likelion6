export function useDelete() {
  return async function deleteData(deleteId) {
    return await fetch(`https://characters-db.pockethost.io/api/collections/characters/records/${deleteId}`, {
      method: "DELETE",
    });
  };
}