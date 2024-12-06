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




