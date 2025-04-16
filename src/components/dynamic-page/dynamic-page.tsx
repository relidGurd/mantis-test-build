import AboutSteps from "@/pages/about-us/about-steps/about-steps";
import AboutTeam from "@/pages/about-us/about-team/about-team";

const Dynamic = ({ component }: any) => {
  return component.map((el: any) => {
    switch (el.elem) {
      case "TEST":
        return <AboutSteps />;
      case "TEST2":
        return <AboutTeam />;
    }

    return null;
  });
};

export default Dynamic;
