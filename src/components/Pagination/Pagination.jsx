import React from 'react'
import styles from './Pagination.module.scss'

const Pagination = props => {
  const { id, title, options, value, onChange } = props

  const onSelectChange = val => {
    onChange(+val)
  }

  return (
    <div className={styles.selectRow}>
      <label htmlFor={id}>{title}</label>
      <select id={id} name={id} defaultValue={value} onChange={e => onSelectChange(e.target.value)}>
        {options.map(option => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Pagination
