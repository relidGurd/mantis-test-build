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
    console.error("Ошибка при получении services:", error.message);
    return null;
  }
}

export { getService };
