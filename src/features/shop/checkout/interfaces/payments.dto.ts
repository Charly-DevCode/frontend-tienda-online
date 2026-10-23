import type { Currency } from "@/shared/types/payments.type";


interface IPaymentBase {
  invoiceId: number;
  amount: number; // Entero
  currency: Currency;
}

export interface IPaymentPublic extends IPaymentBase {
  id: number;
  status: string;
  createAt: string;
}

export interface ICardStripe {
  token: string
}