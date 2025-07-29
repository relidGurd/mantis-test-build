import RiseUpAnimation from "@/animation/rise-up-animation/rise-up-animation";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <section className="main-container-blog">
      <div className={`error_container_grid`}>
        <div className="error_text_info">
          <h1 className="">Перезагрузите страницу или попробуйте позже</h1>
          <Link className="err_back" href={"/"}>
            На главную
          </Link>
        </div>

        <RiseUpAnimation>
          <div className="err-image-container">
            <Image
              className="err-image"
              alt="404"
              width={800}
              height={600}
              src={"/404.png"}
            />
          </div>
        </RiseUpAnimation>
      </div>
    </section>
  );
}
