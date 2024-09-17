function showToast(message){
    const toastContainer = document.getElementById('toast');

    const toast = document.createElement('div')
    toast.classList.add('toast-content')
    toast.innerHTML = message;
    toastContainer.appendChild(toast)

    if(message.includes('error')){
        toast.classList.add('error')
    }

    if(message.includes('Success')){
        toast.classList.add('success')
    }

    if(message.includes('Invalid')){
        toast.classList.add('invalid')
    }

    setInterval(() => {
        toast.remove()
    }, 3000);

}