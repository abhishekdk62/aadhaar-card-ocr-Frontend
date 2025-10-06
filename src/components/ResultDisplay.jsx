import React from "react";
import { Copy, User, CreditCard, Calendar, MapPin, Users } from "lucide-react";

const ResultDisplay = ({ result }) => {
  const { extractedInfo, frontText, backText } = result;



  return (
    <div className="p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-indigo-600 mb-2">
          Extracted Information
        </h2>
        <p className="text-gray-600">
          Information successfully extracted from your Aadhaar card
        </p>
      </div>

      {/* Extracted Information Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <InfoCard
          label="Aadhaar Number"
          value={extractedInfo?.aadhaarNumber || "Not found"}
        />
        <InfoCard
          label="Full Name"
          value={extractedInfo?.name || "Not found"}
        />
        <InfoCard
          label="Date of Birth"
          value={extractedInfo?.dob || "Not found"}
        />
        <InfoCard
          label="Gender"
          value={extractedInfo?.gender || "Not found"}
        />
      </div>

      {/* Address Card - Full Width */}
      {extractedInfo?.address && (
        <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200 mb-8">
          <div className="flex items-center mb-3">
            <h3 className="text-lg font-bold text-gray-800">Address</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {extractedInfo.address}
          </p>
        </div>
      )}

      <div className="space-y-6">
        <TextSection
          title="Front Side Text"
          text={frontText}
          onCopy={() => copyToClipboard(frontText)}
        />
        <TextSection
          title="Back Side Text"
          text={backText}
          onCopy={() => copyToClipboard(backText)}
        />
      </div>
    </div>
  );
};

const InfoCard = ({  label, value }) => (
  <div className="bg-white/60 rounded-2xl p-6 border border-indigo-100">
    <div className="flex items-center mb-3">
      <h3 className="text-lg font-bold text-gray-800">{label}</h3>
    </div>
    <p className="text-gray-700 text-lg font-medium">{value}</p>
  </div>
);

const TextSection = ({ title, text, onCopy }) => (
  <div className="bg-white/60 rounded-2xl border border-indigo-100">
    <div className="flex items-center justify-between p-6 border-b border-indigo-100">
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
    </div>
    <div className="p-6">
      <div className="bg-gray-50 rounded-xl p-4 max-h-40 overflow-y-auto">
        <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
          {text}
        </pre>
      </div>
    </div>
  </div>
);

export default ResultDisplay;
