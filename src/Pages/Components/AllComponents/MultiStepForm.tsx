"use client"

import { useState } from "react"

type FormData = {
  name: string
  email: string
  companyName: string
  companySize: string
  role: string
  preference: string
}

const initialFormData: FormData = {
  name: "",
  email: "",
  companyName: "",
  companySize: "",
  role: "",
  preference: "",
}

export default function OnboardingWizard() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  const renderStep = () => {
    switch (step) {
      case 1:
        return <WelcomeStep formData={formData} updateFormData={updateFormData} />
      case 2:
        return <CompanyStep formData={formData} updateFormData={updateFormData} />
      case 3:
        return <RoleStep formData={formData} updateFormData={updateFormData} />
      case 4:
        return <ConfirmationStep formData={formData} />
      default:
        return null
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md w-full max-w-md mx-auto overflow-hidden">
      <div className="bg-gray-50 px-4 py-5 border-b border-gray-200 sm:px-6">
        <h2 className="text-lg font-medium text-gray-900">SaaS Onboarding - Step {step} of 4</h2>
      </div>
      <div className="px-4 py-5 sm:p-6">{renderStep()}</div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        {step < 4 ? (
          <button
            onClick={nextStep}
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => console.log("Onboarding complete!", formData)}
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Complete
          </button>
        )}
        {step > 1 && (
          <button
            onClick={prevStep}
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
          >
            Previous
          </button>
        )}
      </div>
    </div>
  )
}

function WelcomeStep({
  formData,
  updateFormData,
}: {
  formData: FormData
  updateFormData: (field: keyof FormData, value: string) => void
}) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900">Welcome! Let's get started.</h3>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={(e) => updateFormData("name", e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={(e) => updateFormData("email", e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="john@example.com"
        />
      </div>
    </div>
  )
}

function CompanyStep({
  formData,
  updateFormData,
}: {
  formData: FormData
  updateFormData: (field: keyof FormData, value: string) => void
}) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900">Tell us about your company</h3>
      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
          Company Name
        </label>
        <input
          type="text"
          name="companyName"
          id="companyName"
          value={formData.companyName}
          onChange={(e) => updateFormData("companyName", e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Acme Inc."
        />
      </div>
      <div>
        <label htmlFor="companySize" className="block text-sm font-medium text-gray-700">
          Company Size
        </label>
        <select
          id="companySize"
          name="companySize"
          value={formData.companySize}
          onChange={(e) => updateFormData("companySize", e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <option value="">Select company size</option>
          <option value="1-10">1-10 employees</option>
          <option value="11-50">11-50 employees</option>
          <option value="51-200">51-200 employees</option>
          <option value="201-500">201-500 employees</option>
          <option value="500+">500+ employees</option>
        </select>
      </div>
    </div>
  )
}

function RoleStep({
  formData,
  updateFormData,
}: {
  formData: FormData
  updateFormData: (field: keyof FormData, value: string) => void
}) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900">Your role and preferences</h3>
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
          Your Role
        </label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={(e) => updateFormData("role", e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <option value="">Select your role</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="product-manager">Product Manager</option>
          <option value="marketing">Marketing</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Preferred Communication</label>
        <div className="mt-2 space-y-2">
          {["email", "phone", "slack"].map((option) => (
            <div key={option} className="flex items-center">
              <input
                id={option}
                name="preference"
                type="radio"
                value={option}
                checked={formData.preference === option}
                onChange={(e) => updateFormData("preference", e.target.value)}
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
              />
              <label htmlFor={option} className="ml-3 block text-sm font-medium text-gray-700">
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ConfirmationStep({ formData }: { formData: FormData }) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900">Confirm your details</h3>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-lg">
        <div className="text-sm font-medium text-gray-500">Name</div>
        <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{formData.name}</div>
      </div>
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <div className="text-sm font-medium text-gray-500">Email</div>
        <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{formData.email}</div>
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-lg">
        <div className="text-sm font-medium text-gray-500">Company</div>
        <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{formData.companyName}</div>
      </div>
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <div className="text-sm font-medium text-gray-500">Company Size</div>
        <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{formData.companySize}</div>
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-lg">
        <div className="text-sm font-medium text-gray-500">Role</div>
        <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{formData.role}</div>
      </div>
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <div className="text-sm font-medium text-gray-500">Preferred Communication</div>
        <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{formData.preference}</div>
      </div>
      <p className="text-sm text-gray-500">
        Please review your information before completing the onboarding process.
      </p>
    </div>
  )
}