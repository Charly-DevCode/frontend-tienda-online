export const INVOICE_STATUSES = [
  'pending',  // Pendiente de pago
  'paid',     // Pagada
  'voided',   // Anulada
  'refunded', // Reembolsada  
] as const;

export type InvoiceStatus = typeof INVOICE_STATUSES[number];

export interface IUpdateInvoiceStatus {
  status: InvoiceStatus;
}

export interface IInvoiceResponse {
  id: number; // entero
  invoiceNumber: string;
  date: string;
  status: InvoiceStatus;
  fullName: string;
  total: number; // Decimal
}

export interface IInvoicePaginationResponse {
  counter: number; // entero
  pages: number;  // entero
  offset: number;  // entero
  page: number;  // entero
  pageSize: number;  // entero
  invoices: IInvoiceResponse[];
}