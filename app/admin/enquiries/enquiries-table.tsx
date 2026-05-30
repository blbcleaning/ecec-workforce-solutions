'use client'

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { MailIcon, PhoneIcon, BuildingIcon, EyeIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react'

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

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

function formatRelativeTime(dateString: string) {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 60) {
    return `${diffMins} min${diffMins !== 1 ? 's' : ''} ago`
  } else if (diffHours < 24) {
    return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`
  } else if (diffDays < 7) {
    return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`
  }
  return formatDate(dateString)
}

export function EnquiriesTable({ enquiries }: { enquiries: Enquiry[] }) {
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null)

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Organisation</TableHead>
            <TableHead>Email Sent</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {enquiries.map((enquiry) => (
            <TableRow key={enquiry.id}>
              <TableCell className="text-muted-foreground text-sm">
                {formatRelativeTime(enquiry.created_at)}
              </TableCell>
              <TableCell className="font-medium">{enquiry.name}</TableCell>
              <TableCell>
                <a 
                  href={`mailto:${enquiry.email}`} 
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  {enquiry.email}
                </a>
              </TableCell>
              <TableCell>
                <Badge variant="secondary">{enquiry.role}</Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">
                {enquiry.organisation || '-'}
              </TableCell>
              <TableCell>
                {enquiry.email_sent ? (
                  <Badge variant="default" className="bg-green-600">
                    <CheckCircleIcon className="h-3 w-3 mr-1" />
                    Sent
                  </Badge>
                ) : (
                  <Badge variant="destructive">
                    <XCircleIcon className="h-3 w-3 mr-1" />
                    Failed
                  </Badge>
                )}
              </TableCell>
              <TableCell className="text-right">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSelectedEnquiry(enquiry)}
                    >
                      <EyeIcon className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Enquiry from {enquiry.name}</DialogTitle>
                      <DialogDescription>
                        Submitted {formatDate(enquiry.created_at)}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Email</p>
                          <a 
                            href={`mailto:${enquiry.email}`}
                            className="flex items-center gap-2 text-primary hover:underline"
                          >
                            <MailIcon className="h-4 w-4" />
                            {enquiry.email}
                          </a>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Phone</p>
                          {enquiry.phone ? (
                            <a 
                              href={`tel:${enquiry.phone}`}
                              className="flex items-center gap-2 text-primary hover:underline"
                            >
                              <PhoneIcon className="h-4 w-4" />
                              {enquiry.phone}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">Not provided</p>
                          )}
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Role</p>
                          <Badge variant="secondary">{enquiry.role}</Badge>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Organisation</p>
                          {enquiry.organisation ? (
                            <p className="flex items-center gap-2">
                              <BuildingIcon className="h-4 w-4 text-muted-foreground" />
                              {enquiry.organisation}
                            </p>
                          ) : (
                            <p className="text-muted-foreground">Not provided</p>
                          )}
                        </div>
                        {enquiry.centres && (
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Number of Centres</p>
                            <p>{enquiry.centres}</p>
                          </div>
                        )}
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Email Status</p>
                          {enquiry.email_sent ? (
                            <Badge variant="default" className="bg-green-600">
                              <CheckCircleIcon className="h-3 w-3 mr-1" />
                              Notification Sent
                            </Badge>
                          ) : (
                            <Badge variant="destructive">
                              <XCircleIcon className="h-3 w-3 mr-1" />
                              Failed - Check Manually
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Message</p>
                        <div className="bg-muted p-4 rounded-lg">
                          <p className="whitespace-pre-wrap">{enquiry.message}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 pt-4">
                        <Button asChild>
                          <a href={`mailto:${enquiry.email}?subject=Re: Your enquiry to ECEC Workforce Solutions`}>
                            <MailIcon className="h-4 w-4 mr-2" />
                            Reply via Email
                          </a>
                        </Button>
                        {enquiry.phone && (
                          <Button variant="outline" asChild>
                            <a href={`tel:${enquiry.phone}`}>
                              <PhoneIcon className="h-4 w-4 mr-2" />
                              Call
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
