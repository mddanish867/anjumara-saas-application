import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useState } from 'react'
import PaymentPopup from "./PaymentPopup"

export default function SubscriptionBilling() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl mt-16">
      <h1 className="text-3xl font-bold mb-6">Subscription & Billing</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Plan Details</h2>
        <div className="border-b border-gray-200 w-16 mb-6"></div>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center">
              Plan Summary
              <span className="ml-2 px-2 py-1 bg-gray-100 dark:text-gray-950 text-xs rounded-full">Free Plan</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-4">
              <span className="text-lg font-semibold mr-2">200</span>
              <span className="text-sm text-gray-500">credits left (deprecated)</span>
            </div>
            <Progress value={100} className="h-2 mb-4" />
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">Price/Month</p>
                <p className="font-semibold">$0</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Included Credits</p>
                <p className="font-semibold">200</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Renewal Date</p>
                <p className="font-semibold">Nov 14, 2024</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="text-right">
          <Button variant="outline" onClick={() => setIsOpen(true)}>Upgrade</Button>
          <PaymentPopup open={isOpen} onOpenChange={setIsOpen} />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Manage Payment Information</h2>
        <Card>
          <CardContent className="p-4">
            <p className="text-gray-500">No payment method added.</p>
          </CardContent>
        </Card>
        <div className="text-right mt-4">
          <Button variant="outline">Add New Payment Method</Button>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Manage Teams</h2>
        <p className="text-sm text-gray-500 mb-4">Teams which you are an owner of that are on a v0 Team or Enterprise plan.</p>
        <Card>
          <CardContent className="p-4">
            <p className="text-gray-500">No teams you are an owner of are on the Team plan.</p>
          </CardContent>
        </Card>
        <p className="text-sm text-gray-500 mt-4">Team billing and members are managed on Vercel.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">On-Demand Credits</h2>
        <p className="text-sm text-gray-500 mb-4">You cannot buy on-demand credits without an active subscription. Please resume your subscription or choose a new plan.</p>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Credits Balance Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span>Current Credits Balance</span>
              <span className="font-semibold">200</span>
            </div>
          </CardContent>
        </Card>
        <div className="mt-4">
          <Button className="w-full">Purchase Credits</Button>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Invoices</h2>
        <p className="text-sm text-gray-500 mb-2">You can refer to all your past invoices in the Vercel website, under Invoices.</p>
        <a href="#" className="text-blue-500 hover:underline">Go to the Invoices page</a>
      </section>
    </div>
  )
}