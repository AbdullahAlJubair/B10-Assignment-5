//Donate Tab Button Function
function donateTab() {
    document.getElementById('donateTabBtn').classList.add('bg-Accent', 'hover:bg-Accent');
    document.getElementById('historyTabBtn').classList.remove('bg-Accent', 'hover:bg-Accent');

    document.getElementById('history-container').classList.add('hidden');
    document.getElementById('donation-container').classList.remove('hidden');

}
//History Tab Button Function
function historyTab() {
    document.getElementById('historyTabBtn').classList.remove('bg-transparent', 'hover:bg-transparent');
    document.getElementById('historyTabBtn').classList.add('bg-Accent', 'hover:bg-Accent');
    document.getElementById('donateTabBtn').classList.remove('bg-Accent', 'hover:bg-Accent');

    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('history-container').classList.remove('hidden');
}

//Donate Buttons Functionality for All Card
let cards = document.querySelectorAll('.donateBtn');
for (const card of cards) {
    card.addEventListener('click', function () {
        //Card Title
        const cardTitle = this.parentElement.children[1].innerText;

        // Card Old Amount
        const oldDonationAmount = this.parentElement.children[0].children[1].children[0];
        const oldDonation = Number(oldDonationAmount.innerText);

        // Card Input Field Amount
        const inputDonationAmount = this.parentElement.children[3].children[0];
        const inputDonation = parseFloat(inputDonationAmount.value);

        // Header Main Balance Amount
        const mainBalanceAmount = document.getElementById('mainBalance');
        const mainBalance = Number(mainBalanceAmount.innerText);

        if (isNaN(inputDonation) || inputDonation < 0) {
            return alert('Please Input Valid Number'), inputDonationAmount.value = '';
        }
        else if (inputDonation > mainBalance) {
            return alert("You don't have enough balance "), inputDonationAmount.value = '';
        }

        // New Donation Amount Assigned
        const newDonation = oldDonation + inputDonation;
        oldDonationAmount.innerText = newDonation;
        // New Main Balance AMount Assigned
        const newMainBalance = mainBalance - inputDonation;
        mainBalanceAmount.innerText = newMainBalance;

        inputDonationAmount.value = '';
        document.getElementById('my_modal_1').showModal()
        history(inputDonation, cardTitle)
    })
}

//Get History Data by Function and Setting Data for History Layout
function history(amount, title) {
    const section = document.getElementById('history-container');
    const div = document.createElement('div');
    div.classList.add('border', 'rounded-xl', 'p-4', 'md:p-8', 'mx-2', 'space-y-4');
    div.innerHTML = `
        <h3 class="text-lg md:text-xl font-bold">${amount} Taka is Donated for ${title}</h3>
        <p class="text-base font-light text-gray-500">Date : ${Date()}</p>
    `
    section.appendChild(div);
    console.log(section.this);
}
