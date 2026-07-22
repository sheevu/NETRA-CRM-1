import { sql, isNeonConnected } from '../lib/neon';

export const getCustomers = async () => {
  if (isNeonConnected()) {
    try {
      const data = await sql`SELECT * FROM customers ORDER BY created_at DESC;`;
      return data;
    } catch (err) {
      console.error('Neon DB Error (getCustomers):', err);
    }
  }

  // Fallback / Initial Mock Data
  return [
    { id: 1, name: "Sharma Ji", balance: 8400, due_days: 8, phone: "+919812345678" },
    { id: 2, name: "Gupta Ji", balance: 12500, due_days: 15, phone: "+919823456789" },
    { id: 3, name: "Verma Ji", balance: 4200, due_days: 3, phone: "+919834567890" },
    { id: 4, name: "Singh Sb", balance: 7000, due_days: 12, phone: "+919845678901" },
  ];
};

export const addCustomer = async (name, phone, balance) => {
  if (isNeonConnected()) {
    try {
      const result = await sql`
        INSERT INTO customers (merchant_id, name, phone, balance)
        VALUES (1, ${name}, ${phone}, ${balance})
        RETURNING *;
      `;
      return result[0];
    } catch (err) {
      console.error('Neon DB Error (addCustomer):', err);
    }
  }
  return { id: Date.now(), name, phone, balance, due_days: 0 };
};

export const getDailyStats = async () => {
  if (isNeonConnected()) {
    try {
      const totalSales = await sql`SELECT SUM(amount) FROM transactions WHERE DATE(created_at) = CURRENT_DATE;`;
      const outstanding = await sql`SELECT SUM(balance) FROM customers WHERE balance > 0;`;
      return {
        todaySales: totalSales[0]?.sum || 18420,
        outstanding: outstanding[0]?.sum || 32100
      };
    } catch (err) {
      console.error('Neon DB Error (getDailyStats):', err);
    }
  }
  return { todaySales: 18420, outstanding: 32100 };
};
