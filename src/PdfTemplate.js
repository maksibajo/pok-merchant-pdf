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
      <div className={styles.pokPdfRoot}>
        <div className={styles.pokPdfHeader}>
          <div className={styles.pokPdfTextCenter}>
            <div className={styles.pokPdfHeaderContainer}>
              <img
                alt='logo'
                src={header}
                className={styles.pokPdfHeaderHeight}
              />
            </div>
          </div>
        </div>
        <div className={styles.pokPdfContainer}>
          <div className={styles.pokPdfPhoneLogoContainer}>
            <img
              alt='scan-qr'
              src={phone}
              className={styles.pokPdfPhoneHeight}
            />
          </div>
          <div className={styles.pokPdfPy05}>
            <img
              alt='scan-and-pay'
              src={scanAndPayText}
              className={styles.pokPdfScanAndPayHeight}
            />
          </div>
          <div className={styles.pokPdfQrContainer}>
            <QRCode value={url} size={151} />
            <img
              alt='merchant-logo'
              src={Logo}
              className={styles.pokPdfMerchantLogo}
            />
          </div>
          <div className={styles.pokPdfFooter}>
            <div className={styles.pokPdfFooterQrContainer}>
              <QRCode
                value='https://pokpay.io'
                size={50}
                bgColor='transparent'
              />
            </div>
            <div className={styles.pokPdfFooterContent}>
              <img alt='Logo' src={Logo} className={styles.pokPdfH5} />
              <div>
                <div className={styles.pokPdfFooterText}>
                  Shkarko aplikacionin POK per pagesa te shpejta
                </div>
                <div className={styles.pokPdfFooterStoreContainer}>
                  <div className={styles.pokPdfFooterDownloadContainer}>
                    <img
                      alt='AppleStore'
                      src={appleStore}
                      className={styles.pokPdfAppStore}
                    />
                    <img
                      alt='GooglePlay'
                      src={googlePlay}
                      className={styles.pokPdfPlayStore}
                    />
                  </div>
                  <a
                    rel='noreferrer'
                    className={styles.pokPdfFooterLink}
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

export default PdfTemplate
