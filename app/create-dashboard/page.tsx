import { Metadata } from "next";
import DashboardServices from "@/components/DashboardServices";

export const metadata: Metadata = {
  title: "Dashboards ",
  description:
    "TechFinna specializes in creating prebuilt and custom dashboards to enhance your business efficiency with seamless integrations and analytics.",
};

const Dashboard = () => {
  return (
    <>
      <DashboardServices />
    </>
  );
};

export default Dashboard;
