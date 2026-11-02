export type Currency =
  | 'usd'
  | 'eur'
  | 'ars';

export type PaymentStatus =
  | 'pending'
  | 'completed'
  | 'failed'
  | 'refunded';

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