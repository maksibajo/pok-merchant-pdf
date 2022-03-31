import React  from 'react'

import POKMerchantPdf  from 'pok-merchant-pdf'
import 'pok-merchant-pdf/dist/index.css'

const App = () => {
  return <div>
    <POKMerchantPdf url="https://exaple.com" onSuccess={() => {
      console.log('Downloaded pdf')
    }}>
      <button>Download PDF</button>
    </POKMerchantPdf>
  </div>
}

export default App
