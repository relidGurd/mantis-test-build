async function getProduct(slug: string, qwery?: string) {
  const url = `https://cms.mantis-185.ru/api/product/${slug}?${qwery}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Ошибка при получении products:", error.message);
    return null;
  }
}

async function getRelatedProducts(qwery?: string) {
  const url = `https://cms.mantis-185.ru/api/related-product?${qwery}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Ошибка при получении products:", error.message);
    return null;
  }
}

export { getProduct, getRelatedProducts };
