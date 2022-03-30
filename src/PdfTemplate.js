import React from 'react'
import styles from './styles.module.css'
import { QRCode } from 'react-qrcode-logo'
import header from 'assets/header.svg'
import phone from 'assets/phone.svg'
import scanAndPayText from 'assets/scanAndPayText.svg'
import Logo from 'assets/POK.svg'
import appleStore from 'assets/appleStore.svg'
import googlePlay from 'assets/googlePlay.svg'

const PdfTemplate = ({ url }) => {
  return (
    <div>
      <div className={styles.root}>
        <div className={styles.header}>
          <div className={styles.textCenter}>
            <div className={styles.headerContainer}>
              <img alt='logo' src={header} />
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.phoneLogoContainer}>
            <img alt='scan-qr' src={phone} />
          </div>
          <div className={styles.py5}>
            <img alt='scan-and-pay' src={scanAndPayText} />
          </div>
          <div className={styles.qrContainer}>
            <QRCode value={url} size={238.8} />
            <img
              alt='merchant-logo'
              src={Logo}
              className={styles.merchantLogo}
            />
          </div>
          <div className={styles.footer}>
            <div className={styles.footerQrContainer}>
              <QRCode value='https://pokpay.io' size={80} />
            </div>
            <div className={styles.footerContent}>
              <img alt='Logo' src={Logo} className={styles.h5} />
              <div>
                <div className={styles.footerText}>
                  Shkarko aplikacionin POK per pagesa te shpejta
                </div>
                <div className={styles.footerStoreContainer}>
                  <div className={styles.footerDownloadContainer}>
                    <img
                      alt='AppleStore'
                      src={appleStore}
                      className={styles.appStore}
                    />
                    <img
                      alt='GooglePlay'
                      src={googlePlay}
                      className={styles.playStore}
                    />
                  </div>
                  <a
                    rel='noreferrer'
                    className={styles.footerLink}
                    target='_blank'
                    href='https://pokpay.io'
                  >
                    pokpay.io
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PdfTemplate;
