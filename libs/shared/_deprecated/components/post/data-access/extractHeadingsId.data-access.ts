const extractHeadingsId = (totalHeadingsLength: number) => {
  const extractedIds: string[] = []
  const handleIdExtracted = (id: string) => {
    extractedIds.push(id)

    if (totalHeadingsLength === extractedIds.length) {
      // ids for toc
      console.log(extractedIds)
    }
  }

  return { handleIdExtracted }
}

export { extractHeadingsId }
