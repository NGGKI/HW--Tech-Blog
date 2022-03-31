document.getElementById("addform").addEventListener("click", async (event) => {
  event.preventDefault()

  const newTitle = document.getElementById("title").value
  const newContent = document.getElementById("description").value

  console.log(newContent, newTitle);

  const response = await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: newTitle,
      body: newContent,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert('Oke')
    return
  } else { alert("not OKE") }

});
