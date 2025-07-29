import RiseUpAnimation from "@/animation/rise-up-animation/rise-up-animation";
import Image from "next/image";

export default function Custom404() {
  return (
    <section className="main-container">
      <div className={`error_container_grid`}>
        <h1 style={{ color: "red" }}>Попробуйте позже</h1>
        <RiseUpAnimation>
          <div>
            <Image alt="404" width={800} height={600} src={"/404.png"} />
          </div>
        </RiseUpAnimation>
      </div>
    </section>
  );
}
