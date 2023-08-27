export default function useUpdate() {
  return async function updateData(productId, productData) {
    return await fetch(`https://characters-db.pockethost.io/api/collections/characters/records/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
  };
}
