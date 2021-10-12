import { makeAutoObservable } from 'mobx'

class SiteChange {
  isMenuActive = false
  isButtonActive = false
  isModalActive = false
  isIndicatorActive = false
  constructor() {
    makeAutoObservable(this)
  }

  openMenu = () => {
    this.isMenuActive = true
    this.isButtonActive = true
  }

  closeMenu = () => {
    this.isMenuActive = false
    this.isButtonActive = false
  }

  openModal = () => this.isModalActive = true

  closeModal = () => this.isModalActive = false

  openIndicator = () => this.isIndicatorActive = true

  closeIndicator = () => this.isIndicatorActive = false
}

export default new SiteChange()