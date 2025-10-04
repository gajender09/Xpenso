"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface ApprovalModalProps {
  expense: {
    id: number
    employee: string
    date: string
    category: string
    amount: number
    currency: string
  }
  action: "approve" | "reject"
  onClose: () => void
}

export function ApprovalModal({ expense, action, onClose }: ApprovalModalProps) {
  const [comment, setComment] = useState("")

  const handleSubmit = () => {
    // Mock submission
    alert(`Expense ${action}ed with comment: ${comment}`)
    onClose()
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="capitalize">{action} Expense</DialogTitle>
          <DialogDescription>
            {action === "approve"
              ? "Approve this expense claim and add an optional comment."
              : "Reject this expense claim and provide a reason."}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <div className="text-sm">
              <span className="font-medium">Employee:</span> {expense.employee}
            </div>
            <div className="text-sm">
              <span className="font-medium">Amount:</span> {expense.currency} ${expense.amount.toFixed(2)}
            </div>
            <div className="text-sm">
              <span className="font-medium">Category:</span> {expense.category}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="comment">Comment {action === "reject" && "(Required)"}</Label>
            <Textarea
              id="comment"
              placeholder={
                action === "approve" ? "Add an optional comment..." : "Please provide a reason for rejection..."
              }
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              required={action === "reject"}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className={
              action === "approve"
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-red-600 hover:bg-red-700 text-white"
            }
            disabled={action === "reject" && !comment.trim()}
          >
            {action === "approve" ? "Approve" : "Reject"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
