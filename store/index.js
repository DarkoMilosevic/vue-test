export const state = () => ({
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    source_of_attention: '',
    phone: {
        ext: '',
        phone: ''
    },
    vouchers: []
})

export const mutations = {
    first_name (state, value) {
        state.first_name = value
    },
    last_name (state, value) {
        state.last_name = value
    },
    email (state, value) {
        state.email = value
    },
    gender (state, value) {
        state.gender = value
    },
    source_of_attention (state, value) {
        state.source_of_attention = value
    },
    phone (state, value) {
        state.phone.ext = value.ext,
        state.phone.phone = value.phone
    },
    vouchers (state, value) {
        state.vouchers = value
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
        //nije mi jasno zasto ovdje kad uradim console.log state ne bude u redoslijedu kojim sam ga napisao
    }
}