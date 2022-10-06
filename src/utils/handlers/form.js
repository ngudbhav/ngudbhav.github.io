const SUCCESS_CODE = 200;

export const submit = async (event) => {
  const response = await window.fetch(
    '/api/contact', { method: 'POST', body: new FormData(event.target) },
  )
  if (response.status === SUCCESS_CODE) {} else {
    alert();
  }
}

const alert = () => window.alert('Something went wrong. Please try again.');
