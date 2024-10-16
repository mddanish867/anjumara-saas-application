import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const UserHistoryPage = () => {
  const conversionHistory = [
    { id: 1, fileName: 'document.docx', convertedTo: 'PDF', date: '2023-05-15' },
    { id: 2, fileName: 'spreadsheet.xlsx', convertedTo: 'PDF', date: '2023-05-14' },
    { id: 3, fileName: 'presentation.pptx', convertedTo: 'PDF', date: '2023-05-13' },
  ];

  return (
    <div className="w-full h-full mt-20">
      <motion.div
        className="bg-white dark:bg-transparent dark:text-gray-50 p-8 rounded-lg shadow-sm w-full h-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-950 dark:text-gray-50">Conversion History</h2>
        <Table className="w-full">
          <TableHeader>
            <TableRow className="border-b border-gray-200 dark:border-gray-600">
              <TableHead className="text-gray-700 dark:text-gray-300">File Name</TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300">Converted To</TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300">Date</TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {conversionHistory.map((item) => (
              <TableRow key={item.id} className="border-b border-gray-200 dark:border-gray-600">
                <TableCell className="text-gray-900 dark:text-gray-100">{item.fileName}</TableCell>
                <TableCell className="text-gray-900 dark:text-gray-100">{item.convertedTo}</TableCell>
                <TableCell className="text-gray-900 dark:text-gray-100">{item.date}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
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