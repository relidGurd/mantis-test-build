import { getBlogPage } from "@/api/blog/blog";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import Typography from "@/ui-kit/typography/typography";
import type { Metadata, ResolvingMetadata } from "next";
import qs from "qs";
type Params = Promise<{ slug: string }>;

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;

  const blogPageQwery = qs.stringify({
    populate: {
      image: {
        populate: "*",
      },
    },
  });

  const { data } = await getBlogPage(slug, blogPageQwery);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      images: [`https://cms.mantis-185.ru${data.image.url}`],
    },
  };
}

const BlogPage = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  const blogPageQwery = qs.stringify({
    populate: {
      image: {
        populate: "*",
      },
    },
  });

  const { data } = await getBlogPage(slug, blogPageQwery);

  const blogPage = [
    {
      title: "Главная",
      url: "/",
    },
    {
      title: "Блог",
      url: "/blog",
    },
    {
      title: data.title,
      url: "#",
    },
  ];

  console.log(data.desription);

  return (
    <div className="main-container">
      <Breadcrumbs list={blogPage} />
      <Typography register="40" variant="h1" outline="bold">
        {data.description}
      </Typography>
    </div>
  );
};

export default BlogPage;
