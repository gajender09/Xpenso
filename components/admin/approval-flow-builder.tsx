"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Plus, X } from "lucide-react"

const defaultSteps = ["Manager", "Finance", "Director"]

export function ApprovalFlowBuilder() {
  const [steps, setSteps] = useState(defaultSteps)

  const addStep = () => {
    setSteps([...steps, "New Step"])
  }

  const removeStep = (index: number) => {
    setSteps(steps.filter((_, i) => i !== index))
  }

  return (
    <Card className="border-border shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Approval Flows</CardTitle>
            <CardDescription>Configure the expense approval workflow steps</CardDescription>
          </div>
          <Button variant="outline" className="gap-2 bg-transparent" onClick={addStep}>
            <Plus className="h-4 w-4" />
            Add Step
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="relative group">
                  <Badge variant="outline" className="px-4 py-2 text-sm font-medium bg-card border-2 border-primary/20">
                    {step}
                  </Badge>
                  {steps.length > 1 && (
                    <button
                      onClick={() => removeStep(index)}
                      className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </div>
                {index < steps.length - 1 && <ArrowRight className="h-5 w-5 text-muted-foreground" />}
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-border">
            <h4 className="text-sm font-medium mb-3">Flow Rules</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Expenses under $100: Manager approval only</p>
              <p>• Expenses $100-$500: Manager → Finance</p>
              <p>• Expenses over $500: Full approval chain</p>
            </div>
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90">Save Approval Flow</Button>
        </div>
      </CardContent>
    </Card>
  )
}
