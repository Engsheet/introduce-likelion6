export const getPbImageURL = (item = item, fileName = "image") =>
  `https://characters-db.pockethost.io/api/files/${item.collectionId}/${item.id}/${item[fileName]}`;
