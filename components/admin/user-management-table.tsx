"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserPlus, Mail, Trash2 } from "lucide-react"
import { AddUserModal } from "./add-user-modal"

const mockUsers = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@company.com",
    role: "employee",
    manager: "Sarah Johnson",
    password: "emp123xyz",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    role: "manager",
    manager: "Admin",
    password: "mgr456abc",
  },
  {
    id: 3,
    name: "Mike Davis",
    email: "mike.davis@company.com",
    role: "employee",
    manager: "Sarah Johnson",
    password: "emp789def",
  },
  {
    id: 4,
    name: "Emily Chen",
    email: "emily.chen@company.com",
    role: "employee",
    manager: "Sarah Johnson",
    password: "emp321ghi",
  },
]

export function UserManagementTable() {
  const [users, setUsers] = useState(mockUsers)
  const [isAddUserOpen, setIsAddUserOpen] = useState(false)

  const handleRoleChange = (userId: number, newRole: string) => {
    setUsers(users.map((user) => (user.id === userId ? { ...user, role: newRole } : user)))
  }

  const handleManagerChange = (userId: number, newManager: string) => {
    setUsers(users.map((user) => (user.id === userId ? { ...user, manager: newManager } : user)))
  }

  const handleSendPassword = (user: (typeof mockUsers)[0]) => {
    console.log(`Sending password email to ${user.email}`)
    console.log(`Generated password: ${user.password}`)
    alert(
      `Password sent to ${user.email}\n\nDemo Password: ${user.password}\n\n(In production, this would be sent via email)`,
    )
  }

  const handleDeleteUser = (userId: number) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== userId))
    }
  }

  const handleAddUser = (userData: { name: string; email: string; role: string; manager: string }) => {
    const newPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8)
    const newUser = {
      id: users.length + 1,
      ...userData,
      password: newPassword,
    }
    setUsers([...users, newUser])
    console.log(`New user created with password: ${newPassword}`)
    alert(
      `User created successfully!\n\nEmail: ${userData.email}\nPassword: ${newPassword}\n\n(Password would be sent via email in production)`,
    )
  }

  return (
    <>
      <Card className="border-border shadow-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage user roles and reporting structure</CardDescription>
            </div>
            <Button onClick={() => setIsAddUserOpen(true)} className="gap-2 bg-primary hover:bg-primary/90">
              <UserPlus className="h-4 w-4" />
              Add User
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Manager</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Select value={user.role} onValueChange={(value) => handleRoleChange(user.id, value)}>
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="employee">Employee</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select value={user.manager} onValueChange={(value) => handleManagerChange(user.id, value)}>
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Admin">Admin</SelectItem>
                          <SelectItem value="Sarah Johnson">Sarah Johnson</SelectItem>
                          <SelectItem value="Mike Davis">Mike Davis</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button size="sm" variant="outline" onClick={() => handleSendPassword(user)} className="gap-1">
                          <Mail className="h-3 w-3" />
                          Send Password
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteUser(user.id)}
                          className="gap-1 text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <AddUserModal
        isOpen={isAddUserOpen}
        onClose={() => setIsAddUserOpen(false)}
        onAddUser={handleAddUser}
        existingManagers={users.filter((u) => u.role === "manager").map((u) => u.name)}
      />
    </>
  )
}
