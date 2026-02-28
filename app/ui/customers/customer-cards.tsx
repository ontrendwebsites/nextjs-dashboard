import Image from 'next/image';
import { FormattedCustomersTable } from '@/app/lib/definitions';
import {
  EnvelopeIcon,
  DocumentTextIcon,
  ClockIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export default function CustomerCards({
  customers,
}: {
  customers: FormattedCustomersTable[];
}) {
  if (customers.length === 0) {
    return (
      <p className="mt-4 text-gray-400">No customers found.</p>
    );
  }

  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {customers.map((customer) => (
        <div
          key={customer.id}
          className="flex flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
        >
          <div className="flex items-center gap-4">
            <Image
              src={customer.image_url}
              alt={`${customer.name}'s profile picture`}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="min-w-0">
              <p className="truncate font-semibold text-gray-900">
                {customer.name}
              </p>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <EnvelopeIcon className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{customer.email}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 divide-x divide-gray-100 rounded-lg bg-gray-50 text-center">
            <div className="px-2 py-3">
              <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                <DocumentTextIcon className="h-3.5 w-3.5" />
                <span>Invoices</span>
              </div>
              <p className="mt-1 font-semibold text-gray-900">
                {customer.total_invoices}
              </p>
            </div>
            <div className="px-2 py-3">
              <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                <ClockIcon className="h-3.5 w-3.5" />
                <span>Pending</span>
              </div>
              <p className="mt-1 font-semibold text-yellow-600">
                {customer.total_pending}
              </p>
            </div>
            <div className="px-2 py-3">
              <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                <CheckCircleIcon className="h-3.5 w-3.5" />
                <span>Paid</span>
              </div>
              <p className="mt-1 font-semibold text-green-600">
                {customer.total_paid}
              </p>
            </div>
          </div>

          <p className="mt-3 text-xs text-gray-400">
            Customer since{' '}
            {new Date(customer.created_at).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </div>
      ))}
    </div>
  );
}
