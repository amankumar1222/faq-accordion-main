console.log('Aman kumar');


const faqItem = document.querySelectorAll(".faq-item")


faqItem.forEach(item => {

    const minusBtn = item.querySelector(".minus-button")
    const plusBtn = item.querySelector(".plus-button")
    const question = item.querySelector('.question');
    const answer = item.querySelector('.answer');

    plusBtn.addEventListener('click', () => {

        plusBtn.classList.add("hide")
        minusBtn.classList.remove("hide")
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        }
        else {
            answer.style.display = 'block'
        }
    })


    minusBtn.addEventListener('click', () => {
        minusBtn.classList.add("hide")
        plusBtn.classList.remove("hide")
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        }
        else {
            answer.style.display = 'block'
        }

    })



})