import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

const NotificationSettingsPage = () => {
  return (
    <div className="border min-h-screen bg-white dark:bg-transparent dark:text-gray-50 flex items-center justify-center p-4 mt-20">
      <motion.div
        className="bg-white -mt-40 dark:bg-transparent dark:text-gray-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-sm w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100">
          Notification Settings
        </h2>
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications" className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
              Email Notifications
            </Label>
            <Switch id="email-notifications" className="bg-gray-200 dark:bg-gray-700 data-[state=checked]:bg-blue-600 dark:data-[state=checked]:bg-blue-400" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="conversion-updates" className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
              Conversion Updates
            </Label>
            <Switch id="conversion-updates" className="bg-gray-200 dark:bg-gray-700 data-[state=checked]:bg-blue-600 dark:data-[state=checked]:bg-blue-400" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="new-features" className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
              New Features
            </Label>
            <Switch id="new-features" className="bg-gray-200 dark:bg-gray-700 data-[state=checked]:bg-blue-600 dark:data-[state=checked]:bg-blue-400" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="marketing-emails" className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
              Marketing Emails
            </Label>
            <Switch id="marketing-emails" className="bg-gray-200 dark:bg-gray-700 data-[state=checked]:bg-blue-600 dark:data-[state=checked]:bg-blue-400" />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-50 dark:hover:bg-gray-200 dark:text-gray-950"
          >
            Save Preferences
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default NotificationSettingsPage