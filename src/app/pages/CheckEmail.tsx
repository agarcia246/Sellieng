import { Mail, ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router";
import { useState } from "react";

export function CheckEmail() {
  const navigate = useNavigate();
  const [showHelp, setShowHelp] = useState(false);

  const handleOpenEmail = () => {
    // In a real app, this would try to open the default email client
    // For prototype, we'll navigate to onboarding
    setTimeout(() => {
      navigate("/onboarding");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 text-center">
          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="p-6 bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-cyan)] rounded-full">
              <Mail className="w-12 h-12 text-white" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Magic link sent!
          </h2>
          <p className="text-gray-600 mb-8">
            Check your inbox for a sign-in link. It expires in 15 minutes.
          </p>

          <div className="space-y-3 mb-6">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={handleOpenEmail}
            >
              <ExternalLink className="w-5 h-5" />
              Open email app
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="w-full"
              onClick={() => alert("Magic link resent!")}
            >
              Resend link
            </Button>
          </div>

          <button
            onClick={() => navigate("/")}
            className="text-[var(--brand-blue)] hover:underline text-sm flex items-center gap-1 mx-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            Change email
          </button>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => setShowHelp(!showHelp)}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Didn't receive the email?
            </button>

            {showHelp && (
              <div className="mt-4 p-4 bg-gray-50 rounded-xl text-left text-sm text-gray-700 space-y-2">
                <p>• Check your spam folder</p>
                <p>• Make sure you entered the correct IE email</p>
                <p>• Wait a few minutes and check again</p>
                <p>• Try resending the link</p>
              </div>
            )}
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Need help? Contact support@sellieng.ie.edu
        </p>
      </div>
    </div>
  );
}
