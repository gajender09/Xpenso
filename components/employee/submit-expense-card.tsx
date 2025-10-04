"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Sparkles } from "lucide-react"

export function SubmitExpenseCard() {
  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState("USD")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [receipt, setReceipt] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock submission
    alert("Expense submitted successfully!")
    // Reset form
    setAmount("")
    setCategory("")
    setDescription("")
    setDate("")
    setReceipt(null)
  }

  const handleOCR = () => {
    // Mock OCR functionality
    setAmount("125.50")
    setCategory("meals")
    setDescription("Team lunch at restaurant")
    setDate(new Date().toISOString().split("T")[0])
    alert("Receipt scanned! Fields auto-filled.")
  }

  return (
    <Card className="border-border shadow-sm">
      <CardHeader>
        <CardTitle>Submit Expense</CardTitle>
        <CardDescription>Fill in the details of your expense claim</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger id="currency">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD - US Dollar</SelectItem>
                  <SelectItem value="EUR">EUR - Euro</SelectItem>
                  <SelectItem value="GBP">GBP - British Pound</SelectItem>
                  <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                  <SelectItem value="INR">INR - Indian Rupee</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="meals">Meals & Entertainment</SelectItem>
                  <SelectItem value="travel">Travel</SelectItem>
                  <SelectItem value="accommodation">Accommodation</SelectItem>
                  <SelectItem value="transport">Transportation</SelectItem>
                  <SelectItem value="supplies">Office Supplies</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Provide details about this expense..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="receipt">Receipt</Label>
            <div className="flex gap-2">
              <Input
                id="receipt"
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => setReceipt(e.target.files?.[0] || null)}
                className="flex-1"
              />
              <Button type="button" variant="outline" onClick={handleOCR} className="gap-2 bg-transparent">
                <Sparkles className="h-4 w-4" />
                Auto-fill OCR
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">Upload a receipt image or PDF. Use OCR to auto-fill fields.</p>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            <Upload className="h-4 w-4 mr-2" />
            Submit Expense
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
