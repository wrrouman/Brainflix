function formatTimestamp (timestamp){
  const date = new Date (timestamp) 
  // "2/4/2020"
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}

export {formatTimestamp};

