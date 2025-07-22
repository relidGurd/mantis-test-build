import qs from "qs";

export function StoreFiltersQuery(slug: string, query: any, page: any) {
  const filters: any = {
    subcategory: {
      slug: {
        $eq: slug,
      },
    },
  };

  if (query) {
    try {
      const fixed = JSON.parse(query.replace(/'/g, '"')); // строка → массив

      if (Array.isArray(fixed) && fixed.length > 0) {
        filters.specifications = {
          tab: {
            property: {
              $in: fixed,
            },
          },
        };
      }
    } catch (err) {
      console.error("Ошибка парсинга фильтра:", err);
    }
  }

  const qweryProduct = qs.stringify({
    populate: {
      preview_image: {
        populate: "*",
      },
      subcategory: true,
      specifications: {
        populate: "*",
      },
    },
    filters,
    pagination: {
      page: page,
      pageSize: 10,
    },
  });

  const qweryCategory = qs.stringify({
    populate: "*",
  });

  return [qweryProduct, qweryCategory];
}
