async function getSubProducts(qwery?: string) {
  const url = `https://cms.mantis-185.ru/api/products?${qwery}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Ошибка при получении подкатегории:", error.message);
    return null;
  }
}

async function getSubCategory(slug: string, qwery: string) {
  const url = `https://cms.mantis-185.ru/api/subcategory/${slug}?${qwery}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Ошибка при получении подкатегории:", error.message);
    return null;
  }
}

export { getSubProducts, getSubCategory };
