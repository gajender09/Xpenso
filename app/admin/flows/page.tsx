import { Navbar } from "@/components/navbar"
import { ApprovalFlowBuilder } from "@/components/admin/approval-flow-builder"

export default function AdminFlowsPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf8]">
      <Navbar role="admin" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Approval Flows</h1>
          <p className="text-muted-foreground">Configure the expense approval workflow steps</p>
        </div>
        <ApprovalFlowBuilder />
      </main>
    </div>
  )
}
