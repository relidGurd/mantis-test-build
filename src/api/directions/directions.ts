async function getCategories(qwery?: string) {
  const url = `https://cms.mantis-185.ru/api/categories?${qwery}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Ошибка при получении categories:", error.message);
    return null;
  }
}

async function getCategory(slug: string, qwery?: string) {
  const url = `https://cms.mantis-185.ru/api/category/${slug}?${qwery}
  `;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Ошибка HTTPdasdsad: ${response.status} ${response.statusText}`
      );
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Ошибка при получении category:", error.message);
    return null;
  }
}

export { getCategories, getCategory };
