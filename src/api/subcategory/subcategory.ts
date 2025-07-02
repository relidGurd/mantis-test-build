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

export { getSubProducts };
