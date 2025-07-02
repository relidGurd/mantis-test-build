import Image from "next/image";
import styles from "./page.module.css";
import Typography from "@/ui-kit/typography/typography";
import MoreReviews from "@/sections/more-reviews/more-reviews";
import Dynamic from "@/components/dynamic-page/dynamic-page";
import { getCase } from "@/api/cases/cases-page";
import qs from "qs";
type Params = Promise<{ slug: string }>;

const SingleCase = async ({ params }: { params: Params }) => {
  // const data = await getCase();
  const { slug } = await params;

  const qweryP = qs.stringify({
    populate: {
      image: true,
      page: {
        populate: "*",
      },
      cases_tag: {
        populate: "*",
      },
    },
  });

  const { data } = await getCase(slug, qweryP);

  return (
    <main>
      <section className={styles.singleCase_mainContainer}>
        <div className={styles.singleCase_container}>
          <div className={styles.singleCase_textInfo}>
            <div>
              <div className={styles.singleCase_tag}>
                <Typography variant="span">{data.cases_tag.title}</Typography>
              </div>
            </div>

            <div>
              <Typography
                className={styles.singleCase_title}
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
          <ul className={styles.singleCase_imageList}>
            <li className={styles.singleCase_imageContainer}>
              <Image
                className={styles.singleCase_image}
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
            <li className={styles.singleCase_blurContainer}>
              <div className={styles.singleCase_blur}></div>
            </li>
            <li className={styles.singleCase_bgImage}>
              <Image
                className={styles.singleCase_image}
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
      <Dynamic component={data.page} />
      <MoreReviews />
    </main>
  );
};

export default SingleCase;
