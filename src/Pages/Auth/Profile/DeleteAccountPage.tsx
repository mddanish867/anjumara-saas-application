import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DeleteAccountPage = () => {
  return (
    <motion.div
      className="mt-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Delete Account</CardTitle>
          <CardDescription>Permanently remove your account and all associated data</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-red-600 dark:text-red-400">
            Warning: This action is irreversible. All your data will be permanently deleted.
          </p>
          <div className="space-y-2">
            <Label htmlFor="confirm-email">Confirm your email</Label>
            <Input 
              id="confirm-email" 
              type="email" 
              placeholder="Enter your email" 
              className="dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Enter your password</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="Enter your password" 
              className="dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reason">Reason for leaving (optional)</Label>
            <textarea
              id="reason"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
              rows={4}
              placeholder="Tell us why you're deleting your account"
            ></textarea>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-red-600 text-white hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800">
            Permanently Delete Account
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default DeleteAccountPage;