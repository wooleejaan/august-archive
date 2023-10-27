const dateTextConverter = (dateString: string): string => {
  const [year, month, date] = dateString.split('-')
  return `${year}년 ${Number(month)}월 ${date}일`
}

export default dateTextConverter
