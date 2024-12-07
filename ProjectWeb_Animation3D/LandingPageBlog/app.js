window.onload = () => {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            ${btn.textContent}
        `
    })

    // card hover effect
    document.querySelectorAll('.card').forEach(card => {
        let content = card.querySelector('.content')
        let footer = content.querySelector('.footer')

        content.style.bottom = `-${footer.offsetHeight}px`

        // card hover
        card.addEventListener('mouseover', () => {
            content.style.bottom = `0`
        })

        card.addEventListener('mouseleave', () => {
            content.style.bottom = `-${footer.offsetHeight}px`
        })
    })
}