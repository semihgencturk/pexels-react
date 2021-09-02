function getHeaderBackgroundImage(): Promise<any[]> {
  const search: string = 'sky';
  const apiKey: string =
    '563492ad6f91700001000001280cef2af0e144eabfab3185be7121ca';
  return fetch(`https://api.pexels.com/v1/search?query=${search}&per_page=1`, {
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
export default getHeaderBackgroundImage;