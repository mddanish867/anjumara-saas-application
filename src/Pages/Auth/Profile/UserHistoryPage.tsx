import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const UserHistoryPage = () => {
  const conversionHistory = [
    { id: 1, fileName: 'Credential login', ip: '234.56.56.5', date: '2023-05-15', agent:'Chrome' },
    { id: 2, fileName: 'spreadsheet.xlsx', ip: '234.56.56.5', date: '2023-05-14', agent:'Safari'},
    { id: 3, fileName: 'presentation.pptx', ip: '234.56.56.5', date: '2023-05-13', agent:'Edge' },
  ];

  return (
    <div className="w-full min-h-screen mt-20">
      <motion.div
        className="bg-white dark:bg-transparent dark:text-gray-50 p-8 rounded-lg shadow-sm w-full h-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100">Login History</h2>
        <Table className="w-full">
          <TableHeader>
            <TableRow className="border-b border-gray-200 dark:border-gray-600">
              <TableHead className="text-gray-700 dark:text-gray-300">Login type</TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300">IP address</TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300">User agent</TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {conversionHistory.map((item) => (
              <TableRow key={item.id} className="border-b border-gray-200 dark:border-gray-600">
                <TableCell className="text-muted-foreground  flex-col flex">{item.fileName}
                  <span>{item.date}</span>
                </TableCell>
                <TableCell className="text-muted-foreground">{item.ip}</TableCell>
                <TableCell className="text-muted-foreground">{item.agent}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="text-gray-900 dark:text-muted-foreground border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Download
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  );
};

export default UserHistoryPage;