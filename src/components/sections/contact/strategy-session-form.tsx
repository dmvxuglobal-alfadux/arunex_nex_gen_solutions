"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, ChevronLeft, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const TOTAL_STEPS = 5;

const GOAL_OPTIONS = [
  "AI Strategy", "Business Automation", "Sales Growth", 
  "Customer Experience", "Executive Dashboards", "Analytics", 
  "Digital Transformation", "Other"
];

export const StrategySessionForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    // Step 1
    fullName: "", companyName: "", email: "", mobile: "", jobTitle: "",
    // Step 2
    industry: "", companySize: "", businessStage: "", country: "",
    // Step 3
    goals: [] as string[],
    // Step 4
    challenges: "", projectGoals: "", preferredDate: "", additionalNotes: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const toggleGoal = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal) 
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    if (step === 1) {
      if (!formData.fullName) newErrors.fullName = "Required";
      if (!formData.companyName) newErrors.companyName = "Required";
      if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Valid email required";
    }
    if (step === 2) {
      if (!formData.industry) newErrors.industry = "Required";
      if (!formData.companySize) newErrors.companySize = "Required";
    }
    if (step === 3) {
      if (formData.goals.length === 0) newErrors.goals = "Select at least one goal";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep(s => Math.min(s + 1, TOTAL_STEPS));
  };
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <section className="relative w-full bg-[#030712] py-24 z-20 overflow-hidden">
        <div className="container mx-auto px-6 max-w-[800px] relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-12 rounded-[32px] bg-white/[0.02] border border-white/10"
          >
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-8 border border-emerald-500/30">
              <Check className="w-10 h-10 text-emerald-400" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-white mb-6">Request Received</h2>
            <p className="text-lg text-white/70 font-light mb-8">
              Thank you, {formData.fullName}. Your Strategy Session request has been securely submitted. One of our executive consultants will contact you shortly to confirm your consultation time.
            </p>
            <Button onClick={() => window.location.reload()} variant="outline" className="bg-white/5 border-white/10 text-white">
              Return to Website
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full bg-[#030712] py-24 z-20 overflow-hidden border-t border-white/[0.02]">
      <div className="container mx-auto px-6 max-w-[900px] relative z-10">
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Book Your Strategy Session
            </h2>
            <p className="text-lg text-white/60 font-light">
              Provide us with some initial context so we can prepare a highly tailored consultation.
            </p>
          </div>
        </ScrollReveal>

        <div className="w-full bg-[#0A1224]/80 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.4)]">
          
          {/* Progress Bar */}
          <div className="flex w-full bg-white/[0.02] border-b border-white/5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex-1 h-2 bg-white/5 relative">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[var(--color-gradient-01-start)] to-[var(--color-gradient-01-end)]"
                  initial={{ width: 0 }}
                  animate={{ width: step >= i ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            ))}
          </div>

          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                
                {/* STEP 1 */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-8">1. Business Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[13px] text-white/60 uppercase tracking-wide">Full Name *</label>
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className={cn("w-full h-12 bg-white/5 border rounded-xl px-4 text-white focus:outline-none focus:border-[var(--color-gradient-01-end)] transition-colors", errors.fullName ? "border-red-500/50" : "border-white/10")} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[13px] text-white/60 uppercase tracking-wide">Company Name *</label>
                        <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} className={cn("w-full h-12 bg-white/5 border rounded-xl px-4 text-white focus:outline-none focus:border-[var(--color-gradient-01-end)] transition-colors", errors.companyName ? "border-red-500/50" : "border-white/10")} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[13px] text-white/60 uppercase tracking-wide">Email Address *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={cn("w-full h-12 bg-white/5 border rounded-xl px-4 text-white focus:outline-none focus:border-[var(--color-gradient-01-end)] transition-colors", errors.email ? "border-red-500/50" : "border-white/10")} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[13px] text-white/60 uppercase tracking-wide">Mobile Number</label>
                        <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-[var(--color-gradient-01-end)] transition-colors" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-[13px] text-white/60 uppercase tracking-wide">Job Title</label>
                        <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-[var(--color-gradient-01-end)] transition-colors" />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-8">2. Business Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[13px] text-white/60 uppercase tracking-wide">Industry *</label>
                        <select name="industry" value={formData.industry} onChange={handleInputChange} className={cn("w-full h-12 bg-[#0A1224] border rounded-xl px-4 text-white focus:outline-none focus:border-[var(--color-gradient-01-end)] transition-colors appearance-none", errors.industry ? "border-red-500/50" : "border-white/10")}>
                          <option value="">Select Industry...</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Retail">Retail</option>
                          <option value="Finance">Financial Services</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[13px] text-white/60 uppercase tracking-wide">Company Size *</label>
                        <select name="companySize" value={formData.companySize} onChange={handleInputChange} className={cn("w-full h-12 bg-[#0A1224] border rounded-xl px-4 text-white focus:outline-none focus:border-[var(--color-gradient-01-end)] transition-colors appearance-none", errors.companySize ? "border-red-500/50" : "border-white/10")}>
                          <option value="">Select Size...</option>
                          <option value="1-50">1 - 50 Employees</option>
                          <option value="51-250">51 - 250 Employees</option>
                          <option value="251+">251+ Employees</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[13px] text-white/60 uppercase tracking-wide">Business Stage</label>
                        <input type="text" name="businessStage" placeholder="e.g. Scaling rapidly, Legacy modernization" value={formData.businessStage} onChange={handleInputChange} className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-[var(--color-gradient-01-end)] transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[13px] text-white/60 uppercase tracking-wide">Country</label>
                        <input type="text" name="country" value={formData.country} onChange={handleInputChange} className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-[var(--color-gradient-01-end)] transition-colors" />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-8">3. Transformation Goals</h3>
                    {errors.goals && <p className="text-red-400 text-sm mb-4">{errors.goals}</p>}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {GOAL_OPTIONS.map((goal) => {
                        const isSelected = formData.goals.includes(goal);
                        return (
                          <button
                            key={goal}
                            onClick={() => toggleGoal(goal)}
                            className={cn(
                              "text-left px-6 py-4 rounded-xl border transition-all duration-200 flex items-center justify-between",
                              isSelected 
                                ? "bg-[var(--color-gradient-01-end)]/10 border-[var(--color-gradient-01-end)]" 
                                : "bg-white/5 border-white/10 hover:border-white/20"
                            )}
                          >
                            <span className={cn("text-[15px] font-medium", isSelected ? "text-white" : "text-white/70")}>{goal}</span>
                            <div className={cn("w-5 h-5 rounded-full border flex items-center justify-center", isSelected ? "border-[var(--color-gradient-01-end)] bg-[var(--color-gradient-01-end)]" : "border-white/20")}>
                              {isSelected && <Check className="w-3 h-3 text-white" />}
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 4 */}
                {step === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-8">4. Additional Information</h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[13px] text-white/60 uppercase tracking-wide">Current Business Challenges</label>
                        <textarea name="challenges" value={formData.challenges} onChange={handleInputChange} rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[var(--color-gradient-01-end)] transition-colors resize-none" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[13px] text-white/60 uppercase tracking-wide">Project Goals</label>
                        <textarea name="projectGoals" value={formData.projectGoals} onChange={handleInputChange} rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[var(--color-gradient-01-end)] transition-colors resize-none" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[13px] text-white/60 uppercase tracking-wide">Preferred Consultation Date</label>
                          <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleInputChange} className="w-full h-12 bg-[#0A1224] border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-[var(--color-gradient-01-end)] transition-colors appearance-none" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 5 */}
                {step === 5 && (
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white mb-8">Review & Submit</h3>
                    
                    <div className="space-y-6 bg-white/[0.02] p-8 rounded-2xl border border-white/5">
                      <div className="grid grid-cols-2 gap-4 border-b border-white/5 pb-4">
                        <div>
                          <p className="text-[11px] text-white/40 uppercase tracking-widest mb-1">Name</p>
                          <p className="text-white font-medium">{formData.fullName}</p>
                        </div>
                        <div>
                          <p className="text-[11px] text-white/40 uppercase tracking-widest mb-1">Company</p>
                          <p className="text-white font-medium">{formData.companyName}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 border-b border-white/5 pb-4">
                        <div>
                          <p className="text-[11px] text-white/40 uppercase tracking-widest mb-1">Email</p>
                          <p className="text-white font-medium">{formData.email}</p>
                        </div>
                        <div>
                          <p className="text-[11px] text-white/40 uppercase tracking-widest mb-1">Industry</p>
                          <p className="text-white font-medium">{formData.industry}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-[11px] text-white/40 uppercase tracking-widest mb-2">Selected Goals</p>
                        <div className="flex flex-wrap gap-2">
                          {formData.goals.map(g => (
                            <span key={g} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">{g}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                )}

              </motion.div>
            </AnimatePresence>

            {/* Footer Navigation */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
              {step > 1 ? (
                <Button onClick={prevStep} variant="ghost" className="text-white/60 hover:text-white hover:bg-white/5">
                  <ChevronLeft className="w-4 h-4 mr-2" /> Back
                </Button>
              ) : <div />}

              {step < TOTAL_STEPS ? (
                <Button onClick={nextStep} className="bg-white text-[#0A1224] hover:bg-white/90">
                  Continue <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button 
                  onClick={handleSubmit} 
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6] text-white hover:opacity-90 min-w-[200px]"
                >
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Schedule My Strategy Session"}
                </Button>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
