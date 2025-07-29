import { notFound } from "next/navigation";

async function getSiteMenu(qwery: string) {
  const url = `https://cms.mantis-185.ru/api/site-menu?${qwery}`;

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

export { getSiteMenu };
