"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Database,
  PieChart,
  Star,
  ArrowRight,
  BarChart3,
  
} from "lucide-react";
import Link from "next/link";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.div
          key={star}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: star * 0.1, duration: 0.3 }}
        >
          <Star
            className={`w-4 h-4 ${star <= rating ? "fill-yellow-500 text-yellow-500" : "fill-gray-300 text-gray-300"}`}
          />
        </motion.div>
      ))}
      <span className="text-sm text-gray-600 ml-2">({rating}.0)</span>
    </div>
  );
};

export default function DashboardCards() {
  const dashboards = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Sales Analytics",
      description:
        "Real-time sales performance tracking with predictive insights and conversion optimization for maximum revenue growth.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/modern-sales-dashboard-with-charts-and-graphs-Eo8tOqHFkqkAlvhDOQQV7WXVqW2b2s.jpg",
      rating: 5,
      features: [
        "Real-time tracking",
        "Predictive analytics",
        "Revenue optimization",
      ],
      gradient: "from-white/20 to-blue-600/10",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Inventory Intelligence",
      description:
        "Smart inventory management with automated alerts and supply chain optimization to prevent stockouts.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/inventory-management-dashboard-with-stock-levels-XTy1c7VXlEvTYK964XI6iHdj0v1jXW.jpg",
      rating: 4.8,
      features: [
        "Smart alerts",
        "Supply chain optimization",
        "Stock forecasting",
      ],
      gradient: "from-white/20 to-blue-600/10",
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Financial Overview",
      description:
        "Comprehensive financial metrics with interactive charts and budget forecasting for informed decision making.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/financial-dashboard-with-pie-charts-and-metrics-mzA3V0EC06Q0hGvBZ18bSBxgFkfQB3.jpg",
      rating: 5,
      features: [
        "Interactive charts",
        "Budget forecasting",
        "Financial insights",
      ],
      gradient: "from-white/20 to-blue-600/10",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Metrics",
      description:
        "Advanced performance tracking with KPI monitoring and automated reporting for business intelligence.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/performance-metrics-dashboard-with-kpi-indicators-O56vN5UTeZeHTNFEfXc8MHi4Td9lkG.jpg",
      rating: 4,
      features: ["KPI monitoring", "Automated reports", "Performance insights"],
      gradient: "from-white/20 to-blue-600/10",
    },
  ];

  return (
    <motion.section
      className="py-20 bg-white"
      initial="hidden"
      id="prebuilt"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-800 to-black bg-clip-text text-transparent text-balance">
            Prebuilt Dashboards using PowerBI and Looker
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-pretty">
            Elevate your business intelligence with our cutting-edge dashboard
            solutions, featuring real-time analytics and intuitive
            visualizations.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {dashboards.map((dashboard, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden backdrop-blur-sm shadow-lg">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${dashboard.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={dashboard.image}
                    alt={dashboard.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                  <motion.div
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 text-blue-600 border border-gray-200 shadow-sm"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {dashboard.icon}
                  </motion.div>

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 border border-gray-200 shadow-sm">
                    <StarRating rating={dashboard.rating} />
                  </div>
                </div>

                <div className="relative p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-black group-hover:text-black transition-colors duration-300">
                      {dashboard.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-pretty">
                      {dashboard.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-black">
                      Key Features:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {dashboard.features.map((feature, featureIndex) => (
                        <motion.span
                          key={featureIndex}
                          className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700 border border-gray-200"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* <motion.div
                    className="pt-4"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      variant="ghost"
                      className="group/btn text-blue-600 px-3 py-2 hover:text-white hover:bg-gray-800 hover:rounded-md  h-auto font-semibold"
                    >
                      <span className="flex items-center gap-2">
                        Explore Dashboard
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </span>
                    </button>
                  </motion.div> */}
                </div>

                <div className="absolute inset-0 rounded-2xl border-2 border-blue-500/0 group-hover:border-black transition-colors duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center mt-16" variants={itemVariants}>
          <Link
            href="/contact/"
            size="lg"
            className="bg-black hover:bg-black text-white px-8 py-3 rounded-xl font-semibold"
          >
            Book a Demo
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
