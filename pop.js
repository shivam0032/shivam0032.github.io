function openPhotoContestPopup() {
    Swal.fire({
      title: 'Enter the Photo Contest Today!',
      text: 'Submit your wildlife and nature photos for a chance to win prizes and get published in our award-winning magazine.',
      confirmButtonText: 'Enter Today',
      footer: 'Last day to enter is March 31.',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        linear-gradient(to right, rgba(0,0,123,0.4), rgba(255,255,255,0.4))
      `,
      customClass: {
        confirmButton: 'btn-blue',
        footer: 'footer-class'
      }
    })
  }