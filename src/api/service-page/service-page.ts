async function getService(qwery: string) {
  const url = `https://cms.mantis-185.ru/api/services/xotrt1hpntpa19shmrldrklk?${qwery}
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

export { getService };
