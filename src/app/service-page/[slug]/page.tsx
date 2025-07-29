import { getService } from "@/api/service-page/service-page";
import styles from "./service-page.module.css";
import qs from "qs";
import Typography from "@/ui-kit/typography/typography";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import Dynamic from "@/components/dynamic-page/dynamic-page";
import MainForm from "@/components/main-form/main-form";
import AboutReviews from "@/pages/about-us/about-reviews/about-reviews";
import Partners from "@/sections/partners/partners";
import PricesTable from "@/sections/prices-table/prices-table";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;

  const qwery = qs.stringify({
    populate: "*",
  });
  const { data } = await getService(slug, qwery);

  return {
    title: data.title,
    description: data.description,
    // openGraph: {
    //   images: [`https://cms.mantis-185.ru${data.preview_image.url}`],
    // },
  };
}

export default async function ServicePage({ params }: Props) {
  const slug = (await params).slug;

  const qwery = qs.stringify({
    populate: {
      image: "*",
      components: {
        on: {
          "service-page.related-products": {
            populate: {
              products: {
                populate: "*",
              },
            },
          },
          "service-page.advantages": {
            populate: "*",
          },
          "service-page.about-service": {
            populate: "*",
          },
          "service-page.prices": {
            populate: "*",
          },
          "service-page.related-cases": {
            populate: {
              cases: {
                populate: "*",
              },
            },
          },
        },
      },
    },
  });

  const { data } = await getService(slug, qwery);

  return (
    <div className={styles.services_blocks__lists}>
      <section className={styles.servicePage_mainContainer}>
        <div className={styles.servicePage_container}>
          <div className={styles.servicePage_textInfo}>
            <div>
              <div className={styles.servicePage_tag}>
                <Typography variant="span">{data.tag}</Typography>
              </div>
            </div>

            <div>
              <Typography
                className={styles.servicePage_title}
                outline="bold"
                register="40"
                variant="h1"
              >
                {data.title}
              </Typography>
              <Typography outline="regular" register="18">
                {data.description}
              </Typography>
            </div>
          </div>
          <ul className={styles.servicePage_imageList}>
            <li className={styles.servicePage_imageContainer}>
              <Image
                className={styles.servicePage_image}
                src={
                  data.image[0].url
                    ? `https://cms.mantis-185.ru${data.image[0].url}`
                    : "/demo-shoes.png"
                }
                alt=""
                width={800}
                height={800}
              />
            </li>
            <li className={styles.servicePage_blurContainer}>
              <div className={styles.servicePage_blur}></div>
            </li>
            <li className={styles.servicePage_bgImage}>
              <Image
                className={styles.servicePage_image}
                src={
                  data.image[1].url
                    ? `https://cms.mantis-185.ru${data.image[1].url}`
                    : "/demo-shoes.png"
                }
                alt=""
                width={800}
                height={800}
              />
            </li>
          </ul>
        </div>
      </section>
      <Dynamic component={data.components} />
      <MainForm className={styles.services_form_child} />
      <Partners />
      <AboutReviews />
    </div>
  );
}
