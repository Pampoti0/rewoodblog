import Article from 'src/components/Article'

import type { FindArticleQuery, FindArticleQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindArticleQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

interface Props
  extends CellSuccessProps<FindArticleQuery, FindArticleQueryVariables> {
  rand: number
}

export const Success = ({ article }: Props) => {
  return <Article article={article} />
}
