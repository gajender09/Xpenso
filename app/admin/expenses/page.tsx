import { Navbar } from "@/components/navbar"
import { AllExpensesTable } from "@/components/admin/all-expenses-table"

export default function AdminExpensesPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf8]">
      <Navbar role="admin" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">All Expenses</h1>
          <p className="text-muted-foreground">System-wide expense overview with admin override capabilities</p>
        </div>
        <AllExpensesTable />
      </main>
    </div>
  )
}
