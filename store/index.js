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
    firstNameChange (state, value) {
        state.first_name = value
    },
    lastNameChange (state, value) {
        state.last_name = value
    },
    emailSet (state, value) {
        state.email = value
    },
    genderSet (state, value) {
        state.gender = value
    },
    sourceSet (state, value) {
        state.source_of_attention = value
    },
    extSet (state, value) {
        state.phone.ext = value
    },
    phoneSet (state, value) {
        state.phone.phone = value
    },
    voucherSet (state, value) {
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