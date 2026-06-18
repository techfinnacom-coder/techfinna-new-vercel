"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Hourglass,
  TrendingUp,
  Zap,
  Shield,
  Layers,
  Star,
  ChevronRight,
  Database,
  PieChart,
  Activity,
  Table,
  Monitor,
} from "lucide-react";
import HeroSection from "./HeroSection";
import CodeSection from "./CodeSection";
import AlternatingSolutions from "./AlterternateSolutions";
import TestimonialSwiper from "./TestimonialSwiper";
import CustomDashboardSolutions from "./CustomDashboardSolutions";
import Link from "next/link";
import AIDashboard from "./AIDashboard";

const techfinna = [
  {
    icon: <Zap className="text-yellow-500" size={40} />,
    title: "Odoo Implementation",
    description:
      "Implement odoo dashboards and business analytics with Techfinna",
  },
  {
    icon: <Layers className="text-blue-500" size={40} />,
    title: "Odoo Customization",
    description:
      "Customize odoo dashboards and modules with us",
  },
  {
    icon: <Monitor className="text-green-500" size={40} />,
    title: "Custom Dashboards",
    description:
      "Create custom dashboards with us using Power BI and Google Looker Studio",
  },
];

const powerbi = [
  {
    icon: <Activity size={24} />,
    title: "Business Intelligence Suite",
    description:
      "Complete BI solution with advanced analytics and machine learning integration",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Interactive Visualizations",
    description:
      "Dynamic charts, graphs, and reports that respond to user interactions in real-time",
  },
    {
    icon: <Hourglass size={24} />,
    title: "Real Time Updates",
    description:
      "One click refresh and all the data is done",
  },
];

const teamMember = [
  {
    name: "Shumal Saifi",
    role: "Senior Data Analyst",
    image:
      "/images/team/shumal.png",
  },
  {
    name: "Chandan Sharma",
    role: "Data Visualization Expert",
    image:
      "/images/team/chandan.png",
  },
  {
    name: "Rajat Rai",
    role: "Business Intelligence Lead",
    image:
      "/images/team/rajatRai.png",
  },
];

const DashboardServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen font-sans overflow-hidden">
      <HeroSection />
      <AlternatingSolutions />
      <CustomDashboardSolutions />
      <CodeSection />
      <AIDashboard/>
      <motion.section
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-800 to-black bg-clip-text text-transparent">
              Why Choose TechFinna?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading expertise in dashboard creation with seamless
              integration across platforms
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
          >
            {techfinna.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-4 w-fit mb-6"
                  variants={itemVariants}
                >
                  {item.icon}
                </motion.div>
                <motion.h3
                  className="text-2xl font-bold mb-4 text-gray-800"
                  variants={itemVariants}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 leading-relaxed"
                  variants={itemVariants}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-800 to-black bg-clip-text text-transparent">
              Power BI/Looker Powered Dashboards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with our expert team to create and customize
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={staggerChildren}
          >
            <motion.div className="space-y-8" variants={staggerChildren}>
              {powerbi.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 items-start"
                  variants={itemVariants}
                >
                  <motion.div
                    className="bg-gradient-to-br from-orange-100 to-red-100 rounded-xl p-3 text-orange-600"
                    variants={itemVariants}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="relative" variants={itemVariants}>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-200 to-red-200 rounded-3xl transform rotate-3"
                initial={{ opacity: 0, rotate: 0 }}
                whileInView={{ opacity: 1, rotate: 3 }}
                transition={{ duration: 0.8 }}
              ></motion.div>
              <motion.img
                src="/images/dashboard/dashboards.png"
                alt="Power BI Dashboard"
                className="relative rounded-3xl shadow-2xl w-full h-80 object-cover"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            className="text-5xl font-bold mb-6 text-gray-800"
            variants={itemVariants}
          >
            Expert Team
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Experienced team in dashboard creation and modification using Microsoft PowerBI and Google Looker Studio
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
          >
            {teamMember.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover ring-4 ring-indigo-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.h3
                  className="text-xl font-bold mb-2 text-gray-800"
                  variants={itemVariants}
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  className="text-indigo-600 font-medium"
                  variants={itemVariants}
                >
                  {member.role}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-5xl font-bold mb-6 text-gray-800">
              Client Success Stories
            </h2>
            <motion.div
              className="flex justify-center items-center gap-2 mb-8"
              variants={itemVariants}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Star size={32} className="text-yellow-400 fill-current" />
                </motion.div>
              ))}
              <span className="text-2xl font-bold text-gray-700 ml-2">
                4.9/5
              </span>
            </motion.div>
          </motion.div>
          <TestimonialSwiper />
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-gradient-to-r from-blue-800 to-black text-white"
        initial="hidden"
        id="custom"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            Ready to Transform Your Data?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-indigo-100"
            variants={itemVariants}
          >
            Join 500+ companies that trust TechFinna for their dashboard
            solutions
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={staggerChildren}
          >
            <motion.button
              className="bg-white text-blue-950 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link href={"/contact/"}>
              
              Book Free Trial
              </Link>
            </motion.button>
            <motion.button
              className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link href={"/contact/"}>

              Schedule Meeting
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default DashboardServices;
