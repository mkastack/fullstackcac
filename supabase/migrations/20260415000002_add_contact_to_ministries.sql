-- Add contact column to ministries table
ALTER TABLE IF EXISTS ministries
ADD COLUMN IF NOT EXISTS contact text;

-- Add comment to the column
COMMENT ON COLUMN ministries.contact IS 'Contact phone number for the ministry';
