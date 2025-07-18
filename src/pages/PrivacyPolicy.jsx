import React from "react";
import { privacyPolicy } from "../../public/data";
import { Shield, Lock, Eye, FileText } from "lucide-react";
import HeroBanner from "../components/HeroBanner";

export default function PrivacyPolicy() {
  const { homeBanner, introduction, policies, commitment} =
    privacyPolicy;
  return (
    <>
      <HeroBanner data={homeBanner} />
      <div className="min-h-screen">
        {/* Header */}
        <div className=" shadow-sm">
          <div className="max-w-4xl mx-auto px-6 py-6">
            <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-red-700 rounded-lg">
              <Shield className="h-8 w-8 text-red-300" />
            </div>
            <p className=" text-lg leading-relaxed">
              {introduction}
            </p>
          </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 pb-12">
          <div className=" rounded-2xl shadow-xl border border-white overflow-hidden">
            {/* Policy Items */}
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-8">
                <FileText className="h-6 w-6 text-red-600" />
                <h2 className="text-2xl font-semibold text-white">
                  Our Privacy Commitments
                </h2>
              </div>

              <div className="space-y-6">
                {policies.map((policy, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-black rounded-xl border border-white hover:bg-zinc-900 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-200 leading-relaxed font-medium">
                      {policy}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Commitment Section */}
            <div className="bg-black p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="h-6 w-6 text-white" />
                <h3 className="text-xl font-semibold text-white">
                  Our Commitment
                </h3>
              </div>
              <p className=" leading-relaxed font-medium">
                {commitment}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
