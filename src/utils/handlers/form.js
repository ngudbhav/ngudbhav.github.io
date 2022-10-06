const SUCCESS_CODE = 200;

export const submit = async (formData) => {
  const options = {
    method: 'POST',
    body: formData,
  }
  const response = await window.fetch(
    '/api/contact', options,
  )
  if (response.status === SUCCESS_CODE) {} else {
    alert();
  }
}

const alert = () => window.alert('Something went wrong. Please try again.');
