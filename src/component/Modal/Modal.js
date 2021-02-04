import  { Component } from 'react'
import { createPortal } from 'react-dom'
import styles from './modal.module.css'

const modalRoot = document.querySelector('#modal-root')

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        this.props.onClose(e)
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', (e) => {
      console.log(e.code)
      if (e.code === 'Escape') {
        this.props.onClose(e)
      }
    })
  }

  render() {
    return createPortal(
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src={this.props.largeImageURL} alt=""  width='100%'/>
        </div>
      </div>,
      modalRoot,
    )
  }
}
