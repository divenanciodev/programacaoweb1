// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        event.preventDefault()
        
        const formData = {}
        form.querySelectorAll('input, select').forEach(el => {
          if (el.type === 'radio') {
            if (el.checked) {
              formData[el.name] = el.id
            }
          } else if (el.type === 'checkbox') {
            formData[el.id] = el.checked
          } else if (el.id) {
            formData[el.id] = el.value
          }
        })

        localStorage.setItem('checkoutData', JSON.stringify(formData))
        window.location.href = 'success.html'
      }

      form.classList.add('was-validated')
    }, false)
  })

  // Dynamic Input Masking Functions
  const maskCPF = (value) => {
    return value
      .replace(/\D/g, '') // remove non-digits
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
      .slice(0, 14)
  }

  const maskCEP = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 9)
  }

  const maskCCNumber = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{4})(?=\d)/g, '$1 ')
      .slice(0, 19)
  }

  const maskCCExpiration = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .slice(0, 5)
  }

  const maskCVV = (value) => {
    return value
      .replace(/\D/g, '')
      .slice(0, 4)
  }

  // Bind masking event listeners
  const cpfInput = document.getElementById('cpf')
  if (cpfInput) {
    cpfInput.addEventListener('input', (e) => {
      e.target.value = maskCPF(e.target.value)
    })
  }

  const zipInput = document.getElementById('zip')
  if (zipInput) {
    zipInput.addEventListener('input', (e) => {
      e.target.value = maskCEP(e.target.value)
    })
  }

  const ccNumberInput = document.getElementById('cc-number')
  if (ccNumberInput) {
    ccNumberInput.addEventListener('input', (e) => {
      e.target.value = maskCCNumber(e.target.value)
    })
  }

  const ccExpInput = document.getElementById('cc-expiration')
  if (ccExpInput) {
    ccExpInput.addEventListener('input', (e) => {
      e.target.value = maskCCExpiration(e.target.value)
    })
  }

  const cvvInput = document.getElementById('cc-cvv')
  if (cvvInput) {
    cvvInput.addEventListener('input', (e) => {
      e.target.value = maskCVV(e.target.value)
    })
  }
})()
