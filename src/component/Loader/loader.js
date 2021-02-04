import React from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import styles from './loader.module.css'

export default class LoaderApp extends React.Component {
  render() {
    return (
      <div className={styles.loader}>
        <Loader type="Circles" color="#00BFFF" height={80} width={80} />
      </div>
    )
  }
}