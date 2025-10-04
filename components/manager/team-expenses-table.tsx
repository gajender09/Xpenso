"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const mockTeamExpenses = [
  {
    id: 1,
    employee: "John Smith",
    date: "2025-01-10",
    category: "Transportation",
    amount: 35.0,
    currency: "USD",
    status: "approved",
  },
  {
    id: 2,
    employee: "Sarah Johnson",
    date: "2025-01-08",
    category: "Accommodation",
    amount: 250.0,
    currency: "USD",
    status: "approved",
  },
  {
    id: 3,
    employee: "Mike Davis",
    date: "2025-01-05",
    category: "Meals & Entertainment",
    amount: 85.5,
    currency: "USD",
    status: "approved",
  },
  {
    id: 4,
    employee: "John Smith",
    date: "2025-01-03",
    category: "Office Supplies",
    amount: 42.25,
    currency: "USD",
    status: "rejected",
  },
]

export function TeamExpensesTable() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Approved
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            Rejected
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <Card className="border-border shadow-sm">
      <CardHeader>
        <CardTitle>Team Expenses</CardTitle>
        <CardDescription>View all processed expenses from your team members</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTeamExpenses.map((expense) => (
                <TableRow key={expense.id}>
                  <TableCell className="font-medium">{expense.employee}</TableCell>
                  <TableCell>
                    {new Date(expense.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </TableCell>
                  <TableCell>{expense.category}</TableCell>
                  <TableCell>
                    {expense.currency} ${expense.amount.toFixed(2)}
                  </TableCell>
                  <TableCell>{getStatusBadge(expense.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
