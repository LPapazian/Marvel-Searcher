import React, { Fragment } from "react";
import styles from "./Modal.module.scss";
import { HeroItem } from "../../interfaces/interfaces";

class Modal extends React.Component<Props> {
  showDescription() {
    if (this.props.hero.description.length > 0) {
      return this.props.hero.description;
    } else return "No description available";
  }

  render() {
    const { show, hero, onClose } = this.props;

    if (!show) {
      return null;
    }

    return (
      <Fragment>
        <div className={styles.modal}>
          <div className={styles.header}>
            <p className={styles.modalTitle}>{hero.name}</p>
            <i
              className={`fa fa-window-close ${styles.closeIcon}`}
              aria-hidden="true"
              onClick={onClose}
            ></i>
          </div>
          <div className={styles.modalContent}>
            <div className={styles.modalDescription}>
              <p className={styles.subtitle}>Description</p>
              <p>{this.showDescription()}</p>
            </div>
            <div>
              <p className={styles.subtitle}>Comics</p>
              <ul>
                {hero.comics.items.map((comic, index) => (
                  <li key={index}>
                    <span>{comic.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.overlay}></div>
      </Fragment>
    );
  }
}

interface Props {
  onClose: any;
  show: boolean;
  hero: HeroItem;
}

export default Modal;
