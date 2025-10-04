import { Navbar } from "@/components/navbar"
import { UserManagementTable } from "@/components/admin/user-management-table"

export default function AdminUsersPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf8]">
      <Navbar role="admin" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">User Management</h1>
          <p className="text-muted-foreground">Manage user roles and reporting structure</p>
        </div>
        <UserManagementTable />
      </main>
    </div>
  )
}
