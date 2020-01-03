import React, { Fragment } from "react";
import styles from "./Herocard.module.scss";
import { HeroItem } from "../../interfaces/interfaces";
import Modal from "../Modal";

class HeroCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { hero } = this.props;
    return (
      <Fragment>
        <div className={styles.card} onClick={this.toggleModal}>
          <img
            src={`${hero.thumbnail.path}/portrait_fantastic.${hero.thumbnail.extension}`}
            alt="Hero thumbnail"
          />
          <div className={styles.container}>
            <p className={styles.subtitle}>Tools</p>
            <p className={styles.title}>{hero.name}</p>
          </div>
        </div>
        <Modal
          show={this.state.isOpen}
          onClose={this.toggleModal}
          hero={hero}
        />
      </Fragment>
    );
  }
}

export default HeroCard;

interface Props {
  hero: HeroItem;
}

interface State {
  isOpen: boolean;
}
