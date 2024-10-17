import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const SecuritySettingsPage = () => {
  return (
    <div className="min-h-screen border bg-white mb-10 dark:bg-transparent dark:text-gray-50 flex items-center justify-center p-4 mt-20">
      <motion.div
        className="bg-white border-none dark:bg-transparent dark:text-gray-50 p-4 sm:p-6 md:p-8 rounded-lg  w-full max-w-2xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:bg-transparent dark:text-gray-50">Security Settings</h2>
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:bg-transparent dark:text-gray-50">Change Password</h3>
            <div className="space-y-2">
              <Label htmlFor="current-password" className="text-gray-700 dark:bg-transparent dark:text-gray-50">Current Password</Label>
              <Input id="current-password" type="password" className="bg-white  text-gray-900 dark:bg-transparent dark:text-gray-50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password" className="text-gray-700 dark:bg-transparent dark:text-gray-50">New Password</Label>
              <Input id="new-password" type="password" className="bg-white  text-gray-900 dark:bg-transparent dark:text-gray-50"/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-gray-700 dark:bg-transparent dark:text-gray-50">Confirm New Password</Label>
              <Input id="confirm-password" type="password" className="bg-white  text-gray-900 dark:bg-transparent dark:text-gray-50" />
            </div>
            <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-950">
              Update Password
            </Button>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">Two-Factor Authentication</h3>
            <span className='text-gray-950 dark:text-gray-50 text-sm text-muted-foreground'>Protect your account by adding an extra layer of security.</span>
            <div className="flex items-center justify-between">
              <Label htmlFor="two-factor" className="text-base sm:text-md text-gray-700 dark:text-gray-300">Enable Two-Factor Authentication</Label>
              <Switch id="two-factor" className="bg-gray-200  dark:bg-gray-600 data-[state=checked]:bg-blue-400 dark:data-[state=checked]:bg-blue-400" />
            </div>
          </div>
          <div className="space-y-4 mb-10">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">Session Management</h3>
            <Button variant="outline" className="w-full text-gray-900 dark:text-gray-50 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-50 dark:hover:text-gray-950">
              Log Out of All Devices
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SecuritySettingsPage