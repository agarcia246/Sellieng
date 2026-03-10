import { Link, useNavigate } from "react-router";
import { ChevronLeft, Shield, Users, DollarSign, MessageCircle, AlertTriangle, CheckCircle } from "lucide-react";

export function Guidelines() {
  const navigate = useNavigate();

  const guidelines = [
    {
      title: "Be Respectful",
      icon: Users,
      color: "blue",
      rules: [
        "Treat all community members with respect and kindness",
        "Use appropriate language in all communications",
        "Respect other people's time and respond promptly to messages",
        "No harassment, bullying, or discriminatory behavior",
      ],
    },
    {
      title: "Safe Transactions",
      icon: Shield,
      color: "green",
      rules: [
        "Always meet in public places on campus (library, cafeteria, main hall)",
        "Inspect items before making payment",
        "Never share sensitive personal or financial information",
        "Report suspicious behavior immediately",
        "Use campus security if you feel unsafe",
      ],
    },
    {
      title: "Honest Selling",
      icon: DollarSign,
      color: "yellow",
      rules: [
        "Accurately describe item condition and details",
        "Upload clear, recent photos of actual items",
        "Set fair and reasonable prices",
        "Be transparent about any defects or issues",
        "Honor your commitments and agreements",
      ],
    },
    {
      title: "Communication",
      icon: MessageCircle,
      color: "purple",
      rules: [
        "Respond to inquiries within 24 hours",
        "Be clear about availability and pickup details",
        "Communicate any changes or delays promptly",
        "Keep all transaction discussions on the platform",
      ],
    },
    {
      title: "Prohibited Items",
      icon: AlertTriangle,
      color: "red",
      rules: [
        "No illegal items or services",
        "No weapons or dangerous materials",
        "No counterfeit or stolen goods",
        "No alcohol or controlled substances",
        "No academic dishonesty materials (essays, exam answers, etc.)",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate("/settings")}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-medium">Back</span>
            </button>
            <Link to="/home" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-cyan)] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-cyan)] bg-clip-text text-transparent">
                SELLieNG
              </span>
            </Link>
            <div className="w-20"></div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-cyan)] rounded-2xl mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Community Guidelines</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            SELLieNG is built on trust within the IE community. Follow these guidelines to keep our marketplace safe and welcoming for everyone.
          </p>
        </div>

        {/* Guidelines */}
        <div className="space-y-6 mb-12">
          {guidelines.map((section, index) => {
            const Icon = section.icon;
            const colorClasses = {
              blue: "from-blue-500 to-cyan-500",
              green: "from-green-500 to-emerald-500",
              yellow: "from-yellow-500 to-orange-500",
              purple: "from-purple-500 to-pink-500",
              red: "from-red-500 to-rose-500",
            }[section.color];

            return (
              <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className={`p-6 bg-gradient-to-r ${colorClasses}`}>
                  <div className="flex items-center gap-3 text-white">
                    <Icon className="w-6 h-6" />
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {section.rules.map((rule, ruleIndex) => (
                      <li key={ruleIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reporting */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Report Violations</h3>
          <p className="text-gray-700 mb-4">
            If you see any violations of these guidelines or experience unsafe behavior, please report it immediately. We take all reports seriously and will investigate promptly.
          </p>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-colors">
              Report an Issue
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors border border-gray-200">
              Contact Support
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Last updated: March 10, 2026</p>
          <p className="mt-2">
            By using SELLieNG, you agree to follow these guidelines and our{" "}
            <Link to="/settings" className="text-[var(--brand-blue)] hover:underline">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
