import Copilot from "@/components/Copilot/Copilot";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Copilot for Odoo - TechFinna",
  description:
    "AI copilot for odoo helps you automate tasks and lets you read and approve CRUD operations in Odoo using natural language. It is powered by OpenAI's GPT-4 and can be easily integrated into your Odoo instance.",
};
const CopilotDoc = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden p-6 md:p-24">
      <Copilot />
    </div>
  );
};

export default CopilotDoc;
