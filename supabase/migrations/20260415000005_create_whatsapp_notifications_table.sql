-- Create whatsapp_notifications table for tracking ministry join requests
CREATE TABLE IF NOT EXISTS whatsapp_notifications (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  ministry_name text NOT NULL,
  recipient_number text NOT NULL,
  message text NOT NULL,
  whatsapp_url text NOT NULL,
  status text DEFAULT 'pending', -- pending, sent, failed
  sent_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- Add RLS policies
ALTER TABLE whatsapp_notifications ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to read whatsapp notifications
CREATE POLICY "Allow authenticated users to read whatsapp notifications" ON whatsapp_notifications
  FOR SELECT USING (auth.role() = 'authenticated');

-- Allow authenticated users to insert whatsapp notifications
CREATE POLICY "Allow authenticated users to insert whatsapp notifications" ON whatsapp_notifications
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Add to realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE whatsapp_notifications;