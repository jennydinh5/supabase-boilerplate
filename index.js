import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0"

const supabaseUrl = 'https://iimsizhtfepbtylyyblb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpbXNpemh0ZmVwYnR5bHl5YmxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxNTYwMjgsImV4cCI6MTk5MzczMjAyOH0.gwFQWwvm3bZMWV4Ghv3L0EPw5ccLDIF22YHDmz1zz0Q'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
    .from('books')
    .select('*')
  
  for (let book of books) {
    let bookList = document.getElementById('books');
   bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.ISBN}</td><td>${book.description}</td></tr>`;
  }
}
getBooks();

