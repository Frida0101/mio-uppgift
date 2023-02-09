/* Returns the absolute image URL from a given relative product URL.
 *  Corrects invalid paths and/or file extensions on the URL.
 */
export function getProductImageURL(url) {
  return new URL(
    url
      .replace(/\.jpg0+/, ".jpg")
      .replace("/product00s/", "/products/")
      .replace("/products0/", "/products/"),
    "https://www.mcdn.net"
  ).href;
}
