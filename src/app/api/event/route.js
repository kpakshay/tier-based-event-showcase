import { supabase } from '../../../../lib/supabaseClient';

export async function GET() {
  const { data, error } = await supabase.from('events').select('*').order('event_date');
if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}