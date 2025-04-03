"use client";

import Typography from "@/ui-kit/typography/typography";
import AboutUsHero from "./about-us-hero/about-us-hero";
import AboutStages from "./about-stages/about-stages";
import Partners from "@/sections/partners/partners";
import AboutForWho from "./for-who/for-who";
import { image } from "motion/react-client";

const exampleStages = [
  {
    id: 1,
    title: "Анализ и сбор требований",
    description:
      "Определение целей и задач проекта Анализ целевой аудитории и конкурентов Составление технического Определение целей и задач проекта",
  },
  {
    id: 2,
    title: "Анализ и сбор требований",
    description:
      "Определение целей и задач проекта Анализ целевой аудитории и конкурентов Составление технического Определение целей и задач проекта",
  },
  {
    id: 3,
    title: "Анализ и сбор требований",
    description:
      "Определение целей и задач проекта Анализ целевой аудитории и конкурентов Составление технического Определение целей и задач проекта",
  },
  {
    id: 4,
    title: "Анализ и сбор требований",
    description:
      "Определение целей и задач проекта Анализ целевой аудитории и конкурентов Составление технического Определение целей и задач проекта",
  },
  {
    id: 5,
    title: "Анализ и сбор требований",
    description:
      "Определение целей и задач проекта Анализ целевой аудитории и конкурентов Составление технического Определение целей и задач проекта",
  },
  {
    id: 6,
    title: "Анализ и сбор требований",
    description:
      "Определение целей и задач проекта Анализ целевой аудитории и конкурентов Составление технического Определение целей и задач проекта",
  },
];

const exampleAdvantages = [
  {
    id: 1,
    title: "Индивидуальный подход",
    description:
      "Мы разрабатываем решения, учитывая особенности вашего бизнеса и целевой аудитории.",
    image: "/diamond.svg",
  },
  {
    id: 2,
    title: "Индивидуальный подход",
    description:
      "Мы разрабатываем решения, учитывая особенности вашего бизнеса и целевой аудитории.",
    image: "/diamond.svg",
  },
  {
    id: 3,
    title: "Индивидуальный подход",
    description:
      "Мы разрабатываем решения, учитывая особенности вашего бизнеса и целевой аудитории.",
    image: "/diamond.svg",
  },
  {
    id: 4,
    title: "Индивидуальный подход",
    description:
      "Мы разрабатываем решения, учитывая особенности вашего бизнеса и целевой аудитории.",
    image: "/diamond.svg",
  },
  {
    id: 5,
    title: "Индивидуальный подход",
    description:
      "Мы разрабатываем решения, учитывая особенности вашего бизнеса и целевой аудитории.",
    image: "/diamond.svg",
  },
  {
    id: 6,
    title: "Индивидуальный подход",
    description:
      "Мы разрабатываем решения, учитывая особенности вашего бизнеса и целевой аудитории.",
    image: "/diamond.svg",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="main-container">
        <Typography variant="h1">О нас</Typography>
      </div>
      <AboutUsHero />
      <AboutStages title="Этапы работ" data={exampleStages} />
      <AboutForWho />
      <AboutStages
        title="Преимущества покупки у нас"
        data={exampleAdvantages}
      />
      <Partners />
    </>
  );
}
