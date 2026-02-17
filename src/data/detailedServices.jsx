
import React from 'react';
import { LuSignature } from "react-icons/lu"; 
import { HiOutlineIdentification } from "react-icons/hi2";
import { AiOutlineFileText } from "react-icons/ai";
import { FiBriefcase, FiFileText, FiActivity, FiGlobe } from "react-icons/fi";
import { FaBuilding, FaExchangeAlt, FaShippingFast } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { MdOutlineNumbers, MdSubscriptions, MdImportExport, MdCurrencyExchange, MdOutlineSecurity, MdOutlinePolicy, MdOutlineInventory, MdOutlineLocalShipping } from "react-icons/md";
import { FaPlay, FaPassport, FaFileContract, FaRegistered, FaWarehouse, FaMoneyBillWave, FaUserTie, FaTools, FaChalkboardTeacher, FaShip, FaHandHoldingUsd, FaFileInvoiceDollar, FaBalanceScale, FaGraduationCap } from "react-icons/fa";
import { RiSecurePaymentLine, RiGovernmentFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

export const detailedServiceData = [
  {
    title: "Digital Signature",
    desc: "Legally secure documents with Class 3 DSC.",
    icon: <LuSignature />,
    bgColor: "#fff1eb", 
    iconColor: "#ff8a5c",
    path: "/service/digital-signature"
  },
  {
    title: "Business Registration",
    desc: "Company, LLP & partnership registration",
    icon: <FiBriefcase />,
    bgColor: "#fff1eb", 
    iconColor: "#ff8a5c",
    path: "/service/business-registration"
  },
  {
    title: "PAN Registrations",
    desc: "Quick PAN for individuals & businesses",
    icon: <HiOutlineIdentification />,
    bgColor: "#eef2ff", 
    iconColor: "#6366f1",
    path: "/service/pan-registration"
  },
  {
    title: "TAN Registrations",
    desc: "TAN registration for TDS compliance",
    icon: <AiOutlineFileText />,
    bgColor: "#fffbeb", 
    iconColor: "#f59e0b",
    path: "/service/tan-registration"
  },
  {
    title: "GST Registration",
    desc: "GST registration for tax compliance",
    icon: <FiFileText />,
    bgColor: "#eef2ff", 
    iconColor: "#6366f1",
    path: "/service/gst-registration"
  },
  {
    title: "MSME Registration",
    desc: "MSME registration for government benefits",
    icon: <FiActivity />,
    bgColor: "#fffbeb", 
    iconColor: "#f59e0b",
    path: "/service/msme-registration"
  },
  {
    title: "Import Export Code (IEC)",
    desc: "Essential code for import/export business",
    icon: <FiGlobe />,
    bgColor: "#eef2ff",
    iconColor: "#6366f1",
    path: "/service/iec-registration"
  },
  {
    title: "DGFT Registration",
    desc: "Foreign trade & export promotion services",
    icon: <FaBuilding />,
    bgColor: "#fff1eb",
    iconColor: "#ff8a5c",
    path: "/service/dgft-services"
  },
  {
    title: "ICEGATE Registration",
    desc: "Customs e-commerce portal registration",
    icon: <FaExchangeAlt />, // Using generic since specific might not be available or recognizable
    bgColor: "#fffbeb",
    iconColor: "#f59e0b",
    path: "/service/icegate-registration"
  },
  {
    title: "AD Code Registration",
    desc: "Authorized Dealer Code for customs",
    icon: <MdOutlineNumbers />,
    bgColor: "#eef2ff",
    iconColor: "#6366f1",
    path: "/service/ad-code-registration"
  },
  {
    title: "RCMC Registration",
    desc: "Registration-Cum-Membership Certificate",
    icon: <TbCertificate />,
    bgColor: "#fffbeb",
    iconColor: "#f59e0b",
    path: "/service/rcmc-registration"
  },
  {
    title: "MTO Registration",
    desc: "Multimodal Transport Operator License",
    icon: <FaShippingFast />,
    bgColor: "#fff1eb",
    iconColor: "#ff8a5c",
    path: "/service/mto-registration"
  },
  {
    title: "First Step to Start Business",
    desc: "Initial guidance for new exporters/importers",
    icon: <FaPlay />,
    bgColor: "#eef2ff",
    iconColor: "#6366f1",
    path: "/service/first-step-export-import"
  },
  {
    title: "Basic Registration",
    desc: "Essential registrations to start business",
    icon: <FaPassport />,
    bgColor: "#fffbeb",
    iconColor: "#f59e0b",
    path: "/service/basic-export-import-registration"
  },
  {
    title: "First Time Registration",
    desc: "Setup for first-time exporters/importers",
    icon: <MdImportExport />,
    bgColor: "#fff1eb",
    iconColor: "#ff8a5c",
    path: "/service/first-time-export-import-registration"
  },
  {
    title: "Letter of Undertaking (LUT)",
    desc: "LUT for export without payment of IGST",
    icon: <FaFileContract />,
    bgColor: "#eef2ff",
    iconColor: "#6366f1",
    path: "/service/letter-of-undertaking"
  },
  {
    title: "REX System",
    desc: "Registered Exporter System registration",
    icon: <FaRegistered />,
    bgColor: "#fffbeb",
    iconColor: "#f59e0b",
    path: "/service/rex-registration"
  },
  {
    title: "Certificate of Origin (CoO)",
    desc: "Proof of origin for exported goods",
    icon: <TbCertificate />,
    bgColor: "#fff1eb",
    iconColor: "#ff8a5c",
    path: "/service/certificate-of-origin"
  },
  {
    title: "Factory Stuffing Permission",
    desc: "Self-sealing permission for exporters",
    icon: <FaWarehouse />,
    bgColor: "#eef2ff",
    iconColor: "#6366f1",
    path: "/service/factory-stuffing-permission"
  },
  {
    title: "Special Valuation Bond (SVB)",
    desc: "Valuation for related party imports",
    icon: <FaMoneyBillWave />,
    bgColor: "#fffbeb",
    iconColor: "#f59e0b",
    path: "/service/special-valuation-bond"
  },
  {
    title: "Chartered Engineer Certificate",
    desc: "CEC for machinery import/export",
    icon: <FaUserTie />,
    bgColor: "#fff1eb",
    iconColor: "#ff8a5c",
    path: "/service/chartered-engineer-certificate"
  },
  {
    title: "Machinery Installation Cert",
    desc: "Installation certificate for EPCG",
    icon: <FaTools />,
    bgColor: "#eef2ff",
    iconColor: "#6366f1",
    path: "/service/machinery-installation-certificate"
  },
  {
    title: "Portal Subscription",
    desc: "Annual services and portal access",
    icon: <MdSubscriptions />,
    bgColor: "#fffbeb",
    iconColor: "#f59e0b",
    path: "/service/portal-subscriptions"
  },
  {
    title: "Exim Consultancy",
    desc: "Expert consultancy for export/import",
    icon: <FaChalkboardTeacher />,
    bgColor: "#fff1eb",
    iconColor: "#ff8a5c",
    path: "/service/export-import-consultancy"
  },
  // Export-Import Compliance & Trade Services
  {
    title: "Export Incentives Advisory",
    desc: "Maximize benefits from government schemes",
    icon: <FaHandHoldingUsd />,
    bgColor: "#eef2ff",
    iconColor: "#6366f1",
    path: "/service/export-incentives-advisory"
  },
  {
    title: "RoDTEP Refund",
    desc: "Refund of Duties and Taxes on Exported Products",
    icon: <FaFileInvoiceDollar />,
    bgColor: "#fffbeb",
    iconColor: "#f59e0b",
    path: "/service/rodtep-refund"
  },
  {
    title: "RoDTEP License Trading",
    desc: "Buying & selling of RoDTEP licenses",
    icon: <MdCurrencyExchange />,
    bgColor: "#fff1eb",
    iconColor: "#ff8a5c",
    path: "/service/rodtep-license-trading"
  },
  {
    title: "EPCG Scheme",
    desc: "Export Promotion Capital Goods scheme",
    icon: <FaTools />,
    bgColor: "#eef2ff",
    iconColor: "#6366f1",
    path: "/service/epcg-scheme"
  },
  {
    title: "Advance Authorisation",
    desc: "Duty-free import of inputs for export",
    icon: <FaFileContract />,
    bgColor: "#fffbeb",
    iconColor: "#f59e0b",
    path: "/service/advance-authorisation"
  },
  {
    title: "Duty Drawback (DBK)",
    desc: "Refund of custom duties paid on inputs",
    icon: <RiGovernmentFill />,
    bgColor: "#fff1eb",
    iconColor: "#ff8a5c",
    path: "/service/duty-drawback-refund"
  },
  {
    title: "IGST Refund",
    desc: "Integrated GST refund from customs",
    icon: <FaMoneyBillWave />,
    bgColor: "#eef2ff",
    iconColor: "#6366f1",
    path: "/service/igst-refund"
  },
  {
    title: "Star Export House",
    desc: "Status certification for exporters",
    icon: <FaRegistered />,
    bgColor: "#fffbeb",
    iconColor: "#f59e0b",
    path: "/service/star-export-house"
  },
  {
    title: "Export Payment Insurance",
    desc: "Risk coverage for export payments",
    icon: <RiSecurePaymentLine />,
    bgColor: "#fff1eb",
    iconColor: "#ff8a5c",
    path: "/service/export-payment-insurance"
  },
  {
    title: "Marine Insurance",
    desc: "Insurance cover for cargo transit",
    icon: <FaShip />,
    bgColor: "#eef2ff",
    iconColor: "#6366f1",
    path: "/service/marine-insurance-cover"
  },
  {
    title: "Exim Finance",
    desc: "Local & Export financial solutions",
    icon: <FaMoneyBillWave />,
    bgColor: "#fffbeb",
    iconColor: "#f59e0b",
    path: "/service/local-export-finance"
  },
  {
    title: "Forex Management",
    desc: "Foreign Exchange & FEMA compliance",
    icon: <MdCurrencyExchange />,
    bgColor: "#fff1eb",
    iconColor: "#ff8a5c",
    path: "/service/foreign-exchange-management"
  },
  {
    title: "Safeguard & Remittance",
    desc: "Safeguard goods & export remittance",
    icon: <MdOutlineSecurity />,
    bgColor: "#eef2ff",
    iconColor: "#6366f1",
    path: "/service/safeguard-remittance"
  },
  {
    title: "Logistics & Customs",
    desc: "End-to-end logistics & clearance",
    icon: <MdOutlineLocalShipping />,
    bgColor: "#fffbeb",
    iconColor: "#f59e0b",
    path: "/service/logistics-clearance"
  },
  {
    title: "Exim Courier",
    desc: "International courier services",
    icon: <MdOutlineLocalShipping />,
    bgColor: "#fff1eb",
    iconColor: "#ff8a5c",
    path: "/service/export-import-courier"
  },
  {
    title: "AEO Certification",
    desc: "Authorized Economic Operator status",
    icon: <FaRegistered />,
    bgColor: "#eef2ff",
    iconColor: "#6366f1",
    path: "/service/aeo-certification"
  },
  {
    title: "MOOWR Scheme",
    desc: "Manufacturing in Warehouse Regulation",
    icon: <FaWarehouse />,
    bgColor: "#fffbeb",
    iconColor: "#f59e0b",
    path: "/service/moowr-scheme"
  },
  {
    title: "Total Outsourcing",
    desc: "Complete Exim process outsourcing",
    icon: <MdOutlineInventory />,
    bgColor: "#fff1eb",
    iconColor: "#ff8a5c",
    path: "/service/exim-process-outsourcing"
  },
  {
    title: "Exim Staffing",
    desc: "Recruitment for export-import roles",
    icon: <FaUserTie />,
    bgColor: "#eef2ff",
    iconColor: "#6366f1",
    path: "/service/exim-staffing"
  },
  {
    title: "MSME Legal Services",
    desc: "Default payment & receivable management",
    icon: <FaBalanceScale />,
    bgColor: "#fffbeb",
    iconColor: "#f59e0b",
    path: "/service/msme-legal-services"
  },
  {
    title: "EXIM Coaching",
    desc: "Training & coaching for trade",
    icon: <FaGraduationCap />,
    bgColor: "#fff1eb",
    iconColor: "#ff8a5c",
    path: "/service/exim-coaching"
  },
  {
    title: "Fast Track Clearance",
    desc: "Expedited clearance & value addition",
    icon: <BiSupport />,
    bgColor: "#eef2ff",
    iconColor: "#6366f1",
    path: "/service/fast-track-clearance"
  }
];
