function imagesApi(baseUrl, name, page, key) {
  return fetch(
    `${baseUrl}/?q=${name}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  );
}

export default imagesApi;
