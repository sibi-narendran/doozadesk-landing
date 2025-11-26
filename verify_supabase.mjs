
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rndiktnoopmxcwdulspf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuZGlrdG5vb3BteGN3ZHVsc3BmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4MTc5NjMsImV4cCI6MjA3NTM5Mzk2M30.khywq7SrgW3YFlnEvk-nI4jeXAEJDm6u79-9fNLPNxQ';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testSupabase() {
    console.log('Testing Supabase Connection...');

    // 1. Insert a test lead
    const testLead = {
        name: 'Test User ' + Math.floor(Math.random() * 1000),
        email: `test${Math.floor(Math.random() * 1000)}@example.com`,
        phone: '1234567890',
        source: 'test_script',
        created_at: new Date().toISOString()
    };

    console.log('Attempting to insert:', testLead);

    const { data: insertData, error: insertError } = await supabase
        .from('leads')
        .insert([testLead])
        .select();

    if (insertError) {
        console.error('❌ Insert Error:', insertError);
        return;
    }

    console.log('✅ Insert Successful:', insertData);

    // 2. Fetch leads to verify
    console.log('Fetching leads to verify...');
    const { data: fetchData, error: fetchError } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

    if (fetchError) {
        console.error('❌ Fetch Error:', fetchError);
        return;
    }

    console.log('✅ Fetch Successful. Recent leads:', fetchData);

    // Check if our inserted lead is there
    const found = fetchData.find(l => l.email === testLead.email);
    if (found) {
        console.log('🎉 Verification Complete: The inserted lead was found in the database.');
    } else {
        console.error('⚠️ Verification Failed: The inserted lead was NOT found in the fetch results.');
    }
}

testSupabase();
