import { Navbar } from "@/components/navbar"
import { UserManagementTable } from "@/components/admin/user-management-table"
import { ApprovalFlowBuilder } from "@/components/admin/approval-flow-builder"
import { AllExpensesTable } from "@/components/admin/all-expenses-table"

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#fdfbf8]">
      <Navbar role="admin" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage users, approval flows, and system-wide expenses</p>
        </div>

        <div className="space-y-8">
          <UserManagementTable />
          <ApprovalFlowBuilder />
          <AllExpensesTable />
        </div>
      </main>
    </div>
  )
}
