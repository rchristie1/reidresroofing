import React from 'react'
import styles from './CommonElements.module.scss'

export const heading = title => (
    <div className={styles.Header}>
      {title}
      <div className={styles.HeaderUnderline} />
    </div>
  );