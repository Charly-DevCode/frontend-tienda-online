import type { InvoiceStatus } from "@/shared/types/invoice.status.type";

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