import Typography from "@/ui-kit/typography/typography";
import styles from "./page.module.css";
import MainForm from "@/components/main-form/main-form";

const DirectionElement = () => {
  return (
    <main>
      <div className="main-container">
        <Typography>Название направления</Typography>
      </div>

      <MainForm />
    </main>
  );
};

export default DirectionElement;
