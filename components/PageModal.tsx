import Link from "next/link";
import CloseIcon from "../icons/CloseIcon";
import styles from "../styles/PageModal.module.css";

interface ModalPropsType {
  active: string;
  setShowModal: any;
  showModal: boolean;
}

const PageModal = (props: ModalPropsType) => {
  const handleClick = (event: any) => {
    const objectId = event.currentTarget.id;

    if (objectId === "container") {
      props.setShowModal(false);
    } else {
      event.stopPropagation();
    }
  };

  const setContainerClass = () => {
    if (props.showModal) {
      document.body.style.overflow = "hidden";
      return styles.container;
    } else {
      document.body.style.overflow = "scroll";
      return styles.hiddenContainer;
    }
  };

  return (
    <div
      id="container"
      className={setContainerClass()}
      onClick={(event) => handleClick(event)}
    >
      <div
        id="modal"
        className={styles.modal}
        onClick={(event) => handleClick(event)}
      >
        <div className={styles.close} onClick={() => props.setShowModal(false)}>
          <CloseIcon />
        </div>
        <Link href="/">
          <div
            className={[
              styles.tab1,
              props.active === "home" ? styles.activeTab : styles.tab,
            ].join(" ")}
            onClick={() => props.setShowModal(false)}
          >
            Home
          </div>
        </Link>
        <Link href="/about">
          <div
            className={[
              styles.tab2,
              props.active === "about" ? styles.activeTab : styles.tab,
            ].join(" ")}
            onClick={() => props.setShowModal(false)}
          >
            About
          </div>
        </Link>
        <Link href="/projects">
          <div
            className={[
              styles.tab3,
              props.active === "projects" ? styles.activeTab : styles.tab,
            ].join(" ")}
            onClick={() => props.setShowModal(false)}
          >
            Projects
          </div>
        </Link>
        <Link href="/contact">
          <div
            className={[
              styles.tab4,
              props.active === "contact" ? styles.activeTab : styles.tab,
            ].join(" ")}
            onClick={() => props.setShowModal(false)}
          >
            Contact
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PageModal;
