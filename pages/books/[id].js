import { useRouter } from 'next/router'
import books from '../../root/books.json'

export default () => {
  const router = useRouter()

  return (
    <>
      <h1>Books</h1>
      <h1>{books.title}</h1>
      <h1>{books.content}</h1>
      <p>Book id: {router.query.id}</p>
    </>
  )
}