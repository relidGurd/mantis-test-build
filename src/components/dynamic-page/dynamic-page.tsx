import AboutSteps from "@/pages/about-us/about-steps/about-steps";
import AboutTeam from "@/pages/about-us/about-team/about-team";

const Dynamic = ({ component }: any) => {
  return component.map((el: any, index: number) => {
    switch (el.__component) {
      case "case-page.case-task":
        return <AboutSteps key={index} />;
      case "case-page.case-banner":
        return <AboutTeam key={index} />;
      case "case-page.case-solution":
        return <AboutTeam key={index} />;
    }

    return null;
  });
};

export default Dynamic;
