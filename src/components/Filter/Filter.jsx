import React from 'react'
import styles from './Filter.module.scss'

const Filter = ({ title, filterData, onSelect }) => {
  return (
    <div className={styles.filter}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.row}>
        {filterData.map(({ key, name }) => {
          return (
            <div key={key} className={styles.row}>
              <input data-testid='checkbox-selector' type='checkbox' onChange={() => onSelect(key)} />
              <label htmlFor={key}>{name}</label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Filter
