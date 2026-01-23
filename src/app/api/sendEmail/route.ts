import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  const email = process.env.NODEMAILER_EMAIL;
  const pass = process.env.NODEMAILER_PASS;

  try {
    const {
      prodName: prodName,
      customerName: customerName,
      customerEmail: customerEmail,
      purchaseId: purchaseId,
      attachment: attachment,
    } = await request.json();
    const mailOptions = {
      from: email,
      to: customerEmail,
    };

    await nodemailer
      .createTransport({
        service: "gmail",
        auth: {
          user: email,
          pass: pass,
        },
      })
      .sendMail({
        ...mailOptions,
        subject: `Successfull Purchase - ${prodName}`,
        // text: "this is a test subject string",
        html: `Greetings ${customerName}, <br/><br/> Thank you for purchasing the ${prodName} from us. 
        Your purchase ID is ${purchaseId}. Our team will shortly get back to you to support you install the module.<br/><br/>
        Thank You, <br/>Techfinna Team`,
        attachments: [
          {
            filename: attachment.filename, // Name of the file
            path: attachment.path, // Path to the file
          },
        ],
      });
    console.log("email sent successfully");
    return NextResponse.json({ msg: "email sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error });
  }
}

// const POST = async (req:NextRequest, res:NextResponse) => {
//   if (req.method === "POST") {
//     const email = process.env.NODEMAILER_EMAIL;
//     const pass = process.env.NODEMAILER_PASS;

//     const mailOptions = {
//       from: email,
//       to: email,
//     };
//     try {
//       //   await nodemailer
//       //     .createTransport({
//       //       service: "gmail",
//       //       auth: {
//       //         user: email,
//       //         pass: pass,
//       //       },
//       //     })
//       //     .sendMail({
//       //       ...mailOptions,
//       //       subject: "subject checking",
//       //       text: "this is a test subject string",
//       //       html: "<h1>This is test title</h1><p>this is test text</p>",
//       //     });
//       console.log("email sent successfully");
//     } catch (error) {
//       console.log(error);
//     }
//   }
// };

// export default POST;
