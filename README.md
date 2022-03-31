# pok-merchant-pdf

> POK Merchant pdf generator

[![NPM](https://img.shields.io/npm/v/pok-merchant-pdf.svg)](https://www.npmjs.com/package/pok-merchant-pdf) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save pok-merchant-pdf
```

## Usage

```jsx
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

```

## License

MIT © [](https://github.com/)
