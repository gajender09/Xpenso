import { Navbar } from "@/components/navbar"
import { MyExpensesTable } from "@/components/employee/my-expenses-table"

export default function EmployeeExpensesPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf8]">
      <Navbar role="employee" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">My Expenses</h1>
          <p className="text-muted-foreground">View and track all your submitted expenses</p>
        </div>
        <MyExpensesTable />
      </main>
    </div>
  )
}
