'use server'

export async function createPost(prevState: any, formData: FormData) {
  const name = formData.get('name')

  const res = await fetch('https://api.vercel.app/posts', {
    method: 'POST',
    body: JSON.stringify({name}),
  })
  //const json = await res.json()

  if (!res.ok) {
    return { message: 'Failed to create post' }
  }
}