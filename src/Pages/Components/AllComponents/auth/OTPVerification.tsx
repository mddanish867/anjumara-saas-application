'use client'

import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function OTPVerification() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ]
  const [error, setError] = useState('')
  const router = useNavigate()

  useEffect(() => {
    // Focus the first input on component mount
    inputRefs[0].current?.focus()
  }, [])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      // If pasting multiple digits, distribute them across inputs
      const digits = value.split('').slice(0, 6 - index)
      const newOtp = [...otp]
      digits.forEach((digit, i) => {
        if (index + i < 6) {
          newOtp[index + i] = digit
        }
      })
      setOtp(newOtp)
      // Focus the next empty input or the last input
      const nextIndex = Math.min(index + digits.length, 5)
      inputRefs[nextIndex].current?.focus()
    } else {
      // For single digit input
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)
      if (value !== '' && index < 5) {
        inputRefs[index + 1].current?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs[index - 1].current?.focus()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const otpString = otp.join('')
    if (otpString.length !== 6) {
      setError('Please enter all 6 digits')
      return
    }

    try {
      // Here you would typically make an API call to verify the OTP
      // For this example, we'll simulate a successful verification
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulating API call
      console.log('OTP Verified:', otpString)
      router('/dashboard') // Redirect to dashboard on success
    } catch (error) {
      setError('Invalid OTP. Please try again.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-sm w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Verify OTP</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-between">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={inputRefs[index]}
                className="w-12 h-12 text-center text-2xl border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
                aria-label={`Digit ${index + 1} of OTP`}
              />
            ))}
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Verify OTP
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Didn't receive the code?{' '}
          <button
            className="text-blue-500 hover:underline focus:outline-none"
            onClick={() => {
              // Here you would typically trigger the OTP resend process
              console.log('Resend OTP')
            }}
          >
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  )
}