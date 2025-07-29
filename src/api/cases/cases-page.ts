import { notFound } from "next/navigation";

async function getCases(qwery?: string) {
  const url = `https://cms.mantis-185.ru/api/cases?${qwery}`;

  try {
    const response = await fetch(url, { next: { revalidate: false } });

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    notFound();
  }
}

async function getCase(slug: string, qwery?: string) {
  console.log(slug, qwery);
  const url = `https://cms.mantis-185.ru/api/cases/${slug}?${qwery}
`;

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

async function getCasesTags() {
  const url = `https://cms.mantis-185.ru/api/case-tags
`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Ошибка при получении advantages:", error.message);
    return null;
  }
}

export { getCases, getCase, getCasesTags };
