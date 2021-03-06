import React, { useCallback, useEffect, useState } from 'react'
import styles from './App.module.scss'
import Filter from './components/Filter/Filter'
import Header from './components/Header/Header'
import Pagination from './components/Pagination/Pagination'
import { AirelineService } from './services/AirlineService'

const App = () => {
  const [selectedFilters, setSelectedFilters] = useState([])
  const [filteredAirlines, setFilteredAirlines] = useState([])
  const [pageSize, setPageSize] = useState(20)

  const filters = [
    { key: 'OW', name: 'Oneworld' },
    { key: 'ST', name: 'Sky Team' },
    { key: 'SA', name: 'Star Alliance' }
  ]

  const getAirlinData = useCallback(async () => {
    const airelinesData = await AirelineService().getAirlines()
    setFilteredAirlines(airelinesData)
  }, [])

  useEffect(() => {
    getAirlinData()
  }, [getAirlinData])

  const onFilterSelectHandler = filterkey => {
    if (selectedFilters.some(filterValue => filterValue === filterkey)) {
      const removeFilters = selectedFilters.filter(el => el !== filterkey)
      setSelectedFilters(removeFilters)
    } else {
      setSelectedFilters([filterkey, ...selectedFilters])
    }
  }

  const getAllianceName = allianceKey => filters.find(el => el?.key === allianceKey)?.name || ''

  const getFilteredData = () => {
    if (selectedFilters.length > 0) {
      return filteredAirlines.filter(airline => selectedFilters.some(el => el === airline.alliance)).slice(0, pageSize) || []
    } else {
      return filteredAirlines.slice(0, pageSize)
    }
  }

  const onPageSizeChangeHandler = pageSizeValue => setPageSize(pageSizeValue)

  return (
    <>
      <Header />
      <section className={styles.container}>
        <h1 data-testid='header' className={styles.title}>
          Airlines
        </h1>
        <Filter title='Filter by Alliances' filterData={filters} onSelect={onFilterSelectHandler} />
        <div className={styles.flex}>
          <div className={styles.cards}>
            {getFilteredData()?.map(({ name, logoURL, alliance, phone, site }, index) => {
              return (
                <div key={`${name}_${index}`} className={styles.card}>
                  <img src={`https://content.r9cdn.net${logoURL}`} className={styles.logo} alt='airline logo' />
                  <div>
                    <h4 className={styles.subtitle}>{name}</h4>
                    <div className={styles.description}>
                      <p className={styles.label}>{getAllianceName(alliance)}</p>
                      <p className={styles.label}>{phone}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <Pagination
          title={`Cards Per page`}
          options={[20, 40, 60, 80, 100, filteredAirlines.length]}
          onChange={onPageSizeChangeHandler}
          value={pageSize}
        />
      </section>
    </>
  )
}

export default App
