import qs from "qs";

export function buildBlogQuery(query: string, page: number) {
  const queryObject: any = {
    populate: {
      image: true,
    },
    pagination: {
      page,
      pageSize: 10,
    },
  };

  if (query) {
    queryObject.filters = {
      tag: {
        $eq: query,
      },
    };
  }

  return qs.stringify(queryObject, { encodeValuesOnly: true });
}
