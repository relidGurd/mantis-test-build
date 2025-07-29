import { notFound } from "next/navigation";

async function getBlog(qwery?: string) {
  const url = `https://cms.mantis-185.ru/api/blogs?${qwery}`;

  try {
    const response = await fetch(url, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    notFound();
  }
}

async function getBlogPage(slug: string, qwery?: string) {
  const url = `https://cms.mantis-185.ru/api/blogs/${slug}?${qwery}`;

  try {
    const response = await fetch(url, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Ошибка при получении advantages:", error.message);
    notFound();
  }
}

async function getBlogPagRelations(qwery?: string) {
  const url = `https://cms.mantis-185.ru/api/related-post?${qwery}`;

  try {
    const response = await fetch(url, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Ошибка при получении relations:", error.message);
    notFound();
  }
}

export { getBlog, getBlogPage, getBlogPagRelations };
