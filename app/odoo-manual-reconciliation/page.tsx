import Reconciliation from '@/components/Reconciliation/Reconciliation'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:'Odoo Manual Reconciliation - TechFinna',
  description:"Simplify your Odoo reconciliation with Techfinna's Manual Reconciliation module. Inspired by QuickBooks, it offers a user-friendly interface to ensure accurate and efficient transaction matching. Boost productivity and streamline your accounting process today."
}
const ReconciliationDoc = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
        <Reconciliation />
    </div>
  )
}

export default ReconciliationDoc;