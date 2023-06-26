import { utilService } from "./util.service"

export const userService = {
    login,
    getLoggedInUser,
    getEmptyUser,
    logout,
    transferFunds,
    getTransactions,
}

function getEmptyUser() {
    return {
        name: '',
        balance: 100,
        transactions: []
    }
}

function login(name) {
    let user = utilService.loadFromStorage('user')
    if (user && user.name === name) return
    else {
        user = getEmptyUser()
        user._id = utilService.makeId()
        user.name = name
        utilService.saveToStorage('user', user)
    }
    return user
}

function logout() {
    utilService.clearStorage('user')
}

function getLoggedInUser() {
    return utilService.loadFromStorage('user')
}

function transferFunds(amount, contactId, contactName) {
    const user = utilService.loadFromStorage('user')
    const transaction = {
        toId: contactId,
        to: contactName,
        at: utilService.formatDate(new Date(), 'en-GB'),
        amount
    }
    user.transactions.push(transaction)
    user.balance -= amount
    console.log('user.balance', user.balance)
    utilService.saveToStorage('user', user)
}

function getTransactions() {
    const user = utilService.loadFromStorage('user')
    return user.transactions
}