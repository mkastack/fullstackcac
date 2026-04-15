-- Update ministry contact information
UPDATE ministries SET contact = '+233243725214' WHERE name ILIKE '%media%';
UPDATE ministries SET contact = '+233557705478' WHERE name ILIKE '%media%' AND contact IS NULL;
UPDATE ministries SET contact = '+233595232835' WHERE name ILIKE '%music%';
UPDATE ministries SET contact = '+233595232835' WHERE name ILIKE '%worship%';
-- Women ministry contact will be added when provided