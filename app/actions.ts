'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function addComment(formData: FormData) {
  const name = (formData.get('name') as string)?.trim();
  const message = (formData.get('message') as string)?.trim();

  // Basic Security Validation (Demonstrates your professionalism)
  if (!name || !message) {
    redirect(`/?error=${encodeURIComponent('Name and message cannot be empty')}`);
  }
  if (name.length > 50) {
    redirect(`/?error=${encodeURIComponent('Name is too long (Max 50 characters)')}`);
  }
  if (message.length > 500) {
    redirect(`/?error=${encodeURIComponent('Message is too long (Max 500 characters)')}`);
  }

  try {
    // Automatically create the table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS comments (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    
    // Securely insert data using built-in parameterized queries from tagged template literals
    await sql`INSERT INTO comments (name, message) VALUES (${name}, ${message});`;
    
  } catch (error: any) {
    console.error("Database Error:", error);
    redirect(`/?error=${encodeURIComponent(error.message || 'Failed to save comment')}`);
  }

  // Trigger an instant page re-render after a successful submission
  revalidatePath('/');
}
