
import React, { useState } from 'react';
import { Send, Calendar, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { submitToSheet } from '../../lib/sheets';


export default function LeadCaptureSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitToSheet('Inbound Leads', {
        "First Name": formData.name.split(' ')[0] || formData.name,
        "Last Name": formData.name.split(' ').slice(1).join(' ') || '-',
        "Email": formData.email,
        "Phone": formData.phone,
        "Status": "New",
        "Source": "Get Started Section"
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '' });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      alert(`Submission Failed: ${error.message || "Please check your internet connection."}`);
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 lg:py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-3xl blur-2xl opacity-50"></div>

          <div className="relative bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-xl">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-bold mb-4">
                Get a Free{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI-Driven Sales Diagnostic
                </span>{' '}
                Consultation
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Discover how AI can transform your sales process and accelerate revenue growth
              </p>
            </div>

            {submitted ? (
              /* Success State */
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 rounded-full mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Request Received!
                </h3>
                <p className="text-slate-600 mb-6 font-medium">
                  We'll get back to you within 24 hours to schedule your free AI diagnostic consultation.
                </p>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-slate-700">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-slate-700">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all group rounded-lg h-12"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Request'}
                    {!isSubmitting && <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </Button>

                  <Button
                    type="button"
                    size="lg"
                    variant="outline"
                    className="flex-1 border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 rounded-lg h-12"
                  >
                    <Calendar className="mr-2 w-4 h-4" />
                    Book an Appointment Now
                  </Button>
                </div>
              </form>
            )}

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-slate-100">
              <div className="text-center">
                <div className="text-4xl font-bold text-slate-900 mb-1">500+</div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide">B2B Companies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-slate-900 mb-1">5X</div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Avg Revenue Growth</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-slate-900 mb-1">24/7</div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}