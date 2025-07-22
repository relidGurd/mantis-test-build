import qs from "qs";

export function formatDate(isoString: string) {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Месяцы с 0
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

export function BlogPageBreadcrumbs(title: string) {
  return [
    {
      title: "Главная",
      url: "/",
    },
    {
      title: "Блог",
      url: "/blog",
    },
    {
      title,
      url: "#",
    },
  ];
}

export const blogPageRealtionsQwery = qs.stringify({
  populate: {
    blogs: {
      populate: "*",
    },
    product: {
      populate: "*",
    },
  },
});

export const blogPageQwery = qs.stringify({
  populate: {
    image: {
      populate: "*",
    },
  },
});
