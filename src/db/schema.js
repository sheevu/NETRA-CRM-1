import { pgTable, serial, varchar, numeric, integer, text, timestamp } from 'drizzle-orm/pg-core';

// 1. Merchants Table
export const merchants = pgTable('merchants', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  storeName: varchar('store_name', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 20 }).notNull().unique(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

// 2. Customers Table (Khatabook)
export const customers = pgTable('customers', {
  id: serial('id').primaryKey(),
  merchantId: integer('merchant_id').references(() => merchants.id, { onDelete: 'cascade' }),
  name: varchar('name', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 20 }),
  balance: numeric('balance', { precision: 10, scale: 2 }).default('0.00'),
  dueDays: integer('due_days').default(0),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

// 3. Transactions Table (Udhaar & Jama)
export const transactions = pgTable('transactions', {
  id: serial('id').primaryKey(),
  customerId: integer('customer_id').references(() => customers.id, { onDelete: 'cascade' }),
  merchantId: integer('merchant_id').references(() => merchants.id, { onDelete: 'cascade' }),
  amount: numeric('amount', { precision: 10, scale: 2 }).notNull(),
  type: varchar('type', { length: 10 }).notNull(), // CREDIT or DEBIT
  note: text('note'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

// 4. Inventory Table
export const inventory = pgTable('inventory', {
  id: serial('id').primaryKey(),
  merchantId: integer('merchant_id').references(() => merchants.id, { onDelete: 'cascade' }),
  itemName: varchar('item_name', { length: 255 }).notNull(),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(),
  stockQuantity: integer('stock_quantity').default(0),
  unit: varchar('unit', { length: 50 }).default('pcs'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

// 5. Invoices Table
export const invoices = pgTable('invoices', {
  id: serial('id').primaryKey(),
  merchantId: integer('merchant_id').references(() => merchants.id, { onDelete: 'cascade' }),
  customerName: varchar('customer_name', { length: 255 }).notNull(),
  customerPhone: varchar('customer_phone', { length: 20 }),
  totalAmount: numeric('total_amount', { precision: 10, scale: 2 }).notNull(),
  status: varchar('status', { length: 50 }).default('UNPAID'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});
