async function getService(slug: string, qwery: string) {
  console.log(qwery);

  const url = `https://cms.mantis-185.ru/api/services/${slug}?${qwery}
`;

  try {
    const response = await fetch(url);

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
