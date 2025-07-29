import { notFound } from "next/navigation";

async function getService(slug: string, qwery: string) {
  const url = `https://cms.mantis-185.ru/api/services/${slug}?${qwery}
`;

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    notFound();
  }
}

async function getServiceCategory(qwery?: string) {
  const url = `https://cms.mantis-185.ru/api/service-page?${qwery}
`;

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    notFound();
  }
}

export { getService, getServiceCategory };
