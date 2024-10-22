import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SecuritySettingsPage = () => {
  return (
    <motion.div
      className="mt-20 pb-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-2xl mx-auto min-h-adjusted">
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
          <CardDescription>Manage your account security preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Change Password</h3>
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input 
                id="current-password" 
                type="password" 
                className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100" 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input 
                id="new-password" 
                type="password" 
                className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input 
                id="confirm-password" 
                type="password" 
                className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100" 
              />
            </div>
            <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
              Update Password
            </Button>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Two-Factor Authentication</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Protect your account by adding an extra layer of security.
            </p>
            <div className="flex items-center justify-between">
              <Label htmlFor="two-factor" className="text-base">Enable Two-Factor Authentication</Label>
              <Switch 
                id="two-factor" 
                className="bg-gray-200 dark:bg-gray-600 data-[state=checked]:bg-blue-400 dark:data-[state=checked]:bg-blue-400" 
              />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Session Management</h3>
            <Button 
              variant="outline" 
              className="w-full text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Log Out of All Devices
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Save Changes</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default SecuritySettingsPage;