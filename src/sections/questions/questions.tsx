"use client";

import Tab from "@/components/tab/tab";

const Questions = ({ data }: { data: any }) => {
  return (
    <section className="main-container">
      <Tab data={data} />
    </section>
  );
};

export default Questions;
