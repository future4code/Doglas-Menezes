export const goToLogin=(history)=>{
  history.push('/')
}

export const goToSingUpPage=(history)=>{
  history.push('/Cadastro')
}

export const goToFeedPage=(history)=>{
  history.push('/feed')
}

export const goToPostDetails=(history,id)=>{
  history.push(`/post/${id}`)
}