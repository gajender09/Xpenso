import { Navbar } from "@/components/navbar"
import { SettingsCard } from "@/components/settings-card"

export default function EmployeeSettingsPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf8]">
      <Navbar role="employee" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences</p>
        </div>
        <SettingsCard />
      </main>
    </div>
  )
}
