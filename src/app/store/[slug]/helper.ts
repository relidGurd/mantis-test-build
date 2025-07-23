import qs from "qs";

export function StoreFiltersQuery(
  slug: string,
  query: any,
  page: any,
  sorting: string,
  price: string
) {
  const filters: any = {
    subcategory: {
      slug: {
        $eq: slug,
      },
    },
    price: {
      $gte: 0,
      $lte: price ? price : 1000000,
    },
  };

  const sort: any =
    typeof sorting === "string" && sorting.trim() !== ""
      ? { price: sorting }
      : {};

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
    sort,
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
