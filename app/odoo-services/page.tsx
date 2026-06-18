import Services from '@/components/Services';
import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:'Odoo Analytics Services',
  description:"Explore Techfinna's services in Odoo Connectors, Odoo Analytics, and React Applications. We provide top-tier solutions including Odoo Looker Studio Connector, Odoo BigQuery Connector, Power BI Connector, Spreadsheet Connector, and more to enhance your business efficiency."
}

const service = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-22">
      <Services />
  </div>
  )
}

export default service