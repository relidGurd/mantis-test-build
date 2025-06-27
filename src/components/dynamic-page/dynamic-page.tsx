import AboutSteps from "@/pages/about-us/about-steps/about-steps";
import AboutTeam from "@/pages/about-us/about-team/about-team";
import TextBlock from "@/sections/text-block/text-block";

const Dynamic = ({ component }: any) => {
  return component.map((el: any, index: number) => {
    switch (el.__component) {
      case "case-page.case-task":
        return <AboutSteps key={index} />;
      case "case-page.case-banner":
        return <AboutTeam key={index} />;
      case "case-page.case-solution":
        return <AboutTeam key={index} />;
      case "text-block.text-container":
        return (
          <TextBlock
            align={el.align}
            title={el.title}
            description={el.text}
            image={el.image}
            key={index}
          />
        );
    }

    return null;
  });
};

export default Dynamic;
