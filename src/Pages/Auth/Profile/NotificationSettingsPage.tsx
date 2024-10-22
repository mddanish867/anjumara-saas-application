import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const NotificationSettingsPage = () => {
  return (
    <motion.div
      className="mt-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>Manage your notification preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications" className="text-base">
                Email Notifications
              </Label>
              <Switch 
                id="email-notifications" 
                className="bg-gray-200 dark:bg-gray-700 data-[state=checked]:bg-blue-600 dark:data-[state=checked]:bg-blue-400" 
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="conversion-updates" className="text-base">
                Conversion Updates
              </Label>
              <Switch 
                id="conversion-updates" 
                className="bg-gray-200 dark:bg-gray-700 data-[state=checked]:bg-blue-600 dark:data-[state=checked]:bg-blue-400" 
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="new-features" className="text-base">
                New Features
              </Label>
              <Switch 
                id="new-features" 
                className="bg-gray-200 dark:bg-gray-700 data-[state=checked]:bg-blue-600 dark:data-[state=checked]:bg-blue-400" 
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="marketing-emails" className="text-base">
                Marketing Emails
              </Label>
              <Switch 
                id="marketing-emails" 
                className="bg-gray-200 dark:bg-gray-700 data-[state=checked]:bg-blue-600 dark:data-[state=checked]:bg-blue-400" 
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-50 dark:hover:bg-gray-200 dark:text-gray-950"
          >
            Save Preferences
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default NotificationSettingsPage;