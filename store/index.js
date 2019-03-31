export const state = () => ({
})

export const mutations = {
    storeSet (state, value) {
        state[value.name] = value.value
    },
    voucherRemove (state, value) {
        if (state.vouchers.length > 1) {
            state.vouchers.splice(value, 1)
        }
        else {
            alert('Minimum one voucher is required')
        }
    }
}

export const actions = {
    postData({ state }) {
        console.log(state)
    }
}