// Add Class Active For Link
document.querySelectorAll('ul li a').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    // Remove the 'active' class from all links
    document.querySelectorAll('ul li a').forEach((link) => {
      link.classList.remove('active_Anchor')
    })
    // Add the 'active' class to the clicked link
    this.classList.add('active_Anchor')
  })
})
// Add Border Bottom To Links
document.querySelectorAll('ul li').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    // Remove the 'active' class from all links
    document.querySelectorAll('ul li ').forEach((link) => {
      link.classList.remove('active_border')
    })
    // Add the 'active' class to the clicked link
    this.classList.add('active_border')
  })
})