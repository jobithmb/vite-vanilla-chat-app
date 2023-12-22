import '../styles/components/tabs.scss'

const tabs = document.querySelectorAll('.tabs .tab')
const buttons = document.querySelectorAll('.buttons .button')

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const parent = e.target.parentNode
        // resetting active on button
        buttons.forEach(btn => btn.classList = 'button')
        // setting active for current button
        parent.classList = 'button active'
        // getting the target tab
        const target = parent.getAttribute('data-target')
        // resetting the tabs with no active class
        tabs.forEach(tab => tab.classList = 'tab')
        // setting active class for targe tab
        const tab = document.querySelector(`.tab[data-name="${target}"]`)
        tab.classList = 'tab active'
    })
})