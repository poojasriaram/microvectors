import { MapPin, Mail, Phone, Shield, Award, CheckCircle } from 'lucide-react';
import TrustflowLogo from '../../assets/Trustflow-logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-slate-800">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={TrustflowLogo} alt="TrustFlow AI" className="h-20 w-auto p-1" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              AI-Powered Sales & Revenue Acceleration for B2B Companies
            </p>

            {/* Contact Info moved here to save space */}
            <div className="space-y-2 mb-6">
              <a href="mailto:cs@trustflow.in" className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors text-sm">
                <Mail className="w-4 h-4" />
                <span>cs@trustflow.in</span>
              </a>
              <a href="tel:+919513088612" className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors text-sm">
                <Phone className="w-4 h-4" />
                <span>+91 9513088612</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 border border-blue-200 rounded-full">
                <Shield className="w-3 h-3 text-blue-600" />
                <span className="text-[10px] text-blue-700">Secure</span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-purple-50 border border-purple-200 rounded-full">
                <Award className="w-3 h-3 text-purple-600" />
                <span className="text-[10px] text-purple-700">Certified</span>
              </div>
            </div>
          </div>

          {/* Global Offices */}
          <div className="lg:col-span-1">
            <h3 className="text-slate-50 font-semibold mb-4">Global Offices</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-slate-50 text-sm font-medium mb-1">Mumbai</div>
                  <div className="text-slate-400 text-xs leading-relaxed">
                    WeWork, Raheja Platinum,<br />
                    Andheri East,<br />
                    Mumbai 400059
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-slate-50 text-sm font-medium mb-1">Bangalore</div>
                  <div className="text-slate-400 text-xs leading-relaxed">
                    WeWork, Tin Factory,<br />
                    Old Madras Rd,<br />
                    Bengaluru 560016
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-slate-50 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Leadership Team', 'Careers', 'Press & Media', 'Partners Program', 'Affiliate Program'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-400 hover:text-blue-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-slate-50 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Blog & Insights', 'Case Studies', 'Whitepapers', 'Webinars', 'ROI Calculators', 'Implementation Guides'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-400 hover:text-blue-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-slate-50 font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {['Help Center', 'Documentation', 'API Reference', 'Status Page', 'Community Forum', 'Contact Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-400 hover:text-blue-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-slate-50 font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Security Overview', 'GDPR Compliance', 'Data Processing Agreement', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-400 hover:text-blue-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partners & Recognition */}
        <div className="grid md:grid-cols-2 gap-8 border-t border-slate-200 pt-8 mb-8">
          {/* Certified Partners */}
          <div>
            <h3 className="text-slate-50 font-semibold mb-4">Certified Partners</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              <span>Salesforce</span>
              <span>HubSpot</span>
              <span>Microsoft</span>
              <span>AWS</span>
              <span>Google Cloud</span>
            </div>
          </div>

          {/* Recognition */}
          <div>
            <h3 className="text-slate-50 font-semibold mb-4">Recognition</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              <span>Gartner Cool Vendor 2025</span>
              <span>Forrester Wave Leader</span>
              <span>G2 Top 50 AI Platform 2026</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} TrustFlow AI. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-sm text-slate-400 hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm text-slate-400 hover:text-blue-600 transition-colors">
                Terms of Service
              </a>
              <a href="#security" className="text-sm text-slate-400 hover:text-blue-600 transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}