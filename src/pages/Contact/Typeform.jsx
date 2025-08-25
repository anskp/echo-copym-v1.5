import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, Mail, Building2, Briefcase, DollarSign, MapPin,
  ShieldCheck, CheckCircle, LinkIcon, FileText, Layers, ArrowLeft
} from "lucide-react";

/**
 * Copym — RWA Tokenized Marketplace
 * Typeform-style form
 * - First screen: "Get Started" prompt
 * - Then form with Back button and OK
 * - Original foggy light-blue theme
 * - No progress bar
 */

const THEME = {
  pageBg: "bg-gradient-to-br from-[#EBF3FF] via-[#E6F0FF] to-[#DDEAFF]",
  ctaGrad: "bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white",
  ctaHover: "hover:from-[#2563EB] hover:to-[#3B82F6] transform hover:scale-[1.02] active:scale-[0.98]",
  ring: "focus:ring-2 focus:ring-[#93C5FD] focus:ring-offset-2",
  inputFocus: "focus:border-[#60A5FA] focus:bg-white focus:shadow-lg",
  accent: {
    deep: "#1E3A8A",
    mid: "#2563EB", 
    light: "#93C5FD",
    ultraLight: "#F0F7FF",
  },
};

const steps = [
  {
    id: "tokenGoal",
    label: "First, what are your Tokenization goals?",
    helper: "Choose the area you want to tokenize with Copym",
    type: "segmented",
    icon: Layers,
    required: true,
    options: [
      "Tokenize Real Estate",
      "Tokenize Debt / Credit",
      "Tokenize Commodities",
      "Tokenize Art / Collectibles",
      "Tokenize Infrastructure",
      "Other",
    ],
  },
  { id: "companyName", label: "What is the name of your company?", type: "text", icon: Building2, required: true },
  { id: "firstName", label: "What is your First Name?", type: "text", icon: User, required: true },
  { id: "lastName", label: "What is your Last Name?", type: "text", icon: User, required: true },
  { id: "email", label: "What is your email?", type: "email", icon: Mail, required: true, validate: v => /\S+@\S+\.\S+/.test(v || "") },
  { id: "title", label: "What is your title?", type: "text", icon: Briefcase, required: true },
  { id: "website", label: "What is your website?", type: "url", icon: LinkIcon, required: true, validate: v => /^https?:\/\//i.test(v || "") },
  {
    id: "industry",
    label: "What Industry is your company in?",
    type: "segmented",
    icon: Building2,
    required: true,
    options: [
      "Real Estate",
      "Private Credit",
      "Treasury Bills",
      "Commodities",
      "Art / Collectibles",
      "Energy / Infrastructure",
      "Other",
    ],
  },
  {
    id: "summary",
    label: "Please give us a brief summary about the company",
    type: "textarea",
    icon: FileText,
    required: true,
  },
  {
    id: "traction",
    label: "Please share any applicable traction on the company",
    type: "textarea",
    icon: FileText,
    required: true,
  },
  {
    id: "raised",
    label: "How much $ has the company raised to date? (In Millions)",
    helper: "Use decimals if under $1M, e.g., 0.5",
    type: "number",
    icon: DollarSign,
    required: true,
  },
  {
    id: "address",
    label: "What is the company's address?",
    type: "group",
    icon: MapPin,
    required: true,
    fields: [
      { key: "street", label: "Address", required: true },
      { key: "line2", label: "Address line 2", required: false },
      { key: "city", label: "City/Town", required: true },
      { key: "state", label: "State/Region/Province", required: true },
      { key: "zip", label: "Zip/Post code", required: true },
      { key: "country", label: "Country", required: true },
    ],
  },
  {
    id: "incUS",
    label: "Is the company incorporated in the U.S?",
    type: "segmented",
    icon: ShieldCheck,
    required: true,
    options: ["Yes", "No"],
  },
  {
    id: "productAvailable",
    label: "Is your product available (for sale) in market?",
    type: "segmented",
    icon: ShieldCheck,
    required: true,
    options: ["Yes", "No"],
  },
  {
    id: "revenue",
    label: "Is your company generating revenue?",
    type: "segmented",
    icon: ShieldCheck,
    required: true,
    options: ["Yes", "No"],
  },
  {
    id: "raiseStructure",
    label: "How would you like to structure your raise on Copym?",
    type: "segmented",
    icon: DollarSign,
    required: true,
    options: [
      "Tokenized Equity",
      "Tokenized Debt",
      "Revenue Share",
      "SAFE / SAFT",
      "SPV",
      "Other",
    ],
  },
];

const initialForm = {
  tokenGoal: "",
  companyName: "",
  firstName: "",
  lastName: "",
  email: "",
  title: "",
  website: "",
  industry: "",
  summary: "",
  traction: "",
  raised: "",
  address: { street: "", line2: "", city: "", state: "", zip: "", country: "" },
  incUS: "",
  productAvailable: "",
  revenue: "",
  raiseStructure: "",
};

export default function Typeform() {
  const [form, setForm] = useState(initialForm);
  const [stepIndex, setStepIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false); // Controls landing vs form

  const step = useMemo(() => steps[stepIndex], [stepIndex]);

  const setValue = (id, value) => setForm(prev => ({ ...prev, [id]: value }));
  const setAddress = (k, v) =>
    setForm(prev => ({ ...prev, address: { ...prev.address, [k]: v } }));

  const validateCurrent = () => {
    setError("");
    if (step.required) {
      if (step.type === "group") {
        for (const f of step.fields) {
          if (f.required && !form.address[f.key]) {
            setError(`${f.label} is required.`);
            return false;
          }
        }
      } else if (!form[step.id]) {
        setError("This question is required.");
        return false;
      }
    }
    if (typeof step.validate === "function") {
      if (!step.validate(form[step.id])) {
        setError("Please enter a valid value.");
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (!validateCurrent()) return;
    if (stepIndex < steps.length - 1) setStepIndex(i => i + 1);
    else setSubmitted(true);
  };

  const handleBack = () => {
    if (stepIndex > 0) setStepIndex(i => i - 1);
    else setShowForm(false); // Go back to landing
  };

  return (
    <div className={`min-h-screen ${THEME.pageBg} text-[#0f1f3d] flex items-center justify-center px-4 py-8`}>
      <div className="relative w-full max-w-3xl bg-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/60 overflow-hidden transition-all duration-300">
        
        {/* Enhanced Brand */}
        <div className="absolute top-8 left-8 flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] grid place-items-center shadow-xl">
            <span className="font-black text-white text-lg">C</span>
          </div>
          <div className="leading-tight">
            <p className="font-bold tracking-wide text-lg text-[#1E3A8A]">Copym</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="min-h-[400px] pt-16">
          <AnimatePresence mode="wait">
            {!showForm ? (
              // Enhanced Landing Screen
              <motion.div
                key="landing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-2xl mx-auto"
              >
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-blue-700">Quick & Secure</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] leading-tight mb-6">
                    Ready to Tokenize Your Assets?
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed mb-2">
                    This form takes only <span className="font-semibold text-[#2563EB]">2 minutes</span> to complete and will capture all the information needed for your tokenization journey.
                  </p>
                  <p className="text-base text-gray-500">
                    Join the future of Real World Asset tokenization with Copym.
                  </p>
                </div>
                <motion.button
                  onClick={() => setShowForm(true)}
                  className={`px-10 py-4 rounded-2xl ${THEME.ctaGrad} font-bold text-lg shadow-xl ${THEME.ctaHover} ${THEME.ring} transition-all duration-200`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started →
                </motion.button>
                <p className="text-xs text-gray-400 mt-4">Secure & confidential</p>
              </motion.div>
            ) : !submitted ? (
              // Enhanced Form Screen
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Progress Indicator */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-500">
                      Question {stepIndex + 1} of {steps.length}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <span className="text-xs font-medium text-[#2563EB]">
                        {Math.round(((stepIndex + 1) / steps.length) * 100)}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Back Button + Question */}
                <div className="mb-8">
                  <div className="flex items-start gap-4 mb-6">
                    <motion.button
                      onClick={handleBack}
                      className="p-3 rounded-2xl hover:bg-[#F7FAFF] border border-[#E0E7FF] transition-all hover:shadow-md"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowLeft className="w-5 h-5 text-[#2563EB]" />
                    </motion.button>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#EFF4FF] to-[#E0E7FF] grid place-items-center border border-[#E0E7FF] shadow-sm">
                          <step.icon className="w-6 h-6" style={{ color: THEME.accent.mid }} />
                        </div>
                        <div>
                          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E3A8A] leading-tight">{step.label}</h2>
                          {step.helper && (
                            <p className="text-base text-gray-600 mt-2">{step.helper}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <Question
                    step={step}
                    value={form[step.id]}
                    address={form.address}
                    onChange={setValue}
                    onAddressChange={setAddress}
                  />
                </div>

                {error && (
                  <motion.div 
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 text-sm">⚠</span>
                    </div>
                    <span className="text-red-700 font-medium">{error}</span>
                  </motion.div>
                )}

                {/* Enhanced Action Buttons */}
                <div className="flex justify-center">
                  {step.type === "segmented" && (
                    <motion.button
                      onClick={handleNext}
                      disabled={!form[step.id]}
                      className={`px-8 py-4 rounded-2xl ${THEME.ctaGrad} font-bold text-lg shadow-xl ${THEME.ctaHover} ${THEME.ring} transition-all duration-200 ${
                        !form[step.id] ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''
                      }`}
                      whileHover={form[step.id] ? { scale: 1.05 } : {}}
                      whileTap={form[step.id] ? { scale: 0.95 } : {}}
                    >
                      OK ✓
                    </motion.button>
                  )}

                  {["text", "email", "url", "number", "textarea", "group"].includes(step.type) && (
                    <motion.button
                      onClick={handleNext}
                      className={`px-8 py-4 rounded-2xl ${THEME.ctaGrad} font-bold text-lg shadow-xl ${THEME.ctaHover} ${THEME.ring} transition-all duration-200`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {stepIndex === steps.length - 1 ? "Submit Application" : "Continue →"}
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ) : (
              <ThankYou />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function Question({ step, value, address, onChange, onAddressChange }) {
  return (
    <>
      {/* Enhanced text / email / url / number inputs */}
      {["text", "email", "url", "number"].includes(step.type) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <input
            type={step.type}
            value={value || ""}
            onChange={(e) =>
              onChange(
                step.id,
                step.type === "number" ? e.target.value.replace(/[^0-9.]/g, "") : e.target.value
              )
            }
            className={`w-full px-6 py-5 text-lg rounded-2xl bg-white border-2 border-[#E0E7FF] placeholder-[#9AA7C7] outline-none ${THEME.ring} ${THEME.inputFocus} transition-all duration-200`}
            placeholder="Type your answer..."
            autoFocus
          />
        </motion.div>
      )}

      {/* Enhanced textarea */}
      {step.type === "textarea" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <textarea
            rows={6}
            value={value || ""}
            onChange={(e) => onChange(step.id, e.target.value)}
            className={`w-full px-6 py-5 text-lg rounded-2xl bg-white border-2 border-[#E0E7FF] placeholder-[#9AA7C7] outline-none resize-none ${THEME.ring} ${THEME.inputFocus} transition-all duration-200`}
            placeholder="Share your thoughts here..."
            autoFocus
          />
        </motion.div>
      )}

      {/* Enhanced segmented buttons */}
      {step.type === "segmented" && (
        <motion.div 
          className="flex flex-col gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, staggerChildren: 0.1 }}
        >
          {step.options.map((opt, index) => {
            const active = value === opt;
            return (
              <motion.button
                key={opt}
                onClick={() => onChange(step.id, opt)}
                className={`w-full text-left px-6 py-5 rounded-2xl border-2 transition-all duration-200 text-lg font-medium ${
                  active
                    ? "border-[#60A5FA] bg-gradient-to-r from-[#EAF2FF] to-[#F0F7FF] text-[#1E3A8A] shadow-lg transform scale-[1.02]"
                    : "border-[#E0E7FF] bg-white hover:bg-[#F7FAFF] hover:border-[#C7D2FE] hover:shadow-md hover:scale-[1.01]"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: active ? 1.02 : 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <span>{opt}</span>
                  {active && (
                    <div className="w-6 h-6 bg-[#60A5FA] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                  )}
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      )}

      {/* Enhanced grouped address */}
      {step.type === "group" && (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, staggerChildren: 0.1 }}
        >
          {step.fields.map((f, index) => (
            <motion.input
              key={f.key}
              type="text"
              value={address?.[f.key] || ""}
              onChange={(e) => onAddressChange(f.key, e.target.value)}
              placeholder={f.label}
              className={`px-6 py-4 rounded-2xl bg-white border-2 border-[#E0E7FF] placeholder-[#9AA7C7] outline-none ${THEME.ring} ${THEME.inputFocus} transition-all duration-200 text-lg ${f.key === 'line2' ? 'sm:col-span-2' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            />
          ))}
        </motion.div>
      )}
    </>
  );
}

function ThankYou() {
  return (
    <motion.div
      key="thankyou"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center max-w-2xl mx-auto"
    >
      <motion.div 
        className="mx-auto w-24 h-24 rounded-3xl bg-gradient-to-br from-[#10B981] to-[#34D399] grid place-items-center shadow-2xl mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      >
        <CheckCircle className="w-12 h-12 text-white" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-4xl font-bold mb-4" style={{ color: THEME.accent.deep }}>
          Application Submitted! 🎉
        </h2>
        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
          Thank you for your interest in tokenizing with{" "}
          <span className="text-[#2563EB] font-bold">Copym</span>
        </p>
        
        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
          <h3 className="font-semibold text-[#1E3A8A] mb-2">What happens next?</h3>
          <div className="text-left space-y-2 text-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Our team will review your application within 24 hours</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>We'll schedule a consultation call to discuss your tokenization goals</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>You'll receive a personalized tokenization strategy</span>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mt-6">
          Questions? Contact us at{" "}
          <a href="mailto:hello@copym.xyz" className="text-[#2563EB] hover:underline font-medium">
            hello@copym.xyz
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
}
