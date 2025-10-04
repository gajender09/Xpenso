import { Navbar } from "@/components/navbar"
import { TeamExpensesTable } from "@/components/manager/team-expenses-table"

export default function ManagerTeamPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf8]">
      <Navbar role="manager" pendingCount={3} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Team Expenses</h1>
          <p className="text-muted-foreground">View all expenses from your team members</p>
        </div>
        <TeamExpensesTable />
      </main>
    </div>
  )
}
