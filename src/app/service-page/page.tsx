import { getService } from "@/api/service-page/service-page";
import qs from "qs";

export default async function ServicePage() {
  const qwery = qs.stringify({
    populate: {
      page_info: {
        on: {
          "service-page.advantages": {
            populate: {
              advantages: {
                populate: "*",
              },
            },
          },
          "service-page.about-service": "*",
          "service-page.prices": "*",
        },
      },
    },
  });

  console.log(qwery);
  // const data = await getService(qwery);

  // console.log(data);
  return <main>Test</main>;
}
