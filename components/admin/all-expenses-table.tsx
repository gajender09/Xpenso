"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Shield } from "lucide-react"

const mockAllExpenses = [
  {
    id: 1,
    employee: "John Smith",
    date: "2025-01-15",
    category: "Meals & Entertainment",
    amount: 125.5,
    currency: "USD",
    status: "pending",
  },
  {
    id: 2,
    employee: "Sarah Johnson",
    date: "2025-01-14",
    category: "Travel",
    amount: 850.0,
    currency: "USD",
    status: "pending",
  },
  {
    id: 3,
    employee: "Mike Davis",
    date: "2025-01-12",
    category: "Office Supplies",
    amount: 45.75,
    currency: "USD",
    status: "approved",
  },
  {
    id: 4,
    employee: "Emily Chen",
    date: "2025-01-10",
    category: "Transportation",
    amount: 35.0,
    currency: "USD",
    status: "approved",
  },
  {
    id: 5,
    employee: "John Smith",
    date: "2025-01-08",
    category: "Accommodation",
    amount: 250.0,
    currency: "USD",
    status: "rejected",
  },
]

export function AllExpensesTable() {
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

  const handleOverride = (expenseId: number) => {
    alert(`Admin override for expense #${expenseId}`)
  }

  return (
    <Card className="border-border shadow-sm">
      <CardHeader>
        <CardTitle>All Expenses</CardTitle>
        <CardDescription>System-wide expense overview with admin override capabilities</CardDescription>
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
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockAllExpenses.map((expense) => (
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
                  <TableCell className="text-right">
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-1 bg-transparent"
                      onClick={() => handleOverride(expense.id)}
                    >
                      <Shield className="h-4 w-4" />
                      Override
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
