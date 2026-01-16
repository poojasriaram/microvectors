import { AlertCircle } from 'lucide-react';

const demandChallenges = [
  'Faulty Demand Discovery',
  'Marketing Channel Misalignment',
  'Poor Demand Capture',
  'Misaligned Marketing Investment',
  'Poor Offer-to-Need Mapping',
  'Lack of Clear Strategy',
  'Poor Buyer Personas',
];

const salesChallenges = [
  'Lack of Lead Capture System',
  'Unclear Value Proposition',
  'Poor Pre-Sales Engagement',
  'Lack of Lead Nurturing',
  'Ineffective Content Mapping',
  'Unqualified Digital Sales Team',
  'Sales & Marketing Misalignment',
];

export default function ChallengesSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#0F172A]">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Sales & Demand Generation{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Challenges
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Identify and overcome the critical challenges holding back your revenue growth
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Demand Generation Challenges */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-[#020617] backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Demand Generation Performance Challenges
                </h3>
              </div>

              <div className="space-y-3">
                {demandChallenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/10 hover:border-red-500/30 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-red-400 font-semibold">{index + 1}</span>
                    </div>
                    <span className="text-slate-300">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sales & Revenue Challenges */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-[#020617] backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Sales & Revenue Challenges
                </h3>
              </div>

              <div className="space-y-3">
                {salesChallenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-orange-500/5 border border-orange-500/10 hover:border-orange-500/30 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-orange-400 font-semibold">{index + 1}</span>
                    </div>
                    <span className="text-slate-300">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}