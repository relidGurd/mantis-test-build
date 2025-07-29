import { notFound } from "next/navigation";

async function getSubProducts(qwery?: string) {
  const url = `https://cms.mantis-185.ru/api/products?${qwery}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw notFound();
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    notFound();
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
    notFound();
  }
}

export { getSubProducts, getSubCategory };
