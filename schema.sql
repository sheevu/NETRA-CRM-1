-- Vyapai CRM / Sudarshan AI Database Schema for Neon PostgreSQL

-- 1. Merchants Table
CREATE TABLE IF NOT EXISTS merchants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    store_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Customers (Udhaar Khatabook) Table
CREATE TABLE IF NOT EXISTS customers (
    id SERIAL PRIMARY KEY,
    merchant_id INT REFERENCES merchants(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    balance NUMERIC(10, 2) DEFAULT 0.00, -- Positive = Lena Hai (Due to merchant), Negative = Dena Hai
    due_days INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Transactions Table (Udhaar & Jama Entries)
CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(id) ON DELETE CASCADE,
    merchant_id INT REFERENCES merchants(id) ON DELETE CASCADE,
    amount NUMERIC(10, 2) NOT NULL,
    type VARCHAR(10) CHECK (type IN ('CREDIT', 'DEBIT')), -- CREDIT = Udhaar Given, DEBIT = Payment Received
    note TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Inventory / Products Table
CREATE TABLE IF NOT EXISTS inventory (
    id SERIAL PRIMARY KEY,
    merchant_id INT REFERENCES merchants(id) ON DELETE CASCADE,
    item_name VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    stock_quantity INT DEFAULT 0,
    unit VARCHAR(50) DEFAULT 'pcs',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Invoices Table
CREATE TABLE IF NOT EXISTS invoices (
    id SERIAL PRIMARY KEY,
    merchant_id INT REFERENCES merchants(id) ON DELETE CASCADE,
    customer_name VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(20),
    total_amount NUMERIC(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'UNPAID', -- UNPAID, PAID, PARTIAL
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Sample Data Insertion
INSERT INTO merchants (name, store_name, phone)
VALUES ('Ramesh Sharma', 'Ramesh Kirana Store', '+919876543210')
ON CONFLICT (phone) DO NOTHING;

INSERT INTO customers (merchant_id, name, phone, balance, due_days) VALUES
(1, 'Sharma Ji', '+919812345678', 8400.00, 8),
(1, 'Gupta Ji', '+919823456789', 12500.00, 15),
(1, 'Verma Ji', '+919834567890', 4200.00, 3),
(1, 'Singh Sb', '+919845678901', 7000.00, 12);
