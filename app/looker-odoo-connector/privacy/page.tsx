import { Metadata } from 'next';

export const metadata: Metadata = {
  title:'Privacy Policy - Techfinna',
  description:"Read our detailed privacy policy for the Looker Odoo Connector. Understand how we protect your data, ensure privacy, and maintain security while integrating Looker with Odoo."
}
const Privacy = () => {
    
  return (
    <div>
        <section className="w-4/5 flex mx-auto flex-col justify-center items-center mt-12 pt-10 text-gray-800">
            <h1 className="text-center bg-transparent py-6 mt-10 text-[#1A3454] drop-shadow-xl text-3xl md:text-3xl font-semibold">
                Privacy Policy</h1>
            <p>
                This Privacy Policy &quot;Policy&quot; outlines how Techfinna collects, uses, and protects the personal
                information you provide when using the Odoo Connector for Looker Studio &quot;Connector&quot;. This Policy
                applies to all users of the Connector. 
            </p><ul className="list-disc pl-4">
                <li className="pl-4 py-2"> 1. Information Collection:
                    a. Techfinna may collect personal information, such as your name, email address, and company
                    details, when you purchase a license key for the Connector.
                    b. Techfinna may also collect non-personal information, such as your IP address and usage data,
                    to
                    improve the functionality and performance of the Connector.
                </li>
                <li className="pl-4 py-2">2. Use of Information:
                    a. Techfinna uses the personal information collected to process your license key purchase, provide
                    customer support, and communicate important updates or information regarding the Connector.
                     b. Techfinna may use non-personal information for statistical analysis, troubleshooting, and
                    improving the Connector's features and performance.
                </li>
                <li className="pl-4 py-2">3.Data Security:
                    a. Techfinna takes reasonable measures to protect your personal information from unauthorized
                    access, disclosure, alteration, or destruction.
                     b. However, no method of transmission over the internet or electronic storage is 100% secure,
                    and
                    Techfinna cannot guarantee absolute security.
                </li>
                <li className="pl-4 py-2"> 4. Data Retention:
                    a. Techfinna retains your personal information for as long as necessary to fulfill the purposes
                    outlined in this Policy, unless a longer retention period is required or permitted by law.
                     b. Upon termination of your license key or request for deletion, Techfinna will securely delete
                    or anonymize your personal information, unless retention is required by law.
                </li>
                <li className="pl-4 py-2"> 5. Third-Party Services:
                     a. Techfinna may use third-party services, such as payment processors, to facilitate license
                    key
                    purchases. These services have their own privacy policies, and Techfinna is not responsible for
                    their practices.
                     b. The Connector may integrate with third-party platforms, such as Odoo and Looker Studio. Your
                    use
                    of these platforms is subject to their respective privacy policies.
                </li>
                <li className="pl-4 py-2"> 6. Updates to the Privacy Policy:
                     a. Techfinna may update this Privacy Policy from time to time. Any changes will be posted on
                    the
                    Techfinna website or communicated to you via email.
                     b. It is your responsibility to review the Privacy Policy periodically and ensure your
                    continued
                    agreement with its terms.
                </li>
                <li className="pl-4 py-2">
                    7. Contact Information:
                    If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of
                    your personal information, please contact Techfinna at [contact email].
                    By using the Connector, you consent to the collection, use, and storage of your personal information
                    as described in this Privacy Policy.
                </li>
            </ul>
        </section>
    </div>
  )
}

export default Privacy