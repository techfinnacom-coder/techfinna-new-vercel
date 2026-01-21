import React from 'react'
import Bigquery from '@/components/BigQuery/Bigquery'

import { Metadata } from 'next';

export const metadata: Metadata = {
  title:'Odoo BigQuery Connector Module - Best Seller',
  description:'Best module to integrate Odoo with Google BigQuery using our Odoo BigQuery Connector. Streamline your data analytics and business intelligence with seamless connectivity and real-time insights.'
}

const BigQueryConnector = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-12">
        <Bigquery></Bigquery>
    </div>
  )
}

export default BigQueryConnector