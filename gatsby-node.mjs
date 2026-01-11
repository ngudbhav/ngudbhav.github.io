import fetch from 'node-fetch'

export const sourceNodes = async (
  {
    actions,
    createNodeId,
    createContentDigest,
  }) => {
  const { createNode } = actions

  const owner = "ngudbhav"
  const repo = "ngudbhav.github.io"
  const filePath = "src/data/merchants.json"
  const branch = "master" // or "main"

  const url = `https://api.github.com/repos/${owner}/${repo}/commits?path=${filePath}&sha=${branch}&per_page=1`

  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  })

  const data = await response.json()

  if (!Array.isArray(data) || data.length === 0) {
    return;
  }

  const lastCommit = data[0]
  const lastUpdatedAt = lastCommit.commit.author.date

  createNode({
    id: createNodeId("GitHubFileLastUpdated"),
    lastUpdatedAt,
    filePath,
    internal: {
      type: "GitHubFileMeta",
      contentDigest: createContentDigest(lastUpdatedAt),
    },
  })
}
