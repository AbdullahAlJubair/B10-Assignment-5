function donateTab() {
    document.getElementById('donateTabBtn').classList.add('bg-Accent', 'hover:bg-Accent');
    document.getElementById('historyTabBtn').classList.remove('bg-Accent', 'hover:bg-Accent');

    document.getElementById('history-container').classList.add('hidden');
    document.getElementById('donation-container').classList.remove('hidden');

}
function historyTab() {
    document.getElementById('historyTabBtn').classList.remove('bg-transparent', 'hover:bg-transparent');
    document.getElementById('historyTabBtn').classList.add('bg-Accent', 'hover:bg-Accent');
    document.getElementById('donateTabBtn').classList.remove('bg-Accent', 'hover:bg-Accent');

    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('history-container').classList.remove('hidden');
}


let cards = document.querySelectorAll('.donateBtn');
for (const card of cards) {
    card.addEventListener('click', function () {
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
    })
}

