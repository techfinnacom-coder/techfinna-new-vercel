import DiscOdoo from '@/components/Discodoo/Discodo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:'Discodoo: Discord integration for Odoo',
  description:"Unleash the power of Discord automation with Discodoo by Techfinna. Seamlessly integrate Odoo with Discord for real-time insights, efficient workflows, and instant actions. Enhance collaboration and productivity with customizable alerts, interactive dashboards, and more."
}
const DiscOdooPage = () => {
  return (
    <div>
        <DiscOdoo />
    </div>
  )
}

export default DiscOdooPage