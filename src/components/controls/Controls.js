import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';

const Controls = ({ actions, handleSelection }) => (
  <section className={styles.Controls}>
    {actions.map(({ type, text, count }) => (
      <button key={type} onClick={() => handleSelection(type)}>
        {text || type} {!!count && `- ${count}`}
      </button>
    ))}
  </section>
);

Controls.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    text: PropTypes.string
  })).isRequired,
  handleSelection: PropTypes.func.isRequired
};

export default Controls;
