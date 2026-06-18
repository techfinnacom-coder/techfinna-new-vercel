export default async function sendMailFunction(
  prodName: string,
  customerName: string,
  customerEmail: string,
  purchaseId: string,
  attachment: any
) {
  const sendEmail = fetch("http://localhost:3000/api/sendEmail/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      customerName: customerName,
      prodName: prodName,
      customerEmail: customerEmail,
      purchaseId: purchaseId,
      attachment: attachment,
    }),
  });
  return sendEmail;
}
