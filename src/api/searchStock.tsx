function searchStock(search: string): Promise<any[]> {
  const apiKey: string =
    '563492ad6f91700001000001f3a8889e446a484e9635719a6d52dbe9';
  return fetch(`https://api.pexels.com/v1/search?query=${search}&per_page=18`, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${apiKey}`,
    }),
  })
    .then((r) => r.json())
    .then((r) => r.photos)
    .catch((error) => {
      console.error(error);
      return [];
    });
}
export default searchStock;
