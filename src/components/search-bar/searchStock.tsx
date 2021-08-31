function searchStock(search: string): Promise<any[]> {
  const apiKey: string =
    '563492ad6f91700001000001a780e996c46543c4aaa1b447d96c7bd5';
  return fetch(`https://api.pexels.com/v1/search?query=${search}&per_page=1`, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${apiKey}`,
    }),
  })
    .then((r) => r.json())
    .then((r) => r.images)
    .catch((error) => {
      console.error(error);
      return [];
    });
}
export default searchStock;
