import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface PaymentPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PaymentPopup({ open, onOpenChange }: PaymentPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Add Payment Method</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card number</Label>
            <div className="relative">
              <Input id="cardNumber" placeholder="1234 1234 1234 1234" className="pr-12" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-1">
                <img src="/placeholder.svg?height=20&width=32" alt="Visa" className="h-5 w-8" />
                <img src="/placeholder.svg?height=20&width=32" alt="Mastercard" className="h-5 w-8" />
                <img src="/placeholder.svg?height=20&width=32" alt="Amex" className="h-5 w-8" />
                <img src="/placeholder.svg?height=20&width=32" alt="Discover" className="h-5 w-8" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expirationDate">Expiration date</Label>
              <Input id="expirationDate" placeholder="MM / YY" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="securityCode">Security code</Label>
              <div className="relative">
                <Input id="securityCode" type="password" />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select>
              <SelectTrigger id="country">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="usa">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                {/* Add more countries as needed */}
              </SelectContent>
            </Select>
          </div>
          <p className="text-sm text-gray-500">
            By clicking on "Add Card" you will link the new payment method to your Vercel account
          </p>
          <div className="flex justify-between">
            <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button type="submit">Add Card</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}