import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const DeleteAccountPage = () => {
  return (
    <div className="min-h-screen border bg-white dark:text-gray-50 dark:bg-transparent flex items-center justify-center p-4 mt-20">
      <motion.div
        className="bg-white dark:bg-transparent dark:text-gray-50 p-8 rounded-lg  w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-50">Delete Account</h2>
        <div className="space-y-6">
          <p className="text-red-600">
            Warning: This action is irreversible. All your data will be permanently deleted.
          </p>
          <div className="space-y-2">
            <Label htmlFor="confirm-email">Confirm your email</Label>
            <Input id="confirm-email" className='dark:bg-transparent dark:text-gray-50' type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Enter your password</Label>
            <Input id="password" className='dark:bg-transparent dark:text-gray-50' type="password" placeholder="Enter your password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reason">Reason for leaving (optional)</Label>
            <textarea
              id="reason"
              className="w-full px-3 py-2 text-gray-700 dark:bg-transparent dark:text-gray-50 border rounded-lg focus:outline-none"
              rows={4}
              placeholder="Tell us why you're deleting your account"
            ></textarea>
          </div>
          <Button className="w-full bg-red-600 text-white hover:bg-red-700">
            Permanently Delete Account
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default DeleteAccountPage