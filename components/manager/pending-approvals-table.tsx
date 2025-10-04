"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, Check, X } from "lucide-react"
import { ApprovalModal } from "@/components/manager/approval-modal"

const mockPendingExpenses = [
  {
    id: 1,
    employee: "John Smith",
    date: "2025-01-15",
    category: "Meals & Entertainment",
    amount: 125.5,
    currency: "USD",
    receipt: "/restaurant-receipt.png",
  },
  {
    id: 2,
    employee: "Sarah Johnson",
    date: "2025-01-14",
    category: "Travel",
    amount: 850.0,
    currency: "USD",
    receipt: "/flight-ticket.jpg",
  },
  {
    id: 3,
    employee: "Mike Davis",
    date: "2025-01-13",
    category: "Office Supplies",
    amount: 45.75,
    currency: "USD",
    receipt: "/office-supplies-receipt.jpg",
  },
]

export function PendingApprovalsTable() {
  const [selectedExpense, setSelectedExpense] = useState<(typeof mockPendingExpenses)[0] | null>(null)
  const [modalAction, setModalAction] = useState<"approve" | "reject" | null>(null)

  const handleAction = (expense: (typeof mockPendingExpenses)[0], action: "approve" | "reject") => {
    setSelectedExpense(expense)
    setModalAction(action)
  }

  const handleCloseModal = () => {
    setSelectedExpense(null)
    setModalAction(null)
  }

  return (
    <>
      <Card className="border-border shadow-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Pending Approvals</CardTitle>
              <CardDescription>Review and approve expense claims from your team</CardDescription>
            </div>
            <Badge variant="destructive" className="text-base px-3 py-1">
              {mockPendingExpenses.length}
            </Badge>
          </div>
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
                  <TableHead>Receipt</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockPendingExpenses.map((expense) => (
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
                    <TableCell>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <Eye className="h-4 w-4" />
                        View
                      </Button>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="gap-1 bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
                          onClick={() => handleAction(expense, "approve")}
                        >
                          <Check className="h-4 w-4" />
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="gap-1 bg-red-50 text-red-700 border-red-200 hover:bg-red-100"
                          onClick={() => handleAction(expense, "reject")}
                        >
                          <X className="h-4 w-4" />
                          Reject
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {selectedExpense && modalAction && (
        <ApprovalModal expense={selectedExpense} action={modalAction} onClose={handleCloseModal} />
      )}
    </>
  )
}
