import styles from "../styles/components/Alert.module.css";

export type Props = {
  type: "success" | "error";
  children: JSX.Element;
};

export default function Alert(props: Props) {
  return (
    <div className={[styles.container, styles[props.type]].join(" ")}>
      {props.children}
    </div>
  );
}
