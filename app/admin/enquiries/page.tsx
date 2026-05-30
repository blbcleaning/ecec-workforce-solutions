import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { EnquiriesTable } from './enquiries-table'
import { MailIcon, PhoneIcon, UserIcon, BuildingIcon, CalendarIcon, InboxIcon } from 'lucide-react'

interface Enquiry {
  id: string
  name: string
  email: string
  phone: string | null
  organisation: string | null
  role: string
  centres: string | null
  message: string
  email_sent: boolean
  created_at: string
}

export const metadata = {
  title: 'Admin - Enquiries',
  robots: {
    index: false,
    follow: false,
  },
}

export const dynamic = 'force-dynamic'

export default async function AdminEnquiriesPage() {
  const supabase = await createClient()
  
  const { data: enquiries, error } = await supabase
    .from('enquiries')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching enquiries:', error)
  }

  const totalEnquiries = enquiries?.length || 0
  const emailsSent = enquiries?.filter(e => e.email_sent).length || 0
  const emailsFailed = totalEnquiries - emailsSent
  const todayEnquiries = enquiries?.filter(e => {
    const today = new Date()
    const enquiryDate = new Date(e.created_at)
    return enquiryDate.toDateString() === today.toDateString()
  }).length || 0

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-foreground">Enquiries Dashboard</h1>
          <p className="text-sm text-muted-foreground">Monitor contact form submissions</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Enquiries</CardDescription>
              <CardTitle className="text-3xl">{totalEnquiries}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <InboxIcon className="h-4 w-4" />
                <span>All time</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Today</CardDescription>
              <CardTitle className="text-3xl">{todayEnquiries}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <CalendarIcon className="h-4 w-4" />
                <span>New today</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Emails Sent</CardDescription>
              <CardTitle className="text-3xl text-green-600">{emailsSent}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MailIcon className="h-4 w-4" />
                <span>Notifications sent</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Email Failed</CardDescription>
              <CardTitle className="text-3xl text-destructive">{emailsFailed}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MailIcon className="h-4 w-4" />
                <span>Check manually</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enquiries Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Enquiries</CardTitle>
            <CardDescription>
              View and manage all contact form submissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            {enquiries && enquiries.length > 0 ? (
              <EnquiriesTable enquiries={enquiries} />
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <InboxIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No enquiries yet</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
