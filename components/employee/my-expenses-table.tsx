"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const mockExpenses = [
  {
    id: 1,
    date: "2025-01-15",
    category: "Meals & Entertainment",
    amount: 125.5,
    currency: "USD",
    companyCurrency: "USD",
    status: "pending",
  },
  {
    id: 2,
    date: "2025-01-12",
    category: "Travel",
    amount: 450.0,
    currency: "USD",
    companyCurrency: "USD",
    status: "approved",
  },
  {
    id: 3,
    date: "2025-01-10",
    category: "Office Supplies",
    amount: 75.25,
    currency: "USD",
    companyCurrency: "USD",
    status: "rejected",
  },
  {
    id: 4,
    date: "2025-01-08",
    category: "Transportation",
    amount: 35.0,
    currency: "USD",
    companyCurrency: "USD",
    status: "approved",
  },
]

export function MyExpensesTable() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            Pending
          </Badge>
        )
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
        <CardTitle>My Expenses</CardTitle>
        <CardDescription>Track the status of your submitted expenses</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockExpenses.map((expense) => (
                <TableRow key={expense.id}>
                  <TableCell className="font-medium">
                    {new Date(expense.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </TableCell>
                  <TableCell>{expense.category}</TableCell>
                  <TableCell>
                    {expense.currency} ${expense.amount.toFixed(2)}
                    {expense.currency !== expense.companyCurrency && (
                      <span className="text-xs text-muted-foreground ml-1">
                        ({expense.companyCurrency} ${expense.amount.toFixed(2)})
                      </span>
                    )}
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
