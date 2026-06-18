import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    try {
        const { email, sale_order, staging_url } = req.body;

        // Set up transporter (Replace with your email service credentials)
        const transporter = nodemailer.createTransport({
            service: "gmail", // Use "gmail" or your SMTP provider
            auth: {
                user: "vishalsingh173911@gmail.com",
                pass: "iwegniyyobkpsylr",
            },
        });

        const mailOptions = {
            from: "vishalsingh173911@gmail.com",
            to: "vishalsinghalt123@gmail.com", // Replace with the recipient's email
            subject: "New Verification Request",
            text: `New verification request:\n\nEmail: ${email}\nSale Order: ${sale_order}\nStaging URL: ${staging_url || "Not provided"}`,
        };
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Email sending error:", error);
        res.status(500).json({ message: "Failed to send email" });
    }
}
