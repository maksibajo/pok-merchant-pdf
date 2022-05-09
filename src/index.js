import React, { useRef } from 'react'
import PdfTemplate from './PdfTemplate'
import { savePDF } from '@progress/kendo-react-pdf'

const POKMerchantPdf = ({
  url,
  merchantName,
  posName,
  imageUrl,
  imageBase64,
  children,
  onSuccess,
  onError
}) => {
  const pdfExportComponent = useRef(null)

  const downloadPdf = async () => {
    try {
      await savePDF(pdfExportComponent.current, {
        paperSize: 'A5',
        creator: 'POK',
        fileName: generateName(),
      })
      onSuccess()
    } catch (e) {
      onError(e)
    }
  }

  const generateName = () => {
    if (merchantName && posName) {
      return `${merchantName} - ${posName}`
    } else if (merchantName) {
      return merchantName
    } else if (posName) {
      return posName
    } else {
      return 'POK Merchant QR code'
    }
  }

  return (
    <div>
      <div onClick={downloadPdf}>{children}</div>
      <div style={{ position: 'absolute', left: '-1000px', top: 0 }}>
        <div ref={pdfExportComponent}>
          <PdfTemplate
            url={url}
            imageUrl={imageUrl}
            imageBase64={imageBase64}
          />
        </div>
      </div>
    </div>
  )
}

export default POKMerchantPdf
